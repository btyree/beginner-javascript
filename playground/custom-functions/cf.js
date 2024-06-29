// function definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
    // this is the function body
    const total = billAmount + (billAmount * taxRate) + (billAmount * tipRate);
    return total;
}

// function call. or **run**
const myTotal = calculateBill(100, 0.13);
console.log(myTotal);


function sayHiTo(firstName) {
    return `Hello ${firstName}`;
}

function yell(name = 'Silly Goose') {
    return `Hey ${name.toUpperCase()}`
}

const myTotal3 = calculateBill()