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
    const newRegex = /[a-z].*/i;
    const decimRegex = /\./g;
    const unitChar = input.match(newRegex);
    const unitStartInd = input.indexOf(unitChar); 
    let result = input.slice(0, unitStartInd);

    // Handle invalid decimals
    if (result.match(decimRegex)) {
      if (result.match(decimRegex).length > 1)
      return 'invalid number';
    }

    // If no number is provided default to 1
    if (result.length === 0) {
      result = null;
      return result;
    }
    
    // Handle Fractions
    if (result.indexOf('/') !== -1) {
      const divisionRegexp = /\//g;
      const doubFractQuery = result.match(divisionRegexp);
      
      // Handle double fractions
      if (doubFractQuery.length > 1) {
        return 'invalid number';
      }

      const divisionInd = result.indexOf('/');
      const dividend = parseFloat(result.slice(0, divisionInd));
      const divisor = parseFloat(result.slice(divisionInd+1));
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
    const unitsAllowed = ['gal','l','mi','km','lbs','kg'];
    const newRegex = /[a-z].*/i;
    const unitChar = input.match(newRegex);
    const unitStartInd = input.indexOf(unitChar);
    let result = input.slice(unitStartInd);
    
    // Handle invalid units
    if (!unitsAllowed.includes(result.toLowerCase())) {
      return 'invalid unit';
    }
;
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    const unitObject = {
      'gal': 'l',
      'l': 'gal',
      'mi': 'km',
      'km': 'mi',
      'lbs': 'kg',
      'kg': 'lbs'
    };
    let result = unitObject[initUnit.toLowerCase()];
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    const unitObject = {
      'gal': 'gallons',
      'l': 'liters',
      'mi': 'miles',
      'km': 'kilometers',
      'lbs': 'pounds',
      'kg': 'kilograms'
    };
    let result = unitObject[unit.toLowerCase()];

    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    let initFloat;

    if (initNum === null) {
      initFloat = parseFloat(1);
    } else {
      initFloat = parseFloat(initNum);
    }

    if (initNum === 'invalid number') {
      result = 'invalid number';
    }

    if (initUnit === 'invalid unit') {
      result = 'invalid unit';
    }

    if (initUnit.toLowerCase() === 'gal') {
      result = initFloat * galToL;
    } else if (initUnit.toLowerCase() === 'l') {
      result = initFloat / galToL;
    } else if (initUnit.toLowerCase() === 'lbs') {
      result = initFloat * lbsToKg;
    } else if (initUnit.toLowerCase() === 'kg') {
      result = initFloat / lbsToKg;
    } else if (initUnit.toLowerCase() === 'mi') {
      result = initFloat * miToKm;
    } else if (initUnit.toLowerCase() === 'km') {
      result = initFloat / miToKm;
    }

    //result = parseFloat(result.toFixed(5));
    result = parseFloat(result);

    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let spellInitUnit = this.spellOutUnit(initUnit);
    let spellReturnUnit = this.spellOutUnit(returnUnit);
    let result = `${initNum} ${spellInitUnit} converts to ${returnNum.toFixed(5)} ${spellReturnUnit}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
