function ComputedObservablesSample() {
    this._firstName = ko.observable('John');
    this.firstName = ko.computed({
        read: function() {
            return this._firstName();
        },
        write: function(value) {
            this._firstName(value);
        },
        owner: this
    });
    this.lastName = ko.observable('Rambo');

    this.fullName = ko.pureComputed(function() {
        return (this.firstName() + ', ' + this.lastName());
    }, this).extend({ notify: 'always', rateLimit: 50 });
}

var cos = new ComputedObservablesSample();
cos.firstName.subscribe(function(val) {
    console.log('new value: ', val);
});

ko.applyBindings(cos, document.querySelector('#_computed_observables'));


// #2

function FruitsObservables() {
    this.produce = ko.observableArray(['Apples', 'Bananas', 'Oranges', 'Guavas', 'Watermelon', 'Strawberries']);
    this.selectedProduce = ko.observableArray([]);
    this.selectAllProduce = ko.computed({
        owner: this,
        read: function() {
            return (this.selectedProduce().length === this.produce().length);
        },
        write: function(val) {
            this.selectedProduce(val ? this.produce.slice(0) : []);
        }
    });

}

var _fo = new FruitsObservables();
_fo.selectedProduce.subscribe(function(selectedItems) {
    console.log(selectedItems);
});

ko.applyBindings(_fo, document.querySelector('#_computed_observables_2'));

// #3

function UpperCaseObservable() {
    this._text = ko.observable('bruce wayne');
    this.upperCaseText = ko.observable(this._text().toUpperCase());
    this.text = ko.computed({
        owner: this,
        read: function() {
            return this._text();
        },
        write: function(val) {
            this._text(val);
            this.upperCaseText(val.toUpperCase());
        }
    });
}

var _uc = new UpperCaseObservable();


ko.applyBindings(_uc, document.querySelector('#_computed_observables_3'));

