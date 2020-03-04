/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function(app) {
  
  const convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function(req, res, done) {
      const input = req.query.input;
      const initNum = convertHandler.getNum(input);
      const initUnit = convertHandler.getUnit(input);

      if (initNum === 'invalid number' && initUnit !== 'invalid unit') {
        return done(res.json({error: 'invalid number', string: `Error - ${input}`}));
      } else if (initNum === 'invalid number' && initUnit === 'invalid unit') {
        return done(res.json({error: 'invalid number and unit', string: `Error - ${input}`}));
      } else if (initNum !== 'invalid number' && initUnit === 'invalid unit') {
        return done(res.json({error: 'invalid unit', string: `Error - ${input}`}));
      }

      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

      res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString});
    });
    
};
