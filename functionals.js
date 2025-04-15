function dogToHumanYears(dogAge) {
  return dogAge * 7
}
let result = dogToHumanYears(5)
console.log ("Dog Years: ", result);






function calculateTip(total, percentage) {
  return total * percentage
}
let total = calculateTip(100, .18)
console.log (total);






function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return true 
    }
    else { return false}
  
}
console.log(checkEvenOdd(8))