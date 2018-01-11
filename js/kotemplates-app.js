console.log(`Require.js's Define function => `, define);

define([
    'lib/knockout-min',
    'lib/tpl!templates/participants.ko'
], function(ko, participants) {
    ko.components.register('message-editor', {
        viewModel: function(params) {
            this.text = ko.observable(params && params.initialText || '');
        },
        template: participants()
    });
    ko.applyBindings();
    
})