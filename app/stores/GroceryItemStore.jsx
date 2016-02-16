
var dispatcher = require('./../dispatcher.js');

function GroceryItemStore() {
    var items = [{
        name: "Ice Cream"
    }, {
        name: "Waffles"
    }, {
        name: "Candy",
        purchased: true
    }, {
        name: "Snarks"
    }];

    var listeners = [];

    function getItems() {
        return items;
    }

    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(items);
        });
    }

    function addGroceryItem(item) {
        items.push(item);
        triggerListeners();
    }

    function onChange(listener) {
        listeners.push(listener);
        console.log("onChange");
    }

    dispatcher.register(function (event) {
        var split = event.type.split(':');
        if (split[0] === 'grocery-Item') {
            switch (split[1]) {
                case "add":
                    addGroceryItem(event.payload);
                    break;
            }
        }
    });

    return {
        getItems: getItems,
        onChange: onChange
    };
}

module.exports = new GroceryItemStore();