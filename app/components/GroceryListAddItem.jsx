var React = require('react');
var ReactDOM = require('react-dom');
var action = require('./../actions/GroceryListActionCreator.jsx');

module.exports = React.createClass({
    getInitialState() {
        return {
            input:""
        };
    },
    handleInputName: function(e) {
        this.setState({input : e.target.value});
    },
    addItem:function(e) {
        e.preventDefault();
        // console.log("Adding Item!", this.state.input);

        action.add({
            name: this.state.input
        });

        this.setState({
            input: ''
        });
    },
    render: function() {
        return (
            <div className='grocery-addItem'>
                <form onSubmit={this.addItem}>
                    <input value={this.state.input} onChange={this.handleInputName} />
                    <button>Add Item</button>
                </form>
            </div>
        )
    }
})
