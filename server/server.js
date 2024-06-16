require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

//object to store the confirmation status of users' emails. This simulates an in-memory database.
let emailConfirmationStatus = {};

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// register a new user
app.post('/register', (req, res) => {
  const { email } = req.body;
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

  const confirmationLink = `http://localhost:${process.env.PORT}/confirm/${token}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Email Confirmation',
    html:`  <div>
              Dear Driver,
            </div>

              <div>
              Thank you for registering with us. To complete your registration process, please confirm your email address by clicking on the Button below:
              </div>

              <div>
                <a href="${confirmationLink}" style="
                display: inline-block;
                padding: 8px 16px;
                font-size: 14px;
                font-weight: bold;
                color: #0074d9;
                background-color: #70bf73;
                text-decoration: none;
                border-radius: 5px;
                text-align: center;">Confirm Email</a>
              </div>

              <div>
              By confirming your email, you will gain access to our platform and enjoy all the benefits it offers.
              </div>

              <div>
              If you have any questions or need further assistance, feel free to contact us at allooomoniteur@gmail.com.
              </div>

              <div>
              Best regards,
              </div>


            <div> Allo Moniteur </div>  `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending confirmation email');
    }
    res.status(200).send('Confirmation email sent');
  });

});

// confirm user's email and send email after confirm
app.get('/confirm/:token', (req, res) => {
  const { token } = req.params;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(400).send('Invalid or expired token');
    }

    // Store email confirmation status
    const { email } = decoded;
    emailConfirmationStatus[email] = true;

    // Define the email address where you want to redirect the confirmation emails
    const redirectedEmail = 'allooomoniteur@gmail.com';

    // Modify mailOptions to send email to the redirected address
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: redirectedEmail,
      subject: 'Email Confirmation',
      text:`Dear Team,

                We have received a new driver who wants to join our Team.
                Driver Email: ${email}

                Please follow up with the Driver to complete the onboarding process.

                Best regards,

            Allo Moniteur`
    };

    // Send the modified email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send('Error sending confirmation email');
      }
      // Redirect the user to the front-end route /ValidateDriver
      res.redirect('http://localhost:8080/ValidateDriver');
    });
  });
});

//Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));