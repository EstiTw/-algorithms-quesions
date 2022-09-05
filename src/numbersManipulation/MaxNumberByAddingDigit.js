//For positive number
const maxNumberByAdding5 = (number, digit) => {
  const splitedNum = Array.from(String(number), Number);
  let firstSmallerDigit = -1;

  for (let i = 0; i < splitedNum.length; i++) {
    if (digit > splitedNum[i]) {
      firstSmallerDigit = i;
      break;
    }
  }

  const digitIndex =
    firstSmallerDigit > -1 ? firstSmallerDigit : splitedNum.length;

  splitedNum.splice(digitIndex, 0, digit);

  const maxNumber = Number(splitedNum.join(""));

  return maxNumber;
};

/////////////////////////////

//For positive & negative number
const maxNumberByAdding5WithNegative = (number, digit) => {
  const splitedNum = Array.from(String(number), String);
  const isNegative = number < 0;
  let firstSmallerDigit = -1;

  for (let i = 0; i < splitedNum.length; i++) {
    //if number is positive & digit > current we have to put the digit strait before current
    if (!isNegative && digit > Number(splitedNum[i])) {
      firstSmallerDigit = i;
      break;
    }

    //if number is negative & digit < current we have to put the digit strait before current
    if (isNegative && digit < Number(splitedNum[i])) {
      firstSmallerDigit = i;
      break;
    }
  }

  //chek if digit index is in the last of the splited number array
  const digitIndex =
    firstSmallerDigit > -1 ? firstSmallerDigit : splitedNum.length;

  //put the digit in the suit index
  splitedNum.splice(digitIndex, 0, digit);

  const maxNumber = Number(splitedNum.join(""));
  return maxNumber;
};

//////////////////////////

// without array -> solution with mod and divide manipulation

const maxNumberByAdding5WithOperators = (number, digit) => {
  const numLength = number.toString().length;
  console.log(numLength * 10);

  // for (let i = 0; i < splitedNum.length; i++) {
  //   if (digit > splitedNum[i]) {
  //     firstSmallerDigit = i;
  //     break;
  //   }
  // }

  // const digitIndex =
  //   firstSmallerDigit > -1 ? firstSmallerDigit : splitedNum.length;

  // splitedNum.splice(digitIndex, 0, digit);

  // const maxNumber = Number(splitedNum.join(""));

  // return maxNumber;
};

console.log(maxNumberByAdding5WithOperators(43, 5));
