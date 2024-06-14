const jwt = require("jsonwebtoken");
const leave = require("../models/leave");

exports.applyLeave = async (req, res) => {
  try {
    const secret = "secretfortoken" 
    const token = req.body.token;
    const verify = jwt.verify(token,secret)
    const {userName, userCompanyName} = verify;
    
    const leaveType = req.body.leaveType
    if (leaveType === undefined){
      return res.status(500).json({ msg: 'it is leaveType'});
    }
    const startDate = req.body.startDate
    if (startDate === undefined){
      return res.status(500).json({ msg: 'it is startDate'});
    }
    const endDate = req.body.endDate
    if (endDate === undefined){
      return res.status(500).json({ msg: 'it is endDate'});
    }
    const description = req.body.description
    if (description === undefined){
      return res.status(500).json({ msg: 'it is description'});
    }
    const status = 'pending';
    if (status === undefined){
      return res.status(500).json({ msg: 'it is status'});
    }

    const leaveDetails = {
      name: userName,
      leave_type: leaveType,
      start_date: startDate,
      end_date: endDate,
      description: description,
      status: status,
      company_name: userCompanyName
    };

    await leave.save(leaveDetails);

    return res.status(200).json({ msg: 'leave request is sent'});
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
};

exports.search = async (req, res) => {
  try {
    const secret = "secretfortoken" 
    const token = req.body.token;
    const verify = jwt.verify(token,secret)
    const {userCompanyName, userName} = verify;

    const leaveType = req.body.leaveType;
    const status = req.body.status;

    const searchDetails = {
      leave_type: leaveType,
      status: status
    };

    const result = await leave.userFind(searchDetails, userCompanyName, userName)
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
  const {userCompanyName, userName} = verify;

  const result = await leave.userShowAll(userCompanyName, userName)
  const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));
  return res.status(200).json(result1);
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
