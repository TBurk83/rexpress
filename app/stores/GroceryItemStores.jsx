var dispatcher = require('./../dispatcher.jsx');

function GroceryItemStore() {
    var items = [];
    var listeners = [];

    function getItems() {
        return items;
    };

    function addGroceryItem(item) {
        items.push(item);
        triggerListeners();
    }

    function onChange(listener) {
        listeners.push(listener);
    };

    function triggerListeners() {
        changeListeners.forEach(function(listener) {
            listener(groceryItems);
        })
    };

    dispatcher.register(function(event) {
        var split = event.type.split(':');
        if (split[0] === 'grocery-Item') {
            switch(split[1]) {
                case "add":
                    addGroceryItem(event.payload);
                    break;
            }
        }
    })

    return {
        getItems: getItems,
        onChange: onChange
    }
}
