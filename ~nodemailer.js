//"use strict";
const nodemailer = require("nodemailer");

let testEmailAccount =  nodemailer.createTestAccount()

let transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 587,
  secure: false,
  auth: {
    user: "kovalenkoam",
    pass: "01564702q",
  },
})

let result = await transporter.sendMail({
  from: 'kovalenkoam@tut.by ',
  to: 'kovalenkoam@gmail.com',
  subject: 'Message from Node js',
  text: 'This message was sent from Node js server.',
  html:
    'This <i>message</i> was sent from <strong>Node js</strong> server.',
})

console.log(result)
