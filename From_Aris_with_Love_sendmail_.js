"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
 // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "8-mail.belapb.by",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "A.Kovalenko@belapb.by", // generated ethereal user
      pass: "Friend_67", // generated ethereal password
    },

  });
// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'a.kovalenko@belapb.by', // sender address
    to: "Y.Chekhovich@belapb.by", // list of receivers
    subject: "Happy New Year!", // Subject line
    text: "Hello! ✔ \n  From Aris with Love.... ", // plain text body
    html: "<b>Hello! ✔ \n  From Aris with Love.... </b>", // html body

  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);