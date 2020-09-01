const router = require("express").Router();
const nodemailer = require('nodemailer');
const artRoutes = require("./art");

// const transport = {

// };

// const transporter = nodemailer.createTransport(transport);

// transporter.verify((err, success) => {
//     if (err) throw err;
//     console.log('Server is ready to take messages');
// })

// art routes
router.use("/art", artRoutes);
// router.post("/sendemail", (req, res, next) => {
//     const { name, email, reason, message} = req.body;
//     const mail = {

//     }
// })

module.exports = router;
