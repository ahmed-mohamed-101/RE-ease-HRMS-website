const payroll = require("../models/payroll")
const jwt = require("jsonwebtoken");
const db = require('../util/database');

exports.search = async (req, res) => {
  try {
    const month = req.body.month;
    const year = req.body.year;
    const token = req.body.token;

    const secret = "secretfortoken" 
    const verify = jwt.verify(token,secret)
    const {userName, userCompanyName} = verify;

    const result = await db.execute('SELECT * FROM payroll WHERE name like ? AND company_name = ? AND month = ? AND year = ?',
      ['%' + userName + '%', userCompanyName, month, year]);
    const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));
    return res.status(200).json(result1);
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}

exports.showAll = async (req, res) => {
  try {
    const token = req.body.token;
    const secret = "secretfortoken" 
    const verify = jwt.verify(token,secret)
    const {userName, userCompanyName} = verify;

    const result = await db.execute('SELECT * FROM payroll WHERE name = ? AND company_name = ?',
      [userName, userCompanyName]);
    const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));
    return res.status(200).json(result1);  
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}

exports.getPayslip = async (req, res) => {
  try {
    const id = req.params.id

    const result = await db.execute('SELECT * FROM payroll WHERE id = ?',
      [id]);
    const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));

    return res.status(200).json(result1);
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}
