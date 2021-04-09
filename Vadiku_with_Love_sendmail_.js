/*
НАСТОЯЩИЙ СКРИПТ ДЕЛАЕТ РАССЫЛКУ
*/
"use strict";
const nodemailer = require("nodemailer");
const { recipients } = require('./emails2');
var fs = require('fs');
let emailBody = null;

for (let i = 0; i < recipients.length; i++) {
  
   const filename = recipients[i][0] ;
    //emailBody = null;
    try {
     
       emailBody = fs.readFileSync(filename, 'utf8');
      console.log(emailBody); 
      if (emailBody.length >145 ) { // СКРИПТ НЕ ОТСЫЛАЕТ ПИСЬМА, ЕСЛИ РАЗМЕР ПИСЬМА МЕНЬШЕ 145 СИМВОЛОВ ПРИ НЕОБХОДИМОСТИ МОЖНО МЕНЯТЬ 
    main("Дорогой Вадик!"+ "\n"+ "Будь внимателен. тут можешь дописать что тебе надо, а дальше пойдет содержимое файла, которое привязано к твоему адресу \n "  + emailBody, recipients[i][1]).catch(console.error)    ;                                             // ОТПРАВИТЕЛЯ СМЕНИТЬ 
      }

      else {                    // ЕСЛИ НЕТ ОШИБОК ТО ПИШЕМ КОЛЛЕГЕ ЧТО ОН /ОНА МОЛОДЕЦ ЛИБО МОЖНО НИЧЕГО НЕ СЛАТЬ 
        main("Дорогой Вадик!"+ "\n"+ "Будь внимателен. тут можешь дописать что тебе надо " +"\n",  recipients[i][1]).catch(console.error)    ;  
      }
  } catch(e) {
      console.log('Error:', e.stack);
  }

}


async function main(emailBody, recipient) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "8-mail.belapb.by",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "A.Kovalenko@belapb.by", // generated ethereal user ОБЯЗАТЕЛЬНО УКАЗАТЬ ОТ КОГО БУДУТ ОТПРАВЛЯТЬСЯ ПИСЬМА
      pass: "укажисвойпароль!!!!!!вкавычках", // generated ethereal password ОБЯЗАТЕЛЬНО УКАЗАТЬ ПАРОЛЬ 
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
    from: 'a.kovalenko@belapb.by', // sender address       УКАЗАТЬ АДРЕС ОТПРАВИТЕЛЯ

    to: recipient, // list of receivers

    subject: "Для Вадика with Love.... ", // Subject line ТЕМА ПИСЬМА МОЖНО УКЗАТЬ СВЮ 
   
    html: "<br> " +"<br>"+emailBody.split('\n').join('</br>')+ "</br>", // html body

  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}