function sayHello() {
 let greetingElement = document.getElementById ("message");
 greetingElement.textContent = "Hello there!";
}

function showName() {
  let greetingElement = document.getElementById("output");
  let inputElement = document.getElementById("nameInput");

  console.log(greetingElement, inputElement)

greetingElement.innerHTML = inputElement.value
}
