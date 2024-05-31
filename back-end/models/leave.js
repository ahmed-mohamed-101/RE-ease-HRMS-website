const db = require('../util/database');

module.exports = class leave {
  static save(leaveDetails) {
    return db.execute('INSERT INTO leaves (name, leave_type, start_date, end_date, description, status) VALUES (?, ?, ?, ?, ?, ?)',
      [leaveDetails.name, leaveDetails.leave_type, leaveDetails.start_date, leaveDetails.end_date, leaveDetails.description, leaveDetails.status]);
    }
};