//util
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ports = process.env.PORT || 3000;

//routes
const auth = require("./routes/auth");
const payment = require("./routes/payment");

const adminManageUsers = require('./routes/adminManageUsers');
const adminManageRE = require('./routes/adminManageRE')
const adminManageLeaves = require('./routes/adminManageLeaves')
const adminManageAttendance = require('./routes/adminManageAttendance')

const userViewDataAndRecordAttendance = require('./routes/userViewDataAndRecordAttendance')
const userApplyAndViewLeave = require('./routes/userApplyAndViewLeave')
const userManageAssignedRE = require('./routes/userManageAssignedRE')

//controllers
const errorController = require("./controllers/error");

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use("/auth", auth);

app.use("/payment", payment);

app.use('/adminManageUsers', adminManageUsers);
app.use('/adminManageRE', adminManageRE);
app.use('/adminManageLeaves', adminManageLeaves);
app.use('/adminManageAttendance', adminManageAttendance);

app.use('/userViewDataAndRecordAttendance', userViewDataAndRecordAttendance);
app.use('/userApplyAndViewLeave', userApplyAndViewLeave)
app.use('/userManageAssignedRE', userManageAssignedRE)

app.use(errorController.get404);

app.use(errorController.get500);


app.listen(ports, () => console.log(`Listening on port ${ports}`));