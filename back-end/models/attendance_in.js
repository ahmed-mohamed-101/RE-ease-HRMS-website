const db = require('../util/database');

module.exports = class attendance_in {
  static save(attendanceDetails) {
    return db.execute('INSERT INTO attendance (email, date, clock_in, in_status, company_name) VALUES (?, ?, ?, ?, ?)',
      [attendanceDetails.email, attendanceDetails.date, attendanceDetails.clock_in, attendanceDetails.in_status, attendanceDetails.company_name]);
    }

  static async search (searchDetails) {
    try {
      const [rows] = await db.execute('SELECT * FROM attendance WHERE email = ? AND date = ? AND company_name = ?',[searchDetails.email, searchDetails.date, searchDetails.company_name]);
      if (rows && rows.length > 0) {
          return 1;
      } else {
          return 0;
      }
    } catch (error) {
        console.error('Database query failed:', error);
        throw error;}
  }

  static adminSearch(searchDetails) {
    return db.execute('SELECT * FROM attendance WHERE (email = ? or date = ?) AND company_name = ?',
      [searchDetails.email, searchDetails.date, searchDetails.company_name]);
    }

  static showAll(adminCompanyName) {
    return db.execute('SELECT * FROM attendance WHERE company_name = ?',
      [adminCompanyName]);
    }

  static getAttendance(attendanceId) {
    return db.execute('SELECT * FROM attendance WHERE id = ?',
    [attendanceId]);
  }
    
  static editAttendance(attendanceDetails, attendanceId) {
    return db.execute('UPDATE attendance SET date = ?, clock_in = ?, in_status = ?, clock_out = ?, out_status = ? WHERE id = ?',
    [attendanceDetails.date, attendanceDetails.clock_in, attendanceDetails.in_status, attendanceDetails.clock_out, attendanceDetails.out_status, attendanceId]);
  }

};


