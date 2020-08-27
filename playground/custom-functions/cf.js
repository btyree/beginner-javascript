// Function definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  console.log('Running Calculate Bill');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// Function call or run
const myTotal = calculateBill(100, 0.13);
console.log(`Your total is $${myTotal}`);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name) {
  return `HEY ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
