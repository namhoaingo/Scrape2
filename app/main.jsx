var React = require('react');
var ReactDom = require('react-dom')
console.log('Hello from JSX');

var GroceryItemList = require('./components/GroceryItemList.jsx');
var foodStore = require('./stores/FoodStore.jsx');

var init = foodStore.getItems();

function render(){
	ReactDom.render(<GroceryItemList items={init}/>, app);
}

foodStore.onChange(function(items){

	init = items;
	render();
})


render();