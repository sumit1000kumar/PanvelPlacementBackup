const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');
require('dotenv').config();  // To use environment variables

// Create Nodemailer transporter using Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.ADMIN_EMAIL,  
        pass: process.env.ADMIN_PASS,   
    },
});

// Function to send email notification
const sendNotificationEmail = async (formData) => {
    const mailOptions = {
        from: process.env.ADMIN_EMAIL,  
        to: process.env.ADMIN_EMAIL,   
        subject: `New Inquiry from Website: ${formData.subject}`,  
        text: `
            New Inquiry from Website:

            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Subject: ${formData.subject}
            Message: ${formData.message}
        `,
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        console.log('Notification email sent!');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

exports.submitContactForm = async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    // Validate form data
    if (!name || !email || !message) {
        return res.status(400).json({ message: "Please fill in all required fields." });
    }

    try {
        // Save the form data to the database
        const newContact = new Contact({ name, email, phone, subject, message });
        await newContact.save();

        // Send notification email
        await sendNotificationEmail({ name, email, phone, subject, message });

        // Send success response
        res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error saving contact:", error.message);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};
