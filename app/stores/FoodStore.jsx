var dispatcher = require('./../dispatcher.js')

function FoodStore(){
	    
	    var items = [{name:"Ice Cream"
    },{
        name:"Waffles"
    },{
        name:"Candy"
    }];

    var listeners = [];

    function getItems(){
    	return items;
    }

    function addFood(item){
    	items.push(item)
    	triggerListeners();
    }


    function onChange(listener){
    	listeners.push(listener);
    }

    function triggerListeners(){
    	listeners.forEach(function(listener){
    		listener(items)
    	})
    }

    dispatcher.register(function(event){
    	console.log(event);
    	var split = event.type.split(":");
    	if(split[0] === "food"){
    		switch(split[1]){
    			case "add":    			
    			addFood(event.payload);
    			break;
    		}
    	}

    })

    return {
    	getItems: getItems,
    	onChange: onChange
    }
}

module.exports = new FoodStore();