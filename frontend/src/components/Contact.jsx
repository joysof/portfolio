import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane, FaPhoneAlt, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { useContact } from "../context/contact.context.jsx";
const Contact = () => {

  const { sendMessage, sending } = useContact();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage(form);
    setForm({ name: "", email: "", message: "" });
  };


  return (
    <section
      id="contact"
      className="rounded-3xl shadow-lg mt-5 md:mt-10  px-2 sm:px-6 py-20
      bg-gradient-to-b from-gray-50 to-gray-200 
      dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 
      text-center transition-all duration-500"
    >
      <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text uppercase">
        Contact Me
      </h2>

      <div className=" flex flex-col gap-10 md:flex md:flex-row items-center justify-around">

        {/* === Left Side === */}
        <div className=" flex flex-col gap-6 text-left">
          <h3 className="text-2xl font-bold mb-4 text-teal-500">Get in Touch</h3>
          
          <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors">
            <MdOutgoingMail className="text-2xl" /> 
            <a href="mailto:sajibhossen560@gmail.com" className="hover:underline">sajibhossen560@gmail.com</a>
          </p>

          <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors">
            <FaPhoneAlt className="text-2xl" /> 
            <a href="tel:+8801314997965" className="hover:underline">+880 1314 997965</a>
          </p>

          <div className="flex items-center gap-4 mt-4">
            <a href="https://www.facebook.com/mdsajib.sikther" target="_blank" rel="noopener noreferrer"
               className="text-gray-700 dark:text-gray-300 hover:text-blue-600 text-4xl transition-colors">
              <FaFacebook />
            </a>
            <a href="https://github.com/joysof" target="_blank" rel="noopener noreferrer"
               className="text-gray-700 dark:text-gray-300 hover:bg-blue-600 rounded-full hover:text-blue-600 dark:hover:text-white text-4xl transition-colors ">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/md-sajib-hossen-abab46385" target="_blank" rel="noopener noreferrer"
               className="text-gray-700 dark:text-gray-300 hover:text-blue-500 text-4xl transition-colors">
              <FaLinkedin />
            </a>
          </div>

          <div className="mt-5">
            <a
  href="Md_Sajib_Hossen_Resume.pdf"
  download="Sajib_Hossen_Resume.pdf"
  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full shadow-md hover:scale-105 hover:from-teal-400 hover:to-blue-400 transition-all duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
  </svg>
  Download Resume
</a>
          </div>
        </div>

        {/* === Right Side (Form) === */}
        <div className="flex-1 w-full max-w-lg bg-white/70 dark:bg-gray-800/50 backdrop-blur-lg 
        rounded-2xl shadow-2xl p-2 sm:p-8 border border-gray-200 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-900 rounded-lg px-4 py-3">
              <FaUser className="text-teal-500 text-xl" />
              <input
                type="text"
                name="name" value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100"
              />
            </div>

            <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-900 rounded-lg px-4 py-3">
              <FaEnvelope className="text-teal-500 text-xl" />
              <input
                type="email"
                
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100"
              />
            </div>

            <div className="flex items-start gap-3 bg-gray-100 dark:bg-gray-900 rounded-lg px-4 py-3">
              <textarea
                name="message"
                onChange={handleChange}
                value={form.message}
                placeholder="Your Message"
                rows="4"
                required
                className="w-full bg-transparent outline-none resize-none text-gray-800 dark:text-gray-100"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={sending}
              className={`w-full flex items-center justify-center gap-3 py-3 text-lg font-medium 
              bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full shadow-md 
              hover:from-teal-400 hover:to-blue-400 hover:scale-105 transition-all duration-300 
              `}
            >
              <FaPaperPlane className="text-xl" />
                {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
