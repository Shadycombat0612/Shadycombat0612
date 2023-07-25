function isArmstrongNumber(number)
 {
    const numString = number.toString();
    const numDigits = numString.length;
    let sum = 0;
  
    for (let digit of numString) {
      sum += Math.pow(parseInt(digit), numDigits);
    }
  
    return sum === number;
  }

  console.log(isArmstrongNumber(153))
  console.log(isArmstrongNumber(50))
  console.log(isArmstrongNumber(256))
  console.log(isArmstrongNumber(370))


