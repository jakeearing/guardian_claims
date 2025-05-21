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
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: true,
    }
  });

  // Construct the email message based on the form type and set the email subject
  let emailMessage;
  let emailSubject;
  if (formData.formType === 'default') {
    emailSubject = 'Claim Form Submission';
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
    emailSubject = 'Contractor Form Submission';
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
    from: process.env.EMAIL_USER,
    to: `${process.env.EMAIL_USER}, ${process.env.EMAIL_USER_2}`,
    // Set the email subject based on the form type
    subject: emailSubject, 
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
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
