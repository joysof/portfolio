import { createContext, useContext, useState } from "react";
import axios from "axios";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [sending, setSending] = useState(false);
  
 const backendURL = import.meta.env.VITE_BACKEND_URL

  const sendMessage = async (formData) => {
    try {
      setSending(true);
      const res = await axios.post(`${backendURL}/api/contact/contact`, formData);
      alert(res.data.message);
    } catch (err) {
      console.error("Error sending message:", err.message);
      alert("Failed to send message");
    } finally {
      setSending(false);
    }
  };

  return (
    <ContactContext.Provider value={{ sendMessage, sending }}>
      {children}
    </ContactContext.Provider>
  );
};

// Custom hook
export const useContact = () => useContext(ContactContext);
