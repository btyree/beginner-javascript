// function doctorize(firstName) {
// return `Dr. ${firstName}`;
// }

// Anon Function
// function (firstName) {
//    return `Dr. ${firstName}`;
// }

// Function Expression
// const doctorize = function (firstName) {
// doesntExist();
// return `Dr. ${firstName}`;
// };

const inchToCM = (inches) => inches * 2.54;
const add = (a, b = 3) => a + b;
const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately Invoked Function Expression

(function () {
  console.log('Running the Anon function');
  return 'You are cool';
}());

// Methods!!!
const wes = {
  name: 'Wed Bos',
  // Method!
  sayHi() {
    console.log('Hey Wes');
    return 'Hey Wes';
  },
  whisperHi: () => {
    console.log('hiii im a mouse');
  },
};

// Callback Functions
// Click callback
const button = document.querySelector('.clickMe');
button.addEventListener('click', wes.sayHi);
