const db = require('../util/database');

module.exports = class leave {
  static save(leaveDetails) {
    return db.execute('INSERT INTO leaves (name, leave_type, start_date, end_date, description, status, company_name) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [leaveDetails.name, leaveDetails.leave_type, leaveDetails.start_date, leaveDetails.end_date, leaveDetails.description, leaveDetails.status, leaveDetails.company_name]);
    }

    static showAll(adminCompanyName) {
      return db.execute('SELECT * FROM leaves WHERE company_name = ?',
      [adminCompanyName]);
    }

    static find(searchDetails, adminCompanyName) {
      return db.execute('SELECT * FROM leaves WHERE name LIKE ? AND leave_type LIKE ? AND status LIKE ? AND company_name = ?',
        ['%' + searchDetails.name + '%', '%' + searchDetails.leave_type + '%','%' + searchDetails.status + '%', adminCompanyName]);
    }

    static changeStatus(status, userId) {
      return db.execute('UPDATE leaves SET status = ? WHERE id = ?',
      [status, userId]);
    }

    static getDescription(userId) {
      return db.execute('SELECT description FROM leaves WHERE id = ?',
      [userId]);
    }

    static deleteLeave(userId) {
      return db.execute('DELETE FROM leaves WHERE id = ?',
      [userId]);
    }

    static userFind(searchDetails, userCompanyName, userName) {
      return db.execute('SELECT * FROM leaves WHERE (leave_type LIKE ? AND status LIKE ?) AND company_name = ? AND name = ?',
        ['%' + searchDetails.leave_type + '%','%' + searchDetails.status + '%', userCompanyName, userName]);
    }

    static userShowAll(userCompanyName, userName) {
      return db.execute('SELECT * FROM leaves WHERE company_name = ? AND name = ?',
      [userCompanyName, userName]);
    }

    
};