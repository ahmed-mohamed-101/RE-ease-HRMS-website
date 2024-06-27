const jwt = require("jsonwebtoken");
const db = require('../util/database');
const stripe_private_key = "sk_test_51PBNvfJo7stJPpDUQOdEtMbnn9EydhrSOqZRGk78edK3C91LPrpIiPLDuDWyu3gYV83DkbbFCmnVHLnVZzxOQIgO009hSBteNv"
const admin = require('../models/admin')
const stripe = require("stripe")(stripe_private_key);

exports.dashboard = async (req, res) => {
  try {
    const token = req.body.token;
    const secret = "secretfortoken" 
    const verify = jwt.verify(token,secret)
    const {adminCompanyName, email} = verify;
    const now = new Date();
    const yesterday = now.getDate() - 1;
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
    const result1 = await db.execute('SELECT COUNT(*) AS count FROM (SELECT * FROM attendance WHERE date LIKE ? AND in_status = ? AND company_name = ?) AS count1',
      [yesterday+ '-%', 'on time', adminCompanyName]);
    const result2 = result1.flatMap(arr => arr.filter(obj => !obj._buf));

    const totalAttendanceYesterday = result2[0]["count"]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
    const result3 = await db.execute('SELECT COUNT(*) AS count FROM (SELECT * FROM leaves WHERE status = ? AND company_name = ?) AS count1',
      ['approved', adminCompanyName]);
    const result4 = result3.flatMap(arr => arr.filter(obj => !obj._buf));

    const totalLeavesApproved = result4[0]["count"]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
    const result5 = await db.execute('SELECT COUNT(*) AS count FROM (SELECT * FROM leaves WHERE status = ? AND company_name = ?) AS count1',
      ['rejected', adminCompanyName]);
    const result6 = result5.flatMap(arr => arr.filter(obj => !obj._buf));

    const totalLeavesRejected = result6[0]["count"]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
    const result7 = await db.execute('SELECT COUNT(*) AS count FROM (SELECT * FROM leaves WHERE status = ? AND company_name = ?) AS count1',
      ['pending', adminCompanyName]);
    const result8 = result7.flatMap(arr => arr.filter(obj => !obj._buf));

    const totalLeavesPending = result8[0]["count"]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
    const result9 = await db.execute('SELECT COUNT(*) AS count FROM (SELECT * FROM payroll WHERE company_name = ? AND month = ? AND status = ?) AS count1',
      [adminCompanyName,month,'paid']);
    const result10 = result9.flatMap(arr => arr.filter(obj => !obj._buf));

    const donePayrollThisMonth = result10[0]["count"]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
    const result11 = await db.execute('SELECT COUNT(*) AS count FROM (SELECT * FROM payroll WHERE company_name = ? AND year = ? AND status = ?) AS count1',
      [adminCompanyName,year,'paid']);
    const result12 = result11.flatMap(arr => arr.filter(obj => !obj._buf));

    const donePayrollThisYear = result12[0]["count"]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
    const result13 = await db.execute('SELECT COUNT(*) AS count FROM (SELECT * FROM re WHERE company_name = ?) AS count1',
      [adminCompanyName]);
    const result14 = result13.flatMap(arr => arr.filter(obj => !obj._buf));

    const totalRealEstates = result14[0]["count"]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
    const result15 = await db.execute('SELECT COUNT(*) AS count FROM (SELECT * FROM re WHERE status = ? AND company_name = ?) AS count1',
      ['sold out', adminCompanyName]);
    const result16 = result15.flatMap(arr => arr.filter(obj => !obj._buf));

    const totalsoldOutRealEstates = result16[0]["count"]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
    const result17 = await db.execute('SELECT COUNT(*) AS count FROM (SELECT * FROM re WHERE status = ? AND company_name = ?) AS count1',
      ['rented', adminCompanyName]);
    const result18 = result17.flatMap(arr => arr.filter(obj => !obj._buf));

    const totalrentedRealEstates = result18[0]["count"]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
    const result19 = await db.execute('SELECT COUNT(*) AS count FROM (SELECT * FROM users WHERE company_name = ?) AS count1',
      [adminCompanyName]);
    const result20 = result19.flatMap(arr => arr.filter(obj => !obj._buf));

    const totalEmployees = result20[0]["count"]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
    const customer = await stripe.customers.search({query: `email:"${email}"`,});
    console.log(customer)
    const paymentId = customer.data[0].id;
    // console.log(paymentId)
    await admin.updatePaymentId(paymentId, email);
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
    return res.status(200).json({totalAttendanceYesterday: totalAttendanceYesterday, totalLeavesApproved: totalLeavesApproved, totalLeavesRejected: totalLeavesRejected, totalLeavesPending:totalLeavesPending, donePayrollThisMonth: donePayrollThisMonth, donePayrollThisMonth: donePayrollThisMonth, donePayrollThisYear: donePayrollThisYear, totalRealEstates: totalRealEstates, totalsoldOutRealEstates: totalsoldOutRealEstates, totalrentedRealEstates: totalrentedRealEstates, totalEmployees: totalEmployees});
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}