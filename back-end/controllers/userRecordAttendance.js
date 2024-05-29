const attendance_in = require("../models/attendance_in");
const attendance_out = require("../models/attendance_out");
const jwt = require("jsonwebtoken");

exports.clockIn = async (req, res) => {
  try {
    const secret = "secretfortoken";
    const token = req.body.token;
    const verify = jwt.verify(token, secret);
    const { email } = verify;

    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1; // getMonth() returns 0-11
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const time = `${day}-${month}-${year} ${hours}:${minutes}`;
    const workHours_from = 9;

    if(hours < 8 || hours > 9){
      return res.status(500).json({ msg: 'clock in time is from 8:00 am to 9:00 am .. u need to clock in again at that time range or you will be absent'});
    }

    let clockInStatus;
    if ((hours === 8) || (hours === workHours_from && minutes === 0)) {
      clockInStatus = "on time";
    } else {
      clockInStatus = "absent";
    }

    const attendanceDetails = {
      email: email,
      time: time,
      status: clockInStatus
    };

    await attendance_in.save(attendanceDetails); // Save the attendance details
    return res.status(200).json({ msg: 'Clock-in successfully', status: clockInStatus });

  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
};

exports.clockOut = async (req, res) => {
  try {
    const secret = "secretfortoken";
    const token = req.body.token;
    const verify = jwt.verify(token, secret);
    const { email } = verify;

    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1; // getMonth() returns 0-11
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const time = `${day}-${month}-${year} ${hours}:${minutes}`;

    const workHours_to = 17 

    if(hours < 17 || hours > 17){
      return res.status(500).json({ msg: 'clock out time is from 17:00 pm to 18:00 pm .. u need to clock out again at that time range or you will be absent'});
    }

    let clockOutStatus;
    if (hours >= workHours_to) {
      clockOutStatus = "on time";
    } else {
      clockOutStatus = "absent";
    }

    const attendanceDetails = {
      email: email,
      time: time,
      status: clockOutStatus
    };

    await attendance_out.save(attendanceDetails); // Save the attendance details
    return res.status(200).json({ msg: 'Clock-out successfully', status: clockOutStatus });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
};
