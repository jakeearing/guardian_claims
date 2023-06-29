const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

require('dotenv').config({ path: './.env' });

const app = express();

app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Endpoint to handle form submission
app.post('/api/send-email', (req, res) => {
  const formData = req.body;

  // Create a Nodemailer transporter with SMTP configuration
  const transporter = nodemailer.createTransport({
    host: 'SMTP.NameBrightMail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Construct the email message based on the form type
  let emailMessage;
  if (formData.formType === 'default') {
    emailMessage = `
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Email Address: ${formData.email}
      Phone Number: ${formData.phone}
      Zip Code: ${formData.zipCode}
      Type of Claim: ${formData.claimType}
      Claim Status: ${formData.claimStatus}
    `;
  } else if (formData.formType === 'contractor') {
    emailMessage = `
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Email Address: ${formData.email}
      Phone Number: ${formData.phone}
      Zip Code: ${formData.zipCode}
      Company Name: ${formData.company}
    `;
  } else {
    return res.status(400).json({ error: 'Invalid form type' });
  }

  // Define the email options
  const mailOptions = {
    from: 'claims@guardianclaims.com',
    to: 'claims@guardianclaims.com',
    subject: 'Claim Form Submission',
    text: emailMessage,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
