// ----------- Conversor de números a romanos y viceversa.   ----------


function decimalToRoman(number) {
  const decimalArr = [100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanArr = ['C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let result = '';
  for (let i = 0; i < decimalArr.length; i++) {
    while (number >= decimalArr[i]) {
      result += romanArr[i];
      number -= decimalArr[i];
    }
  }
  return result;
}

// ----- romanToDecimal -----

function conversor(number) {
  // const numOrWord = parseInt(number);
  if (number[0] === 'C' && number.length > 1) {
    console.log('Utiliza un número menor o igual a 100.');
  } else if (number > 100 || number <= 0) {
    console.log('Utiliza un número menor o igual 100.');
  } else if (typeof number === 'number') {
    return decimalToRoman(number);
  } else if (typeof number === 'string') {
    return romanToDecimal(number.toUpperCase());
  } else;
}
console.log(conversor(20));