define("environment",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={debug:!1,testing:!1}}),define("index",["require","exports","aurelia-fetch-client"],function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){var e=this;this.title="S.A.W",this.description="Välj ett paket att administrera",this.packages=[],(new s.HttpClient).fetch("/api/package/").then(function(e){return e.json()}).then(function(t){e.packages=t})}return e.prototype.gotoPackageConfig=function(e){window.location.href="/package/"+e+"/"},e}();t.Index=i}),define("main",["require","exports","./environment"],function(e,t,s){"use strict";function i(e){e.use.standardConfiguration().feature("resources"),s.default.debug&&e.use.developmentLogging(),s.default.testing&&e.use.plugin("aurelia-testing"),e.start().then(function(t){e.setRoot(t.host.attributes.start.value)})}Object.defineProperty(t,"__esModule",{value:!0}),t.configure=i}),define("packageAdmin",["require","exports","aurelia-fetch-client"],function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){var e=this;this.title="S.A.W",this.description="Välj vilka moduler som ska köras",this.processes=[],this.modules=[],this.package={},this.selected_module=0,this.selected_process=0,this.active_process_values={},this.process_has_changed=!1,this.client=new s.HttpClient,this.client=new s.HttpClient,this.client.fetch("/api/package/"+package_id+"/").then(function(e){return e.json()}).then(function(t){e.package=t,e.processes=t.processes}),this.client.fetch("/api/module/").then(function(e){return e.json()}).then(function(t){e.modules=t})}return e.prototype.clickProcess=function(e){this.selected_process==e.process_id?this.selected_process=0:(this.selected_process=e.process_id,this.active_process_values=e.value)},e.prototype.clickModule=function(e){this.selected_module==e.module_id?this.selected_module=0:this.selected_module=e.module_id},e.prototype.addModule=function(e){var t=this,i={module:e.module_id,package:package_id};this.processes.length>0?i.order=this.processes[this.processes.length-1].order+1:i.order=0,this.client.fetch("/api/process/",{method:"POST",body:s.json(i)}).then(function(e){return e.json()}).then(function(e){t.processes=e})},e.prototype.setProcessValue=function(e,t){this.active_process_values[e]=t,this.process_has_changed=!0},e.prototype.saveProcess=function(e){var t=this;if(this.process_has_changed){var i={value:this.active_process_values};this.client.fetch("/api/process/"+this.selected_process+"/",{method:"PUT",body:s.json(i)}).then(function(e){return e.json()}).then(function(s){t.processes.splice(e,1,s)}),this.process_has_changed=!1,this.selected_process=0}},e.prototype.execute=function(){this.client.fetch("/package/"+package_id+"/execute/",{method:"POST"}),window.location.href="/package/"+package_id+"/status/"},e.prototype.moveUp=function(e){var t=this.processes[e-1],i=this.processes[e],a=t.order;t.order=i.order,i.order=a,this.processes.sort(function(e,t){return e.order-t.order});var o=[{order:i.order,process_id:i.process_id},{order:t.order,process_id:t.process_id}];this.client.fetch("/api/package/"+package_id+"/process/",{method:"PUT",body:s.json(o)})},e.prototype.moveDown=function(e){var t=this.processes[e+1],i=this.processes[e],a=t.order;t.order=i.order,i.order=a,this.processes.sort(function(e,t){return e.order-t.order});var o=[{order:t.order,process_id:t.process_id},{order:i.order,process_id:i.process_id}];this.client.fetch("/api/package/"+package_id+"/process/",{method:"PUT",body:s.json(o)})},e.prototype.removeProcess=function(e){this.client.fetch("/api/process/"+this.processes[e].process_id+"/",{method:"DELETE"}),this.processes.splice(e,1)},e}();t.PackageAdmin=i}),define("status",["require","exports","aurelia-fetch-client"],function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){var e=this;this.title="S.A.W",this.description="Se statusen för paketet: ",this.processes=[],this.package={},this.removeWorkdir=!1,this.client=new s.HttpClient,this.loading=!1,this.updateData(),this.timer=setInterval(function(){e.updateData()},5e3)}return e.prototype.updateData=function(){var e=this;this.loading=!0,this.client.fetch("/api/package/"+package_id+"/").then(function(e){return e.json()}).then(function(t){console.log(t),e.package=t,e.processes=t.processes,e.loading=!1})},e.prototype.removePackage=function(){var e={removeWorkdir:this.removeWorkdir};this.client.fetch("/api/package/"+package_id+"/",{method:"DELETE",body:s.json(e)}).then(function(e){console.log(e.json()),window.location.href="/"})},e.prototype.execute=function(){this.client.fetch("/package/"+package_id+"/execute/",{method:"POST"})},e}();t.Index=i}),define("resources/index",["require","exports"],function(e,t){"use strict";function s(e){}Object.defineProperty(t,"__esModule",{value:!0}),t.configure=s}),define("text!index.html",["module"],function(e){e.exports='<template><div class="container"><h1><a href="/">${title}</a></h1><img class="logga" src="static/img/logga.jpg"><p>${description}</p><div class="card"><div class="card-header"><div class="row"><div class="col">Namn</div><div class="col">Filnamn</div><div class="col-sm-1">Status</div></div></div><div class="list-group list-group-flush"><button style="padding-left:0;padding-right:0" repeat.for="package of packages" class="list-group-item list-group-item-action"><div class="col"><a href="package/${package.package_id}/">${package.name}</a></div><div class="col"> ${package.file_name} </div><div class="col-sm-1"><a href="package/${package.package_id}/status/">${package.status}</a></div></button></div></div></div></template>'}),define("text!packageAdmin.html",["module"],function(e){e.exports='<template><div class="container"><h1><a href="/">${title}</a></h1><img class="logga" src="static/img/logga.jpg"><h2>Paket: ${package.name}</h2><a href="package/${package.package_id}/status" class="float-right">Status</a><p>${description}</p><div class="row"><div class="col-lg-6"><h4>Valda moduler</h4><div class="card"><div class="card-header">Namn</div><div class="list-group list-group-flush"><div repeat.for="process of processes" class="list-group-item list-group-item-action ${process.process_id==selected_process ? \'active\' : \'\'}" if.bind="!process.hidden"><div class="d-flex w-100 justify-content-between"><p style="margin-bottom:0" class="d-flex w-100 noselect" click.delegate="clickProcess(process)">${process.name}</p><small>${process.status}</small></div><template if.bind="process.process_id==selected_process" containterless><form if.bind="process.form.length>0"><label repeat.for="input of process.form" for="${input.identifier}">${input.label} <input type="text" if.bind="input.type==\'text\'" id.bind="input.identifier" value.one-way="active_process_values[input.identifier]" keyup.delegate="setProcessValue(input.identifier, $event.target.value)" change.delegate="setProcessValue(input.identifier, $event.target.value)"> <input type="checkbox" if.bind="input.type==\'checkbox\'" id.bind="input.identifier" checked.one-way="active_process_values[input.identifier]" change.delegate="setProcessValue(input.identifier, $event.target.checked)"></label><button class="btn btn-success" click.delegate="saveProcess($index)" disabled.bind="!process_has_changed">Spara</button></form><button class="btn btn-success" disabled.bind="$index<=0" click.delegate="moveUp($index)">Flytta upp</button> <button class="btn btn-success" disabled.bind="$index>=processes.length-1" click.delegate="moveDown($index)">Flytta ner</button> <button class="btn btn-danger" click.delegate="removeProcess($index)">Ta bort</button></template></div></div></div></div><div class="col-lg-6" data-query="view(Mooo)"><h4>Tillgängliga moduler</h4><div class="card"><div class="card-header">Namn</div><div class="list-group list-group-flush" data-query="each(modules)"><div repeat.for="module of modules" class="list-group-item list-group-item-action ${module.module_id==selected_module ? \'active\' : \'\'}" if.bind="!module.hidden"><p style="margin-bottom:0" class="d-flex w-100 noselect" click.trigger="clickModule(module)">${module.name}</p><div if.bind="module.module_id==selected_module"><button class="btn btn-success" click.delegate="addModule(module)">Lägg till modul</button></div></div></div></div></div></div><button class="btn btn-success float-right" click.delegate="execute()">Starta</button></div></template>'}),define("text!status.html",["module"],function(e){e.exports='<template><div class="container"><h1><a href="/">${title}</a></h1><img class="logga" src="static/img/logga.jpg"><h2>Paket: ${package.name}</h2><a href="package/${package.package_id}/" class="float-right">Ändra</a><p>${description}</p><div class="card"><div class="card-header"><div class="row justify-content-end"><div class="col">Namn</div><div class="col">Statusbar</div><div class="col-sm-2">Status</div><div class="col-sm-2">Log</div><div class="col-sm-2">Fel <a href="#" click.delegate="updateData()" class="tab"><span class="fa fa-refresh fa-2x ${loading ? \'fa-spin\' : \'\'}" aria-hidden="true"></span></a></div></div></div><div class="list-group list-group-flush"><div style="padding-left:0;padding-right:0" repeat.for="process of processes" class="list-group-item list-group-item-action"><div class="col"> ${process.name} ${process.hidden ? \'(Hidden)\' : \'\'} </div><div class="col">Statusbar</div><div class="col-sm-2"> ${process.status} </div><div class="col-sm-2"><a href="/process/${process.process_id}/info_log" class="${process.log_path == \'\' ? \'disabled\' : \'\'}">view log</a></div><div class="col-sm-2"><a href="/process/${process.process_id}/error_log" class="${process.err_path == \'\' ? \'disabled\' : \'\'}">view error log</a></div></div></div></div><button class="btn btn-success float-right" click.delegate="execute()">Starta</button><label>Ta bort paketfiler i workdir: <input type="checkbox" checked.bind="removeWorkdir"></label><button class="btn btn-danger float-right" click.delegate="removePackage()">Klar (Ta bort projekt från databasen)</button></div></template>'});