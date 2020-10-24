const router = require("express").Router();
const nodemailer = require("nodemailer");

// const transport = {
//   host: "smtp.godaddy.com",
//   auth: {
//     user: "",
//     pass: "",
//   },
// };

// const transporter = nodemailer.createTransport(transport);

// transporter.verify((err, success) => {
//   if (err) throw err;
//   console.log("Server is ready to take messages");
// });

router.route("/").post((req, res, next) => {
  console.log(req.body);
  const { name, email, reason, message } = req.body;
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // create reusable transporter object using the default SMTP transport
    // TODO TEST GODADDY
    //   let transporter = nodemailer.createTransport({
    //     service: "Godaddy",
    //     auth: {
    //       user: testAccount.user, // generated ethereal user
    //       pass: testAccount.pass, // generated ethereal password
    //     }
    //   });
    // TEST ENVIRONMENT
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `${name} <${email}>`, // sender address
      to: process.env.EMAIL, // list of receivers
      subject: reason, // Subject line
      text: message, // plain text body
      html: `<b>${message}</b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main()
    .then(() => res.json({ msg: "success" }))
    .catch((err) => {
      console.log(err);
      res.json({ msg: "fail", err: err });
    });
  //   const mail = {
  //     from: name,
  //     to: "",
  //     subject: "",
  //     text: "",
  //   };

  //   transporter.sendMail(mail, (err, data) => {
  //     if (err) {
  //       res.json({
  //         msg: "fail",
  //       });
  //     } else {
  //       res.json({
  //         msg: "success",
  //       });
  //     }
  //   });
});

module.exports = router;
