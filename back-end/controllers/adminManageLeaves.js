const leave = require("../models/leave");
const jwt = require("jsonwebtoken");


exports.showAll = async (req, res) => {
  try {
    const secret = "secretfortoken" 
    const token = req.body.token;
    const verify = jwt.verify(token,secret)
    const {adminCompanyName} = verify;

    const result = await leave.showAll(adminCompanyName)
    const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));
    return res.status(200).json(result1);
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}

exports.search = async (req, res) => {
  try {
    const secret = "secretfortoken" 

    const token = req.body.token;

    const verify = jwt.verify(token,secret)
    const {adminCompanyName} = verify;

    const name = req.body.name;
    const leaveType = req.body.leaveType;
    const status = req.body.status;

    const searchDetails = {
      name: name,
      leave_type: leaveType,
      status: status,
      company_name: adminCompanyName
    };

    const result = await leave.find(searchDetails, adminCompanyName)
    const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));
    return res.status(200).json(result1);
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}

exports.changeStatus = async (req, res) => {
  try {
    const status = req.body.status
    const userId = req.params.id

    await leave.changeStatus(status, userId);
    return res.status(200).json({msg: 'status changed successfully ..'});
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}

exports.getDescription = async (req, res) => {
  try {
    const userId = req.params.id
    const result = await leave.getDescription(userId);
    const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));
    return res.status(200).json(...result1);
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}

exports.deleteLeave = async (req, res) => {
  try {
    const userId = req.params.id
    await leave.deleteLeave(userId);
    return res.status(200).json({ message: `leave-id (${userId}) is deleted` });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}