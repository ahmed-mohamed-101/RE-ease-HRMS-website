const jwt = require("jsonwebtoken");
const db = require('../util/database');

exports.generate = async (req, res) => {
    let month = req.body.month;
    let year = req.body.year;
    let name = req.body.name;

    const secret = "secretfortoken" 
    const token = req.body.token;
    const verify = jwt.verify(token,secret)
    const {adminCompanyName} = verify;
    let companyName = `${adminCompanyName}`

/////////////////////////////////////////////////////////////////////////////
    const result = await db.execute('SELECT * FROM users WHERE name = ? AND company_name = ?',
      [name, adminCompanyName]);
    const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));
    console.log(result1)
    if(result1.length == 0){
      return res.status(500).json({ msg: "employee name dosent exist"});
    }

    let position =  result1[0].position;
    let basic = result1[0].salary;
    let email = result1[0].email;

/////////////////////////////////////////////////////////////////////////////

    const result2 = await db.execute('SELECT COUNT(*) AS count FROM (SELECT * FROM attendance WHERE email = ? AND date LIKE ? AND in_status = ? AND company_name = ?) AS count1',
      [email, '%-'+month+ '-%', 'absent', adminCompanyName]);
    const result3 = result2.flatMap(arr => arr.filter(obj => !obj._buf));

    let onTimeAttendance = result3[0].count 
    let absentAttendance = 20 - onTimeAttendance 
    console.log(absentAttendance)

/////////////////////////////////////////////////////////////////////////////

    const result4 = await db.execute('SELECT COUNT(*) AS count FROM (SELECT * FROM attendance WHERE email = ? AND date LIKE ? AND out_status = ? AND company_name = ?) AS count1',
      [email, '%-'+month+ '-%', 'extra', adminCompanyName]);
    const result5 = result4.flatMap(arr => arr.filter(obj => !obj._buf));

    let extraAttendance = result5[0].count;
    console.log(extraAttendance)


/////////////////////////////////////////////////////////////////////////////

    const result6 = await db.execute('SELECT COUNT(*) AS count FROM (SELECT * FROM re WHERE status IN (?, ?) AND done_date LIKE ? AND assigned_to = ? AND company_name = ?) AS count1',
      ['sold out', 'rented', '%-'+month+ '-%', name,  adminCompanyName]);
    const result7 = result6.flatMap(arr => arr.filter(obj => !obj._buf));

    let doneRE = result7[0].count;
    console.log(doneRE)


/////////////////////////////////////////////////////////////////////////////

    const absentAttendance1 = absentAttendance * (basic / 20)
    const extraAttendance1 = extraAttendance * (basic / 160)
    const doneRE1 = doneRE * 500
    const allowance1 = req.body.allowance
    const allowance = 1 * allowance1

    const deduction1 = req.body.deduction
    const deduction = 1 * deduction1
    const total = (basic + extraAttendance1 + doneRE1 + allowance) - absentAttendance1 - deduction
    
    const validateParameters = (params) => {
      let counter= 0
      for (const param of params) {
        if (param === undefined) {
          return res.status(500).json({ msg: `Bind parameters must not contain undefined ${counter}`});
        }
        counter++
      }
  };
  
  const params = [
      name,
      position,
      companyName,
      basic,
      absentAttendance1,
      extraAttendance1,
      doneRE1,
      allowance,
      deduction,
      total,
      month,
      year,
      'not paid'
  ];
  
  try {
      // Validate parameters
      validateParameters(params);
      // Assuming `db` is your database connection object
      await db.execute(
          'INSERT INTO payroll (name, position, company_name, basic, absent_attendance, extra_attendance, done_RE, allowance, deduction, total, month, year, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
          params
      );
    return res.status(200).json({ msg: "doneeeee"});
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}


exports.search = async (req, res) => {

  try {
    const name = req.body.name;
    const month = req.body.month;
    const year = req.body.year;
    const status = req.body.status;
    const token = req.body.token;

    const secret = "secretfortoken" 
    const verify = jwt.verify(token,secret)
    const {adminCompanyName} = verify;

    const result = await db.execute('SELECT * FROM payroll WHERE name LIKE ? AND company_name like ? AND month like ? AND year like ? AND status like ?',
      ['%' + name + '%','%' + adminCompanyName+ '%','%' + month+ '%','%' + year+ '%',status+ '%']);
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

    const result = await db.execute('SELECT * FROM payroll WHERE company_name = ?',
      [adminCompanyName]);
    const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));
    return res.status(200).json(result1);  
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}

exports.pay = async (req, res) => {
  try {
    const id = req.params.id

    await db.execute('UPDATE payroll SET status = ? WHERE id = ?',
      ["paid", id]);

    return res.status(200).json({msg: "status succssfuly updated for paid"});
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}

exports.delete = async (req, res) => {
  try {
    const id = req.params.id

    await db.execute('DELETE FROM payroll WHERE id = ?',
      [id]);

    return res.status(200).json({msg: "succssfuly deleted"});
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}

// exports.generatePyaroll = async (req, res) => {
  //   try {
  
  //     // await db.execute('INSERT INTO payroll (name, position, company_name, basic, absent_attendance, extra_attendance, done_RE, allowance, deduction, total, month, year, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
  //     // [name, position, companyName, basic, absentAttendance1, extraAttendance1, doneRE1, allowance, deduction, total, month, year, 'not paid']);
  //     return res.status(200).json({msg: 'payroll added successfully ..'});
  //   } catch (err) {
  //     console.error(err); // Log the error for debugging purposes
  //     return res.status(500).json({ msg: 'Internal server error', error: err.message });
  //   }
  // }