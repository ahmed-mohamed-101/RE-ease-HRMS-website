const db = require('../util/database');

module.exports = class user {
  // static findLogin(email) {
  //   return db.execute('SELECT * FROM users WHERE email = ?',
  //   [email]);
  // }
  
    static findLogin(email) {
      if (email === undefined) {
        throw new Error('Email parameter is undefined');
        // Or alternatively, you could set email to null
        // email = null;
      }
      return db.execute('SELECT * FROM users WHERE email = ?', [email]);
    }

  static findN(name) {
    return db.execute('SELECT * FROM users WHERE name = ?',
    [name]);
  }

  static showAll(adminCompanyName) {
    return db.execute('SELECT * FROM users WHERE company_name = ?',
    [adminCompanyName]);
  }

  static find(searchTerm, adminCompanyName) {
    return db.execute('SELECT * FROM users WHERE (name LIKE ? OR position LIKE ? OR email LIKE ? OR salary LIKE ?) AND (company_name = ?)', ['%' + searchTerm + '%', '%' + searchTerm + '%','%' + searchTerm + '%', '%' + searchTerm + '%', adminCompanyName]);
  }
  
  static save(user) {
    return db.execute('INSERT INTO users (name, email, password, company_name, position, salary, is_admin) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [user.name, user.email, user.password, user.company_name, user.position, user.salary, user.is_admin]);
    }

  static getUser(userId) {
    return db.execute('SELECT * FROM users WHERE id = ?',
    [userId]);
  }

  static editUser(userDetails, userId) {
    return db.execute('UPDATE users SET name = ?, email = ?, position = ?, salary = ? WHERE id = ?',
    [userDetails.name, userDetails.email, userDetails.position, userDetails.salary, userId]);
  }

  static deleteUser(userId) {
    return db.execute('DELETE FROM users WHERE id = ?',
    [userId]);
  }
};