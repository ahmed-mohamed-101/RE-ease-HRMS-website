const jwt = require("jsonwebtoken");
const db = require('../util/database');


exports.dashboard = async (req, res) => {
  try {
    const token = req.body.token;
    const secret = "secretfortoken" 
    const verify = jwt.verify(token,secret)
    const {userCompanyName, email, userName} = verify;
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
    const result1 = await db.execute('SELECT COUNT(*) AS count FROM (SELECT * FROM attendance WHERE email = ? AND date LIKE ? AND in_status = ? AND company_name = ?) AS count1',
      [email, '%-' + month+ '-%', 'on time', userCompanyName]);
    const result2 = result1.flatMap(arr => arr.filter(obj => !obj._buf));

    const totalAttendanceThisMonth = result2[0]["count"]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
    const result3 = await db.execute('SELECT COUNT(*) AS count FROM (SELECT * FROM leaves WHERE name = ? AND company_name = ?) AS count1',
      [userName, userCompanyName]);
    const result4 = result3.flatMap(arr => arr.filter(obj => !obj._buf));

    const totalLeaves = result4[0]["count"]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
    const result5 = await db.execute('SELECT COUNT(*) AS count FROM (SELECT * FROM leaves WHERE name = ? AND status = ? AND company_name = ?) AS count1',
      [userName, 'pending', userCompanyName]);
    const result6 = result5.flatMap(arr => arr.filter(obj => !obj._buf));

    const totalLeavesPending = result6[0]["count"]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
    const result7 = await db.execute('SELECT COUNT(*) AS count FROM (SELECT * FROM re WHERE assigned_to = ? AND company_name = ?) AS count1',
      [userName, userCompanyName]);
    const result8 = result7.flatMap(arr => arr.filter(obj => !obj._buf));

    const totalAssignedRealEstates = result8[0]["count"]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
    const result9 = await db.execute('SELECT COUNT(*) AS count FROM (SELECT * FROM re WHERE status IN (?, ?) AND assigned_to = ? AND company_name = ?) AS count1',
      ['sold out' , 'rented', userName, userCompanyName]);
    const result10 = result9.flatMap(arr => arr.filter(obj => !obj._buf));
    const totalDoneRealEstates = result10[0]["count"]


    return res.status(200).json({totalAttendanceThisMonth: totalAttendanceThisMonth, totalLeaves: totalLeaves, totalLeavesPending: totalLeavesPending, totalAssignedRealEstates: totalAssignedRealEstates, totalDoneRealEstates: totalDoneRealEstates});
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}