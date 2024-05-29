const db = require('../util/database');

module.exports = class attendance_in {
  static save(attendanceDetails) {
    return db.execute('INSERT INTO attendance_in (email, time, status) VALUES (?, ?, ?)',
      [attendanceDetails.email, attendanceDetails.time, attendanceDetails.status]);
    }
};

