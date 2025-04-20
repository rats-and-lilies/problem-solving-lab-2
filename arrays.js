//problem 1
const favoriteFood = ["chicken and mushroom risotto", "quesadillas", "seafood alfredo", "pizza", "Sausage Rice and Gravy"]

console.log(favoriteFood);

let favFood1 = favoriteFood[0];

let favFood5 = favoriteFood[favoriteFood.length - 1];

console.log(favFood1 + " is my favorite food.");

console.log(favFood5 + " is my fifth favorite food.");

favoriteFood.push("Mac and Cheese");

console.log(favoriteFood);




//problem 2
const guests = ["Nolan", "Barry", "Veronica", "Angelo", "Liliana"];

console.log(guests)

let uninvited = guests.shift()
console.log(guests)

guests.push("Mark")
console.log(guests)

let guestList = guests.length;
console.log("the number of invited guests is " + guestList) 



//problem 3
let tasks = ["laundry", "groceries", "coding", "naps"];

for (let i = 0; i < tasks.length; i++) {console.log(`${i + 1}. ${tasks[i]}`);}

//problem 4
let numbers = [1, 2, 3, 4, 5];