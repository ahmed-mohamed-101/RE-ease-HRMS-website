const db = require('../util/database');

module.exports = class admin {
  constructor(name, email, password, company_name, is_admin, paymentId, email1) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.company_name = company_name;
    this.is_admin = is_admin;
    this.paymentId = paymentId;
    this.email1 = email1;
  }

  static find(email) {
    return db.execute('SELECT * FROM admins WHERE email = ?', [email]);
  }

  static save(admin) {
    return db.execute(
      'INSERT INTO admins (name, email, password, company_name, is_admin) VALUES (?, ?, ?, ?, ?)',
      [admin.name, admin.email, admin.password, admin.company_name, admin.is_admin]);
    }

  static updatePaymentId(paymentId, email1) {
    return db.execute('UPDATE admins SET payment_id = ? where email = ?', [paymentId, email1]);
  }
};