require("dotenv").config();
const functions = require("firebase-functions");
const nodeMailer = require("nodemailer");

const runtimeOpts = {
  timeoutSeconds: 540,
};
exports.mailMe = functions
    .runWith(runtimeOpts)
    .firestore.document("messages/{messageId}")
    .onCreate(async (snap, context) => {
      const newMessage = snap.data();
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
     * sends a mail to the provided destination
     * @param {object} message the message to be sent
     * from nodemailer transporter
     */
      async function sendMail(message) {
        const info = await transporter.sendMail({
          from: process.env.USER,
          to: process.env.USER,
          subject: `${message.subject} - FROM MY WEBSITE`, // Subject line
          text: message.message, // plain text body
          html: `<ul>
          <li>${message.name}</li>
          <li>${message.email}</li>
          <li>${message.phone}</li>
        </ul>
        
        <hr />
        <p>${message.message}</p>`, // html body
        });
        console.log("Message sent: %s", info.messageId);
      }
      sendMail(newMessage);
    });
