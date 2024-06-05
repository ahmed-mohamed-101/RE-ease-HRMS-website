const db = require('../util/database');

module.exports = class attendance_out {
  static save(attendanceDetails) {
    return db.execute('UPDATE attendance SET clock_out = ?, out_status = ? WHERE email = ? AND date = ? AND company_name = ?',
    [attendanceDetails.clock_out, attendanceDetails.out_status, attendanceDetails.email, attendanceDetails.date, attendanceDetails.company_name]);
  }

  static async search (searchDetails) {
    try {
      const rows = await db.execute('SELECT * FROM attendance WHERE email = ? AND date = ? AND company_name = ?',[searchDetails.email, searchDetails.date, searchDetails.company_name]);
      if (rows && rows.length > 0) {
          return 1;
      } else {
          return 0;
      }
    } catch (error) {
      console.error('Database query failed:', error);
      throw error;
    }
  }
};