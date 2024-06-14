const attendance_in = require("../models/attendance_in");
const attendance_out = require("../models/attendance_out");
const jwt = require("jsonwebtoken");

exports.clockIn = async (req, res) => {
  try {
    const secret = "secretfortoken";
    const token = req.body.token;
    const verify = jwt.verify(token, secret);
    const { email, userCompanyName } = verify;

    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1; // getMonth() returns 0-11
    const year = now.getFullYear();
    // const hours = now.getHours();
    const hours = 8;
    // const minutes = now.getMinutes();
    const minutes = 0;
    const date = `${day}-${month}-${year}`;
    const time = `${hours}:${minutes}`;
    const workHours_from = 9;
    let clockInStatus;

    const searchDetails = {
      email: email,
      date: date,
      company_name : userCompanyName
    }
    const searchResults = await attendance_in.search(searchDetails);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (searchResults == 1) {
      return res.status(200).json({ msg: 'you already clocked_in'});
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }else if(hours < 8 ){
      return res.status(200).json({ msg: 'clock in starts at 8:00 .. so try again please at that time or you will be absent'});
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }else if ((hours == 8) || (hours == 9 && minutes <= 15)) {
      clockInStatus = "on time";
      const attendanceDetails = {
        email: email,
        date: date,
        clock_in: time,
        in_status: clockInStatus,
        company_name : userCompanyName
      };
      await attendance_in.save(attendanceDetails); 
      return res.status(200).json({ msg: 'Clock-in successfully', status: clockInStatus});
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else if ((hours == 9 && minutes > 15) || (hours == 10 && minutes == 0)) {
      clockInStatus = "late";
      const attendanceDetails = {
        email: email,
        date: date,
        clock_in: time,
        in_status: clockInStatus,
        company_name : userCompanyName
      };
      await attendance_out.save(attendanceDetails); 
      return res.status(200).json({ msg: 'Clock-in successfully', status: clockInStatus});
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else {
      clockInStatus = "absent";
      return res.status(200).json({ msg: 'Clock-in successfully', status: clockInStatus});
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
};

exports.clockOut = async (req, res) => {
  try {
    const secret = "secretfortoken";
    const token = req.body.token;
    const verify = jwt.verify(token, secret);
    const { email,userCompanyName } = verify;

    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1; // getMonth() returns 0-11
    const year = now.getFullYear();
    // const hours = now.getHours();
    const hours = 17;
    // const minutes = now.getMinutes();
    const minutes = 0;
    const date = `${day}-${month}-${year}`;
    const time = `${hours}:${minutes}`;
    const workHours_to = 17 
    let clockOutStatus;
    const searchDetails = {
      email: email,
      date: date,
      company_name : userCompanyName
    }
    const searchResults = await attendance_out.search(searchDetails);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (searchResults == 0) {
      return res.status(200).json({ msg: 'you did not clock_in .. you are absent today'});
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }else if ((hours == 16 && minutes <= 54)) {
      clockOutStatus = "early";
      const attendanceDetails = {
        email: email,
        date: date,
        clock_out: time,
        out_status: clockOutStatus,
        company_name : userCompanyName
      };
      await attendance_out.save(attendanceDetails); 
      return res.status(200).json({ msg: 'Clock-out successfully', Status: clockOutStatus});
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }else if ((hours == 16 && minutes >= 55) || (hours == 17) || (hours == 18 && minutes == 0)){
      clockOutStatus = "on time";
      const attendanceDetails = {
        email: email,
        date: date,
        clock_out: time,
        out_status: clockOutStatus,
        company_name : userCompanyName
      };
      await attendance_out.save(attendanceDetails); 
      return res.status(200).json({ msg: 'Clock-out successfully', Status: clockOutStatus});
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }else if ((hours == 18 && minutes > 0) || ( hours <= 20 && hours > 18)) {
      clockOutStatus = "extra";
      const attendanceDetails = {
        email: email,
        date: date,
        clock_out: time,
        out_status: clockOutStatus,
        company_name : userCompanyName
      };
      await attendance_out.save(attendanceDetails); 
      return res.status(200).json({ msg: 'Clock-out successfully', Status: clockOutStatus});
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }else if (hours > 20) {
      clockOutStatus = "extra"
      const attendanceDetails = {
        email: email,
        date: date,
        clock_out: 20,
        out_status: clockOutStatus,
        company_name : userCompanyName
      };
      await attendance_out.save(attendanceDetails); 
      return res.status(200).json({ msg: 'clock out is closing at 20:00 .. but it is successfull clock_out', Status: clockOutStatus});
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } 
  }catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
};
