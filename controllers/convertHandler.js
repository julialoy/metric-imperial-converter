/*
*
*
*       Complete the handler logic below
*       
*       
*/
function computeFraction(num1, num2) {
  const result = parseFloat(num1 / num2);
  return result;
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    console.log(`GET NUM INPUT: ${input}`);
    const newRegex = /[a-z].*/i;
    const unitChar = input.match(newRegex);
    const unitStartInd = input.indexOf(unitChar); 
    
    let result = input.slice(0, unitStartInd);
    
    // If no number is provided default to 1
    if (result.length === 0) {
      result = 1;
    }
    console.log(`UNIT CHAR: ${unitChar}`);
    console.log(`GET NUM RESULT: ${result}`);
    
    // Handle Fractions
    if (result.indexOf('/')) {
      const divisionInd = result.indexOf('/');
      const dividend = parseFloat(result.slice(0, divisionInd));
      const divisor = parseFloat(result.slice(divisionInd+1));
      
      if (dividend.indexOf('/') !== -1 || divisor.indexOf('/') !== -1) {
        return 'invalid number';
      }
      
      result = computeFraction(dividend, divisor);
    } else {
      result = parseFloat(result);
    }
    
    // Handle invalid number
    if (isNaN(result)) {
      return 'invalid number';
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    const newRegex = /[a-z].*/i;
    const unitChar = input.match(newRegex);
    const unitStartInd = input.indexOf(unitChar);
    let result = input.slice(unitStartInd);
    console.log(`GET UNIT RESULT: ${result}`);
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
