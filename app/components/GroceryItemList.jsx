var React = require('react');
var ReactDom = require('react-dom');
var FoodAddItem = require('./FoodAddItem.jsx');

module.exports = React.createClass({

	render: function(){
		return (
				<div>
					<h1>Grocery List</h1>
					<div>
							{
								this.props.items.map(function(item, index){
									return (
										<div>{item.name}</div>
									)
								})
							}
					</div>
					<FoodAddItem />
				</div>
			)
	}
})