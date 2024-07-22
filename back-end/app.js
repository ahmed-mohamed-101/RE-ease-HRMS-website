//util
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ports = process.env.PORT || 3000;

//routes
const auth = require("./routes/auth.js");
const payment = require("./routes/payment.js");

const adminManageUsers = require('./routes/adminManageUsers.js');
const adminManageRE = require('./routes/adminManageRE.js')
const adminManageLeaves = require('./routes/adminManageLeaves.js')
const adminManageAttendance = require('./routes/adminManageAttendance.js')
const adminManagePayroll = require('./routes/adminManagePayroll.js')
const adminDashboard = require('./routes/adminDashboard.js')

const userViewDataAndRecordAttendance = require('./routes/userViewDataAndRecordAttendance.js')
const userApplyAndViewLeave = require('./routes/userApplyAndViewLeave.js')
const userManageAssignedRE = require('./routes/userManageAssignedRE.js')
const userManagePayroll = require('./routes/userManagePayroll.js')
const userDashboard = require('./routes/userDashboard.js')

//controllers
const errorController = require("./controllers/error.js");

//app
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/auth", auth);

app.use("/payment", payment);

app.use('/adminManageUsers', adminManageUsers);
app.use('/adminManageRE', adminManageRE);
app.use('/adminManageLeaves', adminManageLeaves);
app.use('/adminManageAttendance', adminManageAttendance);
app.use('/adminManagePayroll', adminManagePayroll);
app.use('/adminDashboard', adminDashboard);

app.use('/userViewDataAndRecordAttendance', userViewDataAndRecordAttendance);
app.use('/userApplyAndViewLeave', userApplyAndViewLeave)
app.use('/userManageAssignedRE', userManageAssignedRE)
app.use('/userManagePayroll', userManagePayroll)
app.use('/userDashboard', userDashboard)

app.use(errorController.get404);
app.use(errorController.get500);

app.listen(ports, () => console.log(`Listening on port ${ports}`));