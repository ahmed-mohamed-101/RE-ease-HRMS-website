const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const admin = require("../models/admin");

const user = require("../models/user");



exports.adminSignup = async (req, res) => {    
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const company_name = req.body.company_name;
        let is_admin = 1;
        const hashedPassword = await bcrypt.hash(password, 12);

        const findEmail = await admin.find(email)
        const findEmail1 = findEmail[0]

        const findName = await admin.findN(name)
        const findName1 = findName[0]

        if (findEmail1.length != 0){
            return res.status(500).json({ message: "this email already exist" });
        }else if (findName1.length != 0) {
            return res.status(500).json({ message: "this name already exist" });
        }else{
            const adminDetails = {
                name: name,
                email: email,
                password: hashedPassword,
                company_name: company_name,
                is_admin: is_admin,
            };
            const result = await admin.save(adminDetails);
            return res.status(200).json({ message: "admin registered!" });
        }
    } catch (err) {
        console.error(err); // Log the error for debugging purposes
        return res.status(500).json({ msg: 'Internal server error', error: err.message });
    }
};

exports.adminLogin = async (req, res) => {
    try {
    const email = req.body.email;
    const password = req.body.password;    
    const Admin = await admin.find(email);
    if (Admin[0].length !== 1) {
        return res.status(500).json({ message: "email is wrong." });
    }
    const storedAdmin = Admin[0][0];
    const isEqual = await bcrypt.compare(password, storedAdmin.password);
    if (!isEqual) {
        return res.status(500).json({ message: "Wrong password!" });
    }
    const token = jwt.sign(
        {
        adminId: storedAdmin.id,
        adminName: storedAdmin.name,
        email: storedAdmin.email,
        adminCompanyName: storedAdmin.company_name,
        isAdmin: storedAdmin.is_admin,
        payment_id: storedAdmin.payment_id
        },
        "secretfortoken",
        { expiresIn: "30d" }
    );
    
        return res.status(200).json({ token: token, payment_id: storedAdmin.payment_id });
    } catch (err) {
        console.error(err); // Log the error for debugging purposes
        return res.status(500).json({ msg: 'Internal server error', error: err.message });
    }
    };

exports.userLogin = async (req, res) => {
    try {
    const email = req.body.email;
    const password = req.body.password;
    const User = await user.findLogin(email);
        
    const storedUser = User[0][0];

    if (User[0].length !== 1) {
        return res.status(500).json({ message: "email is wrong." });
    }

    const isEqual = await bcrypt.compare(password, storedUser.password);
    if (!isEqual) {
        return res.status(500).json({ message: "Wrong password!" });
    }

    const token = jwt.sign(
        {
        userId: storedUser.id,
        userName: storedUser.name,
        email: storedUser.email,
        userCompanyName: storedUser.company_name,
        userposition: storedUser.position,
        userSalary: storedUser.salary
        },
        "secretfortoken",
        { expiresIn: "30d" }
    );
    return res.status(200).json({ token: token, userId: storedUser.id });
    } catch (err) {
        console.error(err); // Log the error for debugging purposes
        return res.status(500).json({ msg: 'Internal server error', error: err.message });
    }
    };