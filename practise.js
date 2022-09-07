(function testing() {
  var obj = {
    add,
  };

  function add(a, b) {
    var result = a + b;
    return result;
  }

  var stringResult = obj.add('1', '2'); // stringResult becomes "12"
  var numberResult = obj.add(1, 2).split(''); // numberResult is never set, an error is thrown

  console.log(stringResult);
  console.log(numberResult);
})();
