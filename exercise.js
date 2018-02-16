// A for-in loop is used to iterate through the properties (key - value pairs) of an object.
// Here is the syntax:

/*for(var in object){
   //your logic
}*/

//Here is example of using a for-in loop to iterate through properties of the following object:
var prepClass = {
	month: "February",
	year:  2018,
	students: 8,
	roster: ["Cyrus", "Tyler", "May", "Yao", "Ben", "Reese", "Jace", "Sean"],
	level: "advance",
	areTheyCool: true
};

for(var prop in prepClass){ //loop through all the properties in the object
	console.log(prop); //prints the keys in the object
	console.log(prepClass[prop]); //prints the values in the object
}


/*1. Create a function that will take in an object and loop through the properties of that object.
Console.log the keys of the object.*/

/*@param {Object}
@return {Object}*/

var donutBox = {
	store: "Safeway",
	location: "Manoa",
	quantity: 12,
	price: 5,
	types: ["old fashion", "glazed", "chocolate", "jelly-filled", "sprinkles", "red velvet"],
	taste: "fabulous"
};

function probOne (obj) {
	for (var prop in obj) {
		console.log(prop);
	}
	return obj;
}

probOne(donutBox);


/*2.  Create a function that will take in an object and loop through the properties of that object.
Console.log the values of the object. Use the donutBox object from the previous exercise above*/

/*@param {Object}
@return {Object}*/


function probTwo (obj) {
	for (var prop in obj) {
		console.log(obj[prop]);
	}
	return obj;
}

probTwo(donutBox);

/*3. Create a function that will take in an object and will delete the taste property from the donutBox object above.*/

/*@param {Object}
@return {Object}*/

function probThree (obj) {
	delete obj.taste;
	return obj;
}

console.log(probThree(donutBox));


/*4. Create a function that will take in an object and will return all the values of the object in an array.*/

/*@param {Object}
@return {Array}*/

function probFour (obj) {
	var result = [];
	for (var prop in obj) {
		result.push(obj[prop]);
	}
	return result;
}

console.log(probFour(donutBox));

/*5. Create a function that will take in an object and will return the number of properties (key -value pairs) in the object. Use the legend object above.

Hint: You'll need to use  hasOwnProperty method 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
*/

/*@param {Object}
@return {Number}*/

function probFive (obj) {
	var count = 0;
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {
		count++;

		}
	}
	return count;
}

console.log(probFive(donutBox));

/*6. Create a function that will take in an object and check to see if the legend object has a property of 'occupation'.*/

/*@param {Object}
@return {Object}*/

function probSix (obj) {
	if (obj.occupation === undefined) {
		console.log("No");
	} else {
		console.log("Yes");

	}
	return obj;
}

console.log(probSix(donutBox));


