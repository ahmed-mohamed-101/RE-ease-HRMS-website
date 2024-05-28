const attendance_in = require("../models/attendance_in");
const attendance_out = require("../models/attendance_out");
const jwt = require("jsonwebtoken");

exports.clockIn = async (req, res) => {
  try {
    const secret = "secretfortoken";
    const token = req.body.token;
    const verify = jwt.verify(token, secret);
    const { email } = verify;

    // const customDate = new Date();
    // const day = customDate.getDate();
    // const month = customDate.getMonth() + 1;
    // const year = customDate.getFullYear();
    // const hours = customDate.getHours();
    // const minutes = customDate.getMinutes();    
    // const d_m_y = `${day}-${month}-${year}`
    const day = 29
    const month = 5
    const year = 2024
    const hours = 8
    const minutes =  50
    const d_m_y = `${day}-${month}-${year}`

    const workHours_from = 9 

    if ((hours < workHours_from) || (hours == workHours_from && minutes == 0)){
      const clockIn = "on time"
      const attendanceDetails = {
        email: email,
        d_m_y: d_m_y,
        hours: hours,
        minutes: minutes,
        status: clockIn
    };
      const result = await attendance_in.save(attendanceDetails);
      return res.status(200).json({msg:'clock-in successfully'});
    }else {
      const clockIn = "late"
      const attendanceDetails = {
        email: email,
        d_m_y: d_m_y,
        hours: hours,
        minutes: minutes,
        status: clockIn
    };
      const result = await attendance_in.save(attendanceDetails);
      return res.status(200).json({msg:'clock-in successfully'});
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
  }
};

exports.clockOut = async (req, res) => {
  try {
    const secret = "secretfortoken";
    const token = req.body.token;
    const verify = jwt.verify(token, secret);
    const { email } = verify;

    const customDate = new Date();
    const day = customDate.getDate();
    const month = customDate.getMonth() + 1;  
    const year = customDate.getFullYear();
    const hours = customDate.getHours();
    const minutes = customDate.getMinutes();
    const d_m_y = `${day}-${month}-${year}`
    
    const workHours_to = 17 

    if ( hours >= workHours_to){
      const clockOut = 'on time'
      const attendanceDetails = {
        email: email,
        d_m_y: d_m_y,
        hours: hours,
        minutes: minutes,
        status: clockOut
    };
      const result = await attendance_in.save(attendanceDetails);
      return res.status(200).json({msg:'clock-out successfully'});
    }else {
      const clockOut = 'early'
      const attendanceDetails = {
        email: email,
        d_m_y: d_m_y,
        hours: hours,
        minutes: minutes,
        status: clockOut
    };
      const result = await attendance_in.save(attendanceDetails);
      return res.status(200).json({msg:'clock-out successfully'});
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
  }
};
