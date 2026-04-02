import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/send-quote', async (req, res) => {
  const { name, email, phone, message } = req.body;
  
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'vaibhavkeni21@gmail.com',
      subject: `Quote Request from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong> ${message}</p>`
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/send-callback', async (req, res) => {
  const { name, phone, floorPlan, budget, city } = req.body;
  
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'vaibhavkeni21@gmail.com',
      subject: `Callback Request from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Floor Plan:</strong> ${floorPlan}</p><p><strong>Budget:</strong> ${budget}</p><p><strong>City:</strong> ${city}</p>`
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/send-contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'vaibhavkeni21@gmail.com',
      subject: `Contact Form: ${subject} from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong> ${message}</p>`
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
