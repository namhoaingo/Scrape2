var React = require('react');
var ReactDom = require('react-dom');
var action = require('./../actions/FoodItemAction.jsx');

module.exports = React.createClass({
	getInitialState:function(){
        return {input:""};
    },
	handleInput: function(e){
		this.setState({input: e.target.value})
		console.log(this.state);
	},

	addItem: function(e){
		e.preventDefault();
		action.add({name: this.state.input});
		this.setState({input:''})
	},

	render: function(){
		return (<div>
			<form onSubmit={this.addItem}>
				<input value={this.state.input} onChange={this.handleInput}/>
				<button> Add Item </button>
			</form>
		</div>)
	}

})