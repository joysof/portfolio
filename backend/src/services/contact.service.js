import nodemailer from 'nodemailer'

 const sendContactMail = async (name, email, message) => {
  try {
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${name}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default sendContactMail