// piece of code that dose one or more actions

function go() {
	alert('Hi there!');
	alert('Your amazing!');
}

// adding arguments to functions (name, skill)
function nobbble(name, skill) {
	alert(name);
	alert(skill);
}

function pebble(age, time) {
	alert(age);
	alert(time);
}

//return value
function add(first, second) {
	return first+second
}

//return boolean args
function teen(name, age) {
	if (age < 20) {
		return name+"!";
	} else {
		return name;
	}
}

function lifeline(location, age) {
	if (age >= 21) {
		return "You can have a drink because you are"+' '+age;
	} else
		return "G0 Away";
}

function doitbig(task, time) {
	if (task == 'running') {
		alert('Strap up and lets do this');
	} else {
		alert('Boy '+task+' is good for you');
	}
}

// doitbig('swimming', '3pm');

// alert( lifeline("New York", "18"));
// go();
// nobbble('Manuel', 'Designer');
// pebble('33', '3pm');

// var sum = add(2,4);
// alert(sum);
// alert( teen("Manuel", "30") );

// var talue = ['Jake', 'James', 'Junior', 'Tim'];

//removing the first item from the list with ( shift() )
// talue.shift();

//removing the last item form the list with ( pop() )
// talue.pop();

//forEach method
// talue.forEach(function(value, index) {
// 	alert('I have '+talue+' coming to the party!');
// });

//Javascript loops = while / do / for
// var times = 0
// }

// do {
// 	console.log('tried it ' + times);
// 	times++
// } while(times < 100);

// for (var i=0; i < 10; i++) {
//  console.log('i is '+i);
// }

// var talue = ['Jake', 'James', 'Junior', 'Tim'];

// for (var i=0; i < talue.length; i++) {
// 	console.log(talue+i);
// }

// document = displays your html document
// get element by tag name

// document.getElementsByName('p')

//selects the first query that comes up
// document.querySelector('.wrapper')
// document.querySelector('p')

// document.querySelectorAll('.wrapper')

// var numOne = document.getElementById('num-one');
// var numTwo = document.getElementById('num-two');
// var addSum = document.getElementById('add-sum');

// Javascript Events
// click = alerts when someone clicks on the element
// mouseenter = Alerts when user hovers over input
// mouseleave = alerts when hover out of an element
// blur = When you leave the focused it will alert
// focus = When you click on the input and the blue border - alert will show

// Other Events
// mousedown
// mouseup
// mousemove
// keydown
// keyup
// input

// numOne.addEventListener("input", function() {
// 	alert("Hi, there");
// });

// numOne.addEventListener("click", add);
// numTwo.addEventListener("click", add);

// function add() {
// 	var one = parseFloat(numOne.value) || 0;
// 	var two = parseFloat(numTwo.value) || 0;
// 	addSum.innerHTML = one+two;
// }

// // assign the getElement to a variable
// var numOne = document.getElementById('num-one');
// var numTwo = document.getElementById('num-two');
// var addSum = document.getElementById('add-sum');

// // Create an event listener
// numOne.addEventListener("click", add);
// numTwo.addEventListener("click", add);

// function add() {
// 	var one = parseFloat(numOne.value) || 0;
// 	var two = parseFloat(numTwo.value) || 0;
// 	addSum.innerHTML = one+two;
// }

// var simon = document.getElementById('simon');
// // var simonPic = document.getElementById('simon-pic');

// var bruce = document.getElementById('bruce');
// // var brucePic = document.getElementById('bruce-pic')

// var ben = document.getElementById('ben');
// // var benPic = document.getElementById('ben-pic');

// simon.addEventListener("click", function() {
// 	if (simonPic.className === "hide") {
// 		// Taking away the class .hide so that the element will display on
// 		// the screen
// 		simonPic.className = "";
// 	} else {
// 		// This will bring back the class and display the content
// 		simonPic.className = "hide";
// 	}
// });

// simon.addEventListener("click", picLink);
// bruce.addEventListener("click", picLink);
// ben.addEventListener("click", picLink);

// function picLink() {
// 	var allImages = document.querySelectorAll("img");
// 	for (var i = 0; i < allImages.length; i++) {
// 		allImages[i].className = "hide";
// 	}

// 	var picId = this.attributes["data-img"].value;
// 	var pic = document.getElementById(picId)
// 	if (pic.className === "hide") {
// 		// Taking away the class .hide so that the element will display on
// 		// the screen
// 		pic.className = "";
// 	} else {
// 		// This will bring back the class and display the content
// 		pic.className = "hide";
// 	}
// ;}

// console.log(document.getElementsByTagName('h1')[0]);
// var headerChan = document.getElementsByTagName('h1')[0];
// headerChan.innerHTML = "That Calculator";

// getting the element by their ID and assigning it to a variable
var numOne =   document.getElementById('num-one');
var numTwo =   document.getElementById('num-two');
var numThree = document.getElementById('num-three');
var addSum =   document.getElementById('add-sum');

// event listener
numOne.addEventListener("click", add);
numTwo.addEventListener("click", add);
numThree.addEventListener("click", add);

function add() {
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	var three = parseFloat(numThree.value) || 0;
	addSum.innerHTML = one+two+three;
}

// picture
var simon = document.getElementById('simon');
var simonPic = document.getElementById('simon-pic');

simon.addEventListener("click", function() {
	if (simonPic.className === "hide") {
		simonPic.className = "";
	} else {
		simonPic.className = "hide";
		alert('Thanks for hiding me again!');
	}
});

var bruce = document.getElementById('bruce');
var brucePic = document.getElementById('bruce-pic');

bruce.addEventListener("click", function() {
	if (brucePic.className === "hide") {
		brucePic.className = "";
	} else {
		brucePic.className = "hide";
	}
});

var numOne = document.getElementById('num-one');
var numTwo = document.getElementById('num-two');
var minusSum = document.getElementById('minus-sum');

numOne.addEventListener("click", minus);
numTwo.addEventListener("click", minus);
minusSum.addEventListener("click", minus)

function minus() {
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	minusSum.innerHTML = one-two;
}

function myFunction() {
	var y = new Date();
	var d = y.getFullYear();
	document.getElementById("date-year").innerHTML = d;
}

var nO = document.getElementById('number-one');
var numberOne = 0;

while (numberOne < 10) {
	nO.innerHTML = '<FONT SIZE="10PX">This is another one</STYLE> ' + numberOne++;
}











