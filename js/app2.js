function SampleObservableArray() {
    this.soa = ko.observableArray([{ name: "Bungle", type: "Bear" },
    { name: "George", type: "Hippo" },
    { name: "Zippy", type: "Unknown" }]);
}

let _oA = new SampleObservableArray();

ko.applyBindings(_oA, document.querySelector('#_observable_array'));

_oA.soa.subscribe((noA) => {
    console.log(noA);
});

function addNumber() {
    _oA.soa.push({name: _oA.soa().length + 1 });
}