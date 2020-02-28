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
    .get(function(req, res) {
      const input = req.query.input;
      console.log(input);
      const initNum = convertHandler.getNum(input);
      const initUnit = convertHandler.getUnit(input);
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      //res.json
    });
    
};
