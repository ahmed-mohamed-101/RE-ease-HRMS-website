const db = require('../util/database');

module.exports = class admin {
  static find(email) {
    return db.execute('SELECT * FROM admins WHERE email = ?',
    [email]);
  }

  static save(admin) {
    return db.execute(
      'INSERT INTO admins (name, email, password, company_name, is_admin) VALUES (?, ?, ?, ?, ?)',
      [admin.name, admin.email, admin.password, admin.company_name, admin.is_admin]);
    }

  static updatePaymentId(paymentId, email1) {
    return db.execute('UPDATE admins SET payment_id = ? where email = ?',
    [paymentId, email1]);
  }
};