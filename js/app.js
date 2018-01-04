// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
/*
function AppViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");
}
*/
/*
const _vm = {
    firstName : 'Bert',
    lastName : 'Bertington'
};
*/

const _vm = {
    firstName : ko.observable('Bert'),
    lastName : ko.observable('Bertington')
}

//const _vm = new AppViewModel();

// Activates knockout.js
ko.applyBindings(_vm, document.querySelector('#_observable'));

_vm.firstName.subscribe((newFname) => {
    console.log(`First name changed to: ${newFname}`);
});


setTimeout(() => {
    //_vm.firstName = 'Mohammed';
    //_vm.lastName = 'Irfan';
    _vm.firstName('Mohammed');
    _vm.lastName('Irfan');
}, 3000);