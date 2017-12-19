//
// var App = blocks.Application();
//
// var Process = App.Model({
//     clicked: function(id) {
//         selected_id = this.module_id;
//         console.log('click');
//     },
//
// });
//
// var Module = App.Model({
//     clicked: function(id) {
//         selected_module = this.module_id;
//         console.log(selected_module);
//     },
//
// });
//
// var Modules = App.Collection(Module, {
  // options: {
  //   read: {
  //     url: '/api/module/'
  //   }
  // }
// });
// var Package = App.Collection({
  // options: {
  //   read: {
  //     url: '/api/package/{{id}}/'
  //   }
  // }
// });
//
// var Processes = App.Collection(Process, {
//   options: {
//     read: {
//       url: '/api/package/{{id}}/process/'
//     }
//   }
// });
//
// App.View('Mooo', {
//     selected_module: blocks.observable(0),
//     modules: Modules().read({}),
//     init: function() {
//
//     },
// });
//
// // App.View('Processes', {
// //     processes: Processes().read({
// //         id:package_id,
// //     }),
// // });
//
//
//
// // var modules = Modules().read({
// // });
//
// // var clicked = function(id) {
// //     // selected_id = this.module_id
// //     console.log('click');
// // };
//
// var package = Package().read({
//     id:package_id,
// });
//
// var processes = Processes().read({
//     id:package_id,
// });
//
// blocks.query({
//     selected_module: blocks.observable(0),
// });
//
// // App.View('Processes', function() {
// //
// // })
//
// // blocks.query({
// //   // the event passed to the handler is normalized like a jQuery event
// //   // e.target, e.relatedTarget, e.pageX, e.pageY, e.which, e.metaKey are normalized
// //   clicked: function (e) {
// //     // this points to the model
// //     selected_id=this.module_id;
// //   }
// // });
//
// // console.log(Package().read({
// //     id:package_id,
// // }));
