const RE = require("../models/RE");
const jwt = require("jsonwebtoken");
const db = require('../util/database');


exports.search = async (req, res) => {
  try {
    const secret = "secretfortoken" 
    const token = req.body.token;
    const verify = jwt.verify(token,secret)
    const {userCompanyName , userName} = verify;

    const searchTerm = req.body.search;
    const result = await RE.searchAssigned(searchTerm, userName, userCompanyName)
    const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));
    return res.status(200).json(result1);
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}

exports.showAll = async (req, res) => {
  try {
    const secret = "secretfortoken" 
    const token = req.body.token;
    const verify = jwt.verify(token,secret)
    const {userCompanyName , userName} = verify;

    const result = await RE.showAllAssigned(userCompanyName , userName)
    const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));
    return res.status(200).json(result1);
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}

exports.changeStatus = async (req, res) => {
  try {
    const REId = req.params.id
    const token = req.body.token;
    const secret = "secretfortoken" 
    const verify = jwt.verify(token,secret)
    const {userCompanyName , userName} = verify;

    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1; 
    const year = now.getFullYear();
    const date = `${day}-${month}-${year}`;

    const result = await RE.getRE(REId)
    const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));
    const status = result1[0]['status']

    if (status == "for sale"){
      await db.execute('UPDATE re SET status = ?, done_date = ? WHERE id = ?',
        ["sold out", date, REId]);
      return res.status(200).json({msg: "status succssfuly updated for sold out"});
    }else if (status == "for rent"){
      await db.execute('UPDATE re SET status = ?, done_date = ? WHERE id = ?',
        ["rented",date, REId]);
      return res.status(200).json({msg: "status succssfuly updated for rented"});
    }
    return res.status(200).json("didnt change the status ");
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}

exports.viewDocument = async (req, res) => {
  try {
    const REId = req.params.id

    const result = await RE.showDocument(REId)
    const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));
    return res.status(200).json(...result1);
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}