const db = require('../util/database');

module.exports = class admin {
  constructor(name, email, password, company_name, is_admin) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.company_name = company_name;
    this.is_admin = is_admin;
  }

  static find(email) {
    return db.execute('SELECT * FROM admins WHERE email = ?', [email]);
  }

  static save(admin) {
    return db.execute(
      'INSERT INTO admins (name, email, password, company_name, is_admin) VALUES (?, ?, ?, ?, ?)',
      [admin.name, admin.email, admin.password, admin.company_name, admin.is_admin]
    );
  }
};