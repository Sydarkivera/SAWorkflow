from xmlGenerator import *
from xmlExtensions import inlineUUIDModule, inlineDatetimeModule
import json
import filecmp

print 'Running tests: '

data = ''
files = ''

def runTest(testname, index):

    # test minimal xml
    with open('./test_files/data'+index+'.json') as f:
        data = f.read()

    data = json.loads(data)

    files = [
        {
            "xmlFileName":"./test_results/test"+index+".xml",
            "templateFileName":"test_files/template"+index+".json"
        }
    ]
    c = xmlGenerator(data, files)
    # add all extensions so that they are loaded if needed
    # c.addExtension(xmlFilesExtenstionModule())
    # c.addExtension(inlineExtenstionModule())
    c.createXML()

    # validate the result
    with open('./test_files/result'+index+'.xml') as f:
        expected = f.read()

    with open('./test_results/test'+index+'.xml') as f:
        if expected == f.read():
            print 'Test: ' + testname + ' SUCCESS'
        else:
            print 'Test: ' + testname + ' FAILED'
            # break



# runTest('Basic test', '1')
# runTest('Single element with single child', '2')
# runTest('Multiple children', '3')
# runTest('Namespace inheritance of children', '4')
# runTest('Namespace inheritance overwriting in children', '5')
# runTest('Full SIP generation', '6')


# premis test:

data = {
    "package_uuid": "long-uuid-sdf-asdf",
    "package_file": "uuid.tar",
    "events": [{
        "outcome": "0",
        "label": "Vera pdf",
        "detail": "Vera pdf validation with arguments....",
        "user": "Simon Nilsson"
    }]
}

files = [
    {
        "xmlFileName":"./test_results/premis.xml",
        "templateFileName":"premis.json"
    }
]
c = xmlGenerator(data, files)
# add all extensions so that they are loaded if needed
# c.addExtension(xmlFilesExtenstionModule())
c.addExtension(inlineUUIDModule())
c.addExtension(inlineDatetimeModule())
c.createXML()

data = {
    "package_uuid": "other uuid",
    "package_file": "other.tar",
    "outcome": "2",
    "label": "clam pdf",
    "detail": "clam pdf validation with arguments....",
    "user": "DA Nilsson"
}

files = [
    {
        "xmlFileName":"./test_results/premis.xml",
        "templateFileName":"premisEvent.json"
    }
]

c.filesToCreate = files
c.json_data = data

c.appendToXML('/premis:premis/premis:event')

# Example of inputData:

# inputData = {
    # "data": {
    #     "var1": "Demo var",
    #     "var2": "Demo var2",
    #     "xmlns": {
    #         "mets":"http://www.loc.gov/METS/",
    #         "xlink":"http://www.w3.org/1999/xlink",
    #         "xsi":"http://www.w3.org/2001/XMLSchema-instance",
    #         "schemaLocation":"http://www.loc.gov/METS/ http://xml.essarch.org/METS/info.xsd"
    #     },
    #     "mets":{
    #         "ID":"55f04f06-21d6-4c15-ba5b-92fad56c8ba2",
    #         "objid":"55f04f06-21d6-4c15-ba5b-92fad56c8ba2",
    #         "label":"mets_label",
    #         "type":"mets_type",
    #         "profile":"mets_profile"
    #     },
    #     "agents":[
    #         {
    #             "role":"IPOWNER",
    #             "type":"ORGANIZATION",
    #             "name":"the ip owner",
    #             "note":"the ip owner note"
    #         }
    #     ],
    #     "archivist_organization_name":"Sydarkivera",
    #     # "archivist_organization_note":"Sydarkivera note",
    #     "array": [{
    #             "name": "Hello"
    #         }, {
    #             "name": "world"
    #         }],
    #     "array2": [{
    #             "name": "Hello2"
    #         }, {
    #             "name": "world2"
    #         }]
    # },
#     "filesToCreate": [
#         {
            # "xmlFileName":"sip.txt",
            # "templateFileName":"templates/test1.json"
#         }
#         ,{
#             "xmlFileName":"sip2.txt",
#             "templateFileName":"templates/test2.json"
#         }
#     ],
#     "folderToParse":"/SIP/"
# }
#
# # createXML(inputData)
# c = xmlGenerator(inputData)
# c.addExtension(xmlFilesExtenstionModule())
# c.addExtension(inlineExtenstionModule())
# c.createXML()
