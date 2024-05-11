const user = require("../models/user");
const jwt = require("jsonwebtoken");

exports.showAll = async (req, res) => {
  try {
    const secret = "secretfortoken" 
    const token = req.body.token;
    const verify = jwt.verify(token,secret)
    const {adminCompanyName} = verify;

    const result = await user.showAll(adminCompanyName)
    const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));
    res.status(200).json(result1);
  } catch (err) {
    if (!err.statusCode) {
          err.statusCode = 500;
      }
      next(err);
  }
}

exports.search = async (req, res) => {
  try {
    const secret = "secretfortoken" 
    const token = req.body.token;
    const verify = jwt.verify(token,secret)
    const {adminCompanyName} = verify;

    let searchTerm = req.body.search;
    const result = await user.find(searchTerm, adminCompanyName)
    const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));
    res.status(200).json(result1);
  } catch (err) {
    if (!err.statusCode) {
          err.statusCode = 500;
      }
      next(err);
  }
}

exports.addUser = async (req, res) => {
  const secret = "secretfortoken" 
  const token = req.body.token;
  const verify = jwt.verify(token,secret)
  const {adminCompanyName} = verify;

  const name = req.body.name;
  const email = req.body.email;
  const company_name = adminCompanyName;
  const position = req.body.position;
  const salary = req.body.salary;
  const is_admin = 0;

  try {
    const userDetails = {
            name: name,
            email: email,
            company_name: company_name,
            position: position,
            salary: salary,
            is_admin: is_admin,
        };
    const result = await user.save(userDetails);
    res.status(200).json({ message: "user registered!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.getUser = async (req, res) => {
  try {
    const userId = req.params.id
    const result = await user.getUser(userId);
    console.log(result)
    res.status(200).json(result);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.editUser = async (req, res) => {
  const userId = req.params.id
  const name = req.body.name;
  const email = req.body.email;
  const position = req.body.position;
  const salary = req.body.salary;
  try {
    const userDetails = {
      name: name,
      email: email,
      position: position,
      salary: salary,
    };
    const result = await user.editUser(userDetails, userId);
    res.status(200).json({ message: "user edited!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id
    const result = await user.deleteUser(userId);
    res.status(200).json({ message: `user-id: (${userId}) is successfully deleted :)...` });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}