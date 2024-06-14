const attendance = require("../models/attendance_in")
const jwt = require("jsonwebtoken");

exports.search = async (req, res) => {
  try {
    const secret = "secretfortoken" 
    const token = req.body.token;
    const verify = jwt.verify(token,secret)
    const {adminCompanyName} = verify;

    const email = req.body.email;
    const date = req.body.date;

    const searchDetails = {
      email: email,
      date: date,
      company_name: adminCompanyName
    };

    const result = await attendance.adminSearch(searchDetails)
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
    const {adminCompanyName} = verify;

    const result = await attendance.showAll(adminCompanyName)
    const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));
    return res.status(200).json(result1);
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}

exports.getAttendance = async (req, res) => {
  try {
    const attendanceId = req.params.id
    const result = await attendance.getAttendance(attendanceId);
    const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));
    return res.status(200).json(...result1);
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}

exports.editAttendance = async (req, res) => {
  const attendanceId = req.params.id
  const date = req.body.date
  const clock_in = req.body.clock_in
  const in_status = req.body.in_status;
  const clock_out = req.body.clock_out
  const out_status = req.body.out_status;

  try {
    const attendanceDetails = {
      date: date,
      clock_in: clock_in, 
      in_status: in_status,
      clock_out: clock_out, 
      out_status: out_status
    };
    const result = await attendance.editAttendance(attendanceDetails, attendanceId);
    return res.status(200).json({ message: "attendance edited!" });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}