const RE = require("../models/RE");
const jwt = require("jsonwebtoken");

exports.showAll = async (req, res) => {
  try {
    const secret = "secretfortoken" 
    const token = req.body.token;
    const verify = jwt.verify(token,secret)
    const {adminCompanyName} = verify;

    const result = await RE.showAll(adminCompanyName)
    const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));
    return res.status(200).json(result1);
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}

exports.search = async (req, res) => {
  try {
    const secret = "secretfortoken" 
    const token = req.body.token;
    const verify = jwt.verify(token,secret)
    const {adminCompanyName} = verify;

    let searchTerm = req.body.search;
    const result = await RE.find(searchTerm, adminCompanyName)
    const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));
    return res.status(200).json(result1);
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}

exports.addRE = async (req, res) => {
  const secret = "secretfortoken" 
  const token = req.body.token;
  const verify = jwt.verify(token,secret)
  const {adminCompanyName} = verify;

  const owner = req.body.owner;
  const type = req.body.type;
  const address = req.body.address;
  const size = req.body.size;
  const status = req.body.status;
  const price = req.body.price;
  const assigned_to = req.body.assigned_to;
  const company_name = adminCompanyName;

  try {
    const REDetails = {
            owner: owner,
            type: type,
            address: address,
            size: size,
            status: status,
            price: price,
            assigned_to: assigned_to,
            company_name: company_name,
        };
    const result = await RE.save(REDetails);
    return res.status(200).json({ message: "RE added" });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}

exports.getRE = async (req, res) => {
  try {
    const REId = req.params.id
    const result = await RE.getRE(REId);
    const result1 = result.flatMap(arr => arr.filter(obj => !obj._buf));
    console.log(result1)
    return res.status(200).json(result1);
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}

exports.editRE = async (req, res) => {
  const REId = req.params.id
  const owner = req.body.owner;
  const type = req.body.type;
  const address = req.body.address;
  const size = req.body.size;
  const status = req.body.status;
  const price = req.body.price;
  const assigned_to = req.body.assigned_to;
  try {
    const REDetails = {
      owner: owner,
      type: type,
      address: address,
      size: size,
      status: status,
      price: price,
      assigned_to: assigned_to,
  };
    const result = await RE.editRE(REDetails, REId);
    return res.status(200).json({ message: "RE edited!" });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}

exports.deleteRE = async (req, res) => {
  try {
    const REId = req.params.id
    const result = await RE.deleteRE(REId);
    return res.status(200).json({ message: `RE-id: (${REId}) is successfully deleted :)...` });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
}