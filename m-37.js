// variables
// if else
// array
// object
// loop
// function

// template string
// arrow function
// spread operator

// map() method
// forEach() method
// filter() method
// find() method

// array and object destructuring

// json
// fetch
// keys
// values
// array add or remove using dots

// truthy and falsy
// ternary operator
// shortcut and or not operator
const isActive = true;

const showUser = () => console.log("user green");
const hideUser = () => console.log("hide user");

isActive ? showUser() : hideUser();
isActive && showUser();

// local storage and session storage
function submit() {
    const id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    name = name.toLowerCase();

    const data = { id, name };
    console.log(data);
}

// dot and bracket notation