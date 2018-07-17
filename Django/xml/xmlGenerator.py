import os
import json
import copy
import fileinput

from xmlStructure import xmlElement, xmlAttribute, fileObject, dlog, textElement, savedState
# from xmlExtensions import xmlFilesExtenstionModule, inlineExtenstionModule

#TODO
# 1. add allowempty flag for elements with attrivutes only
# 2. Warn for empty required elements

# HELPER Methods

ERROR_STRING = "\033[41m\033[37mERROR:\033[0m "
WARNING_STRING = "\033[43mWARNING:\033[0m "

def pretty_print_string(level):
    """
    Print some tabs to give the xml output a better structure
    """
    res = ''
    for idx in xrange(level):
        res += '   '
    return res

class xmlGenerator(object):

    def __init__(self, data, files):
        self.filesToCreate = files
        self.json_data = data
        self.extensions = []
        self.createdFiles = []
        self.numberOfFiles = 0
        self.currentFileID = None
        self.currentFob = None
        self.remainingParts = {}

    def addExtension(self, extension):
        self.extensions.append(extension)

    def resolveVar(self, var_name, local_data={}):
        parts = var_name.split('.')
        if len(parts) == 1:
            if parts[0] in self.json_data:
                return self.json_data[parts[0]]
            elif parts[0] in local_data:
                return local_data[parts[0]]
            else:
                print WARNING_STRING + 'missing variable "' + var_name + '" in json_data'
                return ''
        elif len(parts) <= 0:
            print ERROR_STRING + 'var can\'t be empty.'
        else:
            if parts[0] in local_data:
                temp = local_data[parts[0]]
                if parts[1] in temp:
                    return temp[parts[1]]
                else:
                    print WARNING_STRING + 'missing variable "' + var_name + '" in localdata[' + parts[0] + ']'
                    return ''
            elif parts[0] in self.json_data:
                temp = self.json_data[parts[0]]
                if parts[1] in temp:
                    return temp[parts[1]]
                else:
                    print WARNING_STRING + 'missing variable "' + var_name + '" in json_data[' + parts[0] + ']'
                    return ''
            else:
                print WARNING_STRING + 'missing variable "' + var_name + '" in json_data'
                return ''

    def resolveContent(self, content, local_data={}):
        text = ''
        for textType in content:
            if 'type' in textType and textType['type'] == 'var':
                    # resolve var
                    text += self.resolveVar(textType['data'], local_data)
            else:
                #append text
                text += textType['data']
        return text

    def createXMLElement(self, template, level=0, namespace='', local_data={}, passed_print=''):
        # print template
        # handle extensions.... Needs documentation!!!! TODO
        if 'extension' in template:
            extension_name = template['extension']
            foundExtension = False
            for extension in self.extensions:
                if extension.selector == extension_name:
                    foundExtension = True
                    if extension.requiresOneRunOnly:
                        self.currentFileID.write( passed_print);
                        # Save this state for final one run parsing
                        state = savedState(local_data, template, level, namespace, self.currentFileID)
                        if extension.selector in self.remainingParts:
                            self.remainingParts[extension.selector].append(state)
                        else:
                            self.remainingParts[extension.selector] = [state]

                        # Create new fid for further parsing
                        fileName = 'temp' + str(self.numberOfFiles) + '.txt'
                        self.currentFileID = os.open(fileName,os.O_RDWR|os.O_CREAT)
                        self.currentFob.files.append(fileName)
                        self.numberOfFiles += 1

                    else:
                        # execute now
                        if extension.executeExtension(template, level, namespace, local_data):
                            haveChild = False
                            if 'children' in template:
                                for child in template['children']:
                                    if self.createXMLElement(child, level, namespace, local_data, passed_print):
                                        haveChild = True
                                        passed_print = ''
                            if not haveChild:
                                return False
                    break
            if not foundExtension:
                print "ERROR: Extension \"" + extension_name + "\" is not loaded"
                return False
            return True

        # if the element is missing name, check if it is a content tag instead or just an invalid template.
        if 'name' not in template:
            if 'content' in template:
                text = self.resolveContent(template['content'], local_data)
                if text != '':
                    self.currentFileID.write(passed_print + pretty_print_string(level) + text + '\n')
                    # print pretty_print_string(level) + text
                    return True
            else:
                print ERROR_STRING + 'missing name on xml Element'
            return False

        # calculate the min and max occurrences of this element. Start with default values then
        # TODO replace with template.get('min', 0)
        minCount=0
        maxCount=-1
        if 'min' in template:
            minCount = template['min']
        if 'max' in template:
            maxCount = template['max']

        # get the name of the element. It is already known that the template has a name attribute.
        tagName = template['name']

        # check if the namespace should be changed. Since namespace is inherited the value can be empty to remove the namespace.
        if 'namespace' in template:
            namespace = template['namespace']

        # if the namespace exists, add it to the tag.
        if namespace != '':
            tagName = namespace + ':' + tagName


        attributes = ''
        newElement = xmlElement(template['name'], namespace)
        if 'attributes' in template:
            #parse attributes. Attributes must always be a list.
            for attribute in template['attributes']:
                # Every attribute needs to have a name, if it does not have a name fail early.
                if 'name' not in attribute:
                    print ERROR_STRING + 'missing name on xml attribute'
                    return False
                # solve text content
                if 'content' in attribute:
                    attributes += ' ' + attribute['name'] + '=\"' + self.resolveContent(attribute['content'], local_data) + '\"'

        haveChild = False
        if 'children' in template:
            # self.currentFileID.write( pretty_print_string(level) + '<' + tagName + attributes + '>\n')
            tempString = passed_print + pretty_print_string(level) + '<' + tagName + attributes + '>\n'
            for child in template['children']:
                if 'repeat' in child:
                    repeat = child['repeat'].split(' ')
                    var_name = repeat[1]
                    array_name = repeat[3]
                    array = self.resolveVar(array_name, local_data)
                    if isinstance(array, list):
                        i = 0
                        for o in array:
                            temp = dict(o)
                            temp['_index'] = i
                            local = dict(local_data)
                            if var_name not in local:
                                local[var_name] = temp
                            else:
                                print ERROR_STRING + 'Duplicate variable name "' + var_name + '" in nested loops'
                                return False
                            if self.createXMLElement(child, level+1, namespace, local, tempString):
                                haveChild = True
                                tempString = ''

                            i += 1
                    else:
                        print ERROR_STRING + 'array not found for repeat: "' + child['repeat'] + '"'
                        return False
                else:
                    if self.createXMLElement(child, level+1, namespace, local_data, tempString):
                        haveChild = True
                        tempString = ''
            if haveChild:
                self.currentFileID.write( pretty_print_string(level) + '</' + tagName + '>\n')
                return True
        # if the element does not have any children, should it still be rendered?

        # needs more parameters? TODO? Default should always render element with children. Element with no children but with attributes will also be rendered by default. Elements with no children or attributes will not be rendered. This can be changed with allowEmpty.

        if haveChild == False:
            if attributes != '':
                # if 'allowempty' in template and template['allowempty'] == 1:
                self.currentFileID.write( passed_print + pretty_print_string(level) + '<' + tagName + attributes + '/>\n')
                return True
                # else:
                    # if minCount > 0:
                        # print ERROR_STRING + 'element "' + tagName + '" may not be empty'
            else:
                if 'allowempty' in template and template['allowempty'] == 1:
                    self.currentFileID.write( passed_print + pretty_print_string(level) + '<' + tagName + attributes + '/>\n')
                    return True
                # the element is totally empty which is not allowed.
                if minCount > 0:
                    print ERROR_STRING + 'element "' + tagName + '" may not be empty'
                else:
                    print WARNING_STRING + 'element "' + tagName + '" was not redered since it does not have any children or attributes'
                return False

        return False



    def createXML(self):
        """
        The task method for executing the xmlGenerator and completing the xml files
        This is also the TASK to be run in the background.
        """
        self.numberOfFiles = 1
        for item in self.filesToCreate:
            xmlFileName = item['xmlFileName']
            jsonTemplateName = item['templateFileName']
            json_template_file=open(jsonTemplateName).read()
            try:
                template = json.loads(json_template_file)#, object_pairs_hook=OrderedDict)
            except ValueError as err:
                print err # implement logger
                return  False
            name, rootE = template.items()[0] # root element
            self.currentFileID = open(xmlFileName, "wb+")
            self.currentFob = fileObject(template, self.currentFileID, xmlFileName)
            self.createdFiles.append(self.currentFob)
            self.createXMLElement(template)

        for extensionName, states in self.remainingParts.iteritems():
            extention = None
            for ext in self.extensions:
                if ext.selector == extensionName:
                    extension = ext
                    break
            if extension != None:
                extension.executeExtensionOnce(self, states, self.json_data)


        for fob in self.createdFiles:
            for f in fob.files:
                fid = open(f, os.O_RDONLY)
                while True:
                    data = fid.read(65536)
                    if data:
                        fob.fid.write(data)
                    else:
                        break
                os.close(fid)
                os.remove(f)
        for fob in self.createdFiles:
            fob.fid.close()


    def appendToXML(self, xmlpath):
        """
        Find location xml file of where to add data and append there.
        """

        path = xmlpath.split('/')
        # print path
        if path[0] == '':
            path = path[1:]
        index = 0
        insertLocation = 0
        xmlFileName = self.filesToCreate[0]['xmlFileName']
        jsonTemplateName = self.filesToCreate[0]['templateFileName']
        json_template_file=open(jsonTemplateName).read()
        try:
            template = json.loads(json_template_file)#, object_pairs_hook=OrderedDict)
        except ValueError as err:
            print err # implement logger
            return  False

        with open(xmlFileName, "rb+") as fd:
            # for line in fd:
            line = fd.readline()
            while line:
                # search for path in this.
                # print line
                # print path[index]
                # print fd.tell()
                if index < len(path):
                    if '<' + path[index] + ' ' in line or '<' + path[index] + '>' in line:
                        index += 1
                        # print line

                if '</' + path[index-1] + '>' in line:
                    if index == len(path):
                        # possible insert point is found
                        insertLocation = fd.tell()
                        # print line
                    index -= 1
                line = fd.readline()
            # print insertLocation
            fd.seek(insertLocation)
            restOfFile = fd.read()
            # print restOfFile
            fd.seek(insertLocation)
            fd.truncate()

            # fd.seek(os.SEEK_END)
            # fd.write('inserted part\n')

            self.currentFileID = fd
            self.currentFob = fileObject(template, self.currentFileID, xmlFileName)
            self.createdFiles.append(self.currentFob)
            # print self.currentFileID
            self.createXMLElement(template, level=len(path)-1)


            fd.write(restOfFile)
            fd.close()

        # print insertLocation

        # when the insert location is found, open the file and goto that location. read all the rest of the file into memory and delete it from the file.

        # for line in fileinput.FileInput(self.filesToCreate[0]['xmlFileName'],inplace=1):
        #     if "<premis:premis" in line:
        #         line=line.replace(line,'<premis:premis'+"NEW_TEXT")
        #     # print(line, end='')
        #     print line,
