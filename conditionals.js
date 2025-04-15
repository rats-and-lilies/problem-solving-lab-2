// 1. Grade Checker

    let score = 82;
  
    if (score >= 90) {
     console.log('A');
    } else if (score >= 80 && score < 90) {
    console.log('B');
    } else if (score >= 70 && score < 80) {
      console.log('C');
    } else if (score >= 60 && score < 70) {
      console.log('D');
    } else {
      console.log('F');
    }
    
// Print A, B, C, D, or F based on score

// 2. Pizza Quantity Warning
let quantity = 12;

if (quantity > 10) {
    console.log("warning: quantity too high")
    } 
    else console.log (quantity);

// Print warning if quantity > 10

let password = prompt("Password:"); 
let rightPassword = "letmein";
if (password === rightPassword) {console.log ("Access Granted");}
else console.log ("Access Denied");
// or use prompt
// Print "Access granted" or "Access denied"