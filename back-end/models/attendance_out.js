const db = require('../util/database');

module.exports = class attendance_out {
  static save(attendanceDetails) {
    return db.execute('INSERT INTO attendance_out (email, day_month_year, hours, minutes, status) VALUES (?, ?, ?, ?, ?)',
      [attendanceDetails.email, attendanceDetails.day_month_year, attendanceDetails.hours, attendanceDetails.minutes, attendanceDetails.status]);
    }
};
