import express from 'express';
import  sendMail  from '../controllers/contact.controller.js';

const contactRouter = express.Router();

contactRouter.post('/contact', sendMail);

export default contactRouter;

