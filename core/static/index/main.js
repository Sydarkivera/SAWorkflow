var App = blocks.Application();

var Packages = App.Collection({
  options: {
    read: {
      url: '/api/package/'
    }
  }
});

var packages = Packages().read({
});

// console.log(packages)

// blocks.query({
//     items: ['Untar', 'Viruscheck', 'clear temporary files'],
//     // alertIndex: function (e) {
//     //   alert('Clicked an item with index:' + blocks.context(e.target).$index);
//     // }
//   });
