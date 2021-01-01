"use strict";
const nodemailer = require("nodemailer");
const { recipients } = require('./emails');
var fs = require('fs');
//let file = null;
let emailBody = null;

for (let i = 0; i < recipients.length; i++) {
  
   const filename = "./"+recipients[i][0] + '.txt';
    //emailBody = null;
    try {
       emailBody = fs.readFileSync(filename, 'utf8');
      console.log(emailBody);  
      main(emailBody).catch(console.error)    ;  
  } catch(e) {
      console.log('Error:', e.stack);
  }

}

//main("test");
async function main(emailBody) {
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
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'a.kovalenko@belapb.by', // sender address
    to: 'a.kovalenko@belapb.by', // list of receivers
    subject: "✔ From Aris with Love.... ", // Subject line
    //text: "Hello! ✔ \n  From Aris with Love.... " , // plain text body
    //text: ""+emailBody, // plain text body
    html: "<br>✔ " +"<br>"+emailBody.split('\n').join('</br>')+ "</br>", // html body
    //html: "<b>"+ emailBody + "</b>", // html body

  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}