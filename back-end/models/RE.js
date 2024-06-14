const db = require('../util/database');

module.exports = class RE {
  static showAll(adminCompanyName) {
    return db.execute('SELECT * FROM re WHERE company_name = ?',
    [adminCompanyName]);
  }

  static showAllAssigned(userCompanyName , userName) {
    return db.execute('SELECT * FROM re WHERE assigned_to = ? AND company_name = ?',
    [userName, userCompanyName]);
  }

  static find(searchTerm, adminCompanyName) {
    return db.execute('SELECT * FROM re WHERE (type LIKE ? OR address LIKE ? OR size LIKE ? OR status LIKE ? OR price LIKE ? OR assigned_to LIKE ?) AND (company_name = ?)',
      ['%' + searchTerm + '%', '%' + searchTerm + '%', '%' + searchTerm + '%', '%' + searchTerm + '%', '%' + searchTerm + '%', '%' + searchTerm + '%', adminCompanyName]);
  }

  static searchAssigned(searchTerm, userName, userCompanyName) {
    return db.execute('SELECT * FROM re WHERE (type LIKE ? OR address LIKE ? OR size LIKE ? OR status LIKE ? OR price LIKE ?) AND assigned_to = ? AND company_name = ?',
      ['%' + searchTerm + '%', '%' + searchTerm + '%', '%' + searchTerm + '%', '%' + searchTerm + '%', '%' + searchTerm + '%', userName , userCompanyName]);
  }
  
  static save(REDetails) {
    return db.execute('INSERT INTO re (owner, type, address, size, status, price, assigned_to, company_name , document) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [REDetails.owner, REDetails.type, REDetails.address, REDetails.size, REDetails.status, REDetails.price, REDetails.assigned_to, REDetails.company_name, REDetails.document]);
    }

  static getRE(REId) {
    return db.execute('SELECT * FROM re WHERE id = ?',
    [REId]);
  }

  static editRE(REDetails, REId) {
    return db.execute('UPDATE re SET owner = ?, type = ?, address = ?, size = ?, status = ?, price = ?, assigned_to = ? WHERE id = ?',
    [REDetails.owner, REDetails.type, REDetails.address, REDetails.size, REDetails.status, REDetails.price, REDetails.assigned_to, REId]);
  }

  static deleteRE(REId) {
    return db.execute('DELETE FROM re WHERE id = ?',
    [REId]);
  }

  static showDocument(REId) {
    return db.execute('SELECT document FROM re WHERE id = ?',
    [REId]);
  }
};