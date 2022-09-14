// (function testing() {
//   var obj = {
//     add,
//   };

//   function add(a, b) {
//     var result = a + b;
//     return result;
//   }

//   var stringResult = obj.add('1', '2'); // stringResult becomes "12"
//   var numberResult = obj.add(1, 2).split(''); // numberResult is never set, an error is thrown

//   console.log(stringResult);
//   console.log(numberResult);
// })();

// const obj = {
//   firstName: 'sam',
//   lastName: 'dab',
//   age: '30',
// };

// console.log(obj);

// console.log(...obj);

const firstName = 'Saman';
const lastName = 'Fathnazarian';

// template literals only accept expressions, that's why usually ; is not accepted
// console.log(`Hi ${firstName} ${console.log('console.log()');}`); //woudl give an Error
console.log(`Hi ${firstName} ${console.log('console.log()')}`);
