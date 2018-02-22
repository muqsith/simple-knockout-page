define([
    'lib/knockout-min',
    'lib/jquery-3.3.1'
], function(ko, jquery) {
    var viewModel = {
        giftWrap: ko.observable(true)
    };
    ko.bindingHandlers.slideVisible = {
        init: function(element, valueAccessor) {
            // Get the current value of the current property we're bound to
            var value = ko.unwrap(valueAccessor());
            // jQuery will hide/show the element depending on whether "value" or true or false
            $(element).toggle(value);
        },
        update: function(element, valueAccessor, allBindings) {
            // First get the latest data that we're bound to
            var value = valueAccessor();

            // Next, whether or not the supplied model property is observable, get its current value
            var valueUnwrapped = ko.unwrap(value);

            // Grab some more data from another binding property
            var duration = allBindings.get('slideDuration') || 400; // 400ms is default duration unless otherwise specified

            // Now manipulate the DOM element
            if (valueUnwrapped == true)
                $(element).slideDown(duration); // Make the element visible
            else
                $(element).slideUp(duration);   // Make the element invisible
        }
    };

    ko.applyBindings(viewModel);
})
