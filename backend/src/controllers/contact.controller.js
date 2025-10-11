import  sendContactMail from '../services/contact.service.js'

 const sendMail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    await sendContactMail(name, email, message);

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default sendMail