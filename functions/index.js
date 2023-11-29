require("dotenv").config();
const functions = require("firebase-functions");
const nodeMailer = require("nodemailer");


const runtimeOpts = {
  timeoutSeconds: 540,
};
exports.mailMe = functions.runWith(runtimeOpts)
    .firestore
    .document("messages/{messageId}")
    .onCreate(async (snap, context) => {
      // Get an object representing the document
      // e.g. {'name': 'Marie', 'age': 66}
      const newValue = snap.data();

      // access a particular field as you would any JS property
      //   const name = newValue.name;

      console.log(newValue);

      const transporter = nodeMailer.createTransport({
        //   host: "smtp.mail.yahoo.com",
        //   port: 465,
        service: "yahoo",
        //   secure: true,
        auth: {
          user: process.env.USER,
          pass: process.env.PASS,
        },
        //   debug: false,
        //   logger: true,
      });

      /**
         * Adds two numbers together.
         */
      async function sendMail() {
        const info=await transporter.sendMail({
          from: process.env.USER,
          to: "nicholasc1665@yahoo.com",
          subject: "Hello wa✔", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // html body

        });

        console.log("Message sent: %s", info.messageId);
      }

      sendMail();
    });
