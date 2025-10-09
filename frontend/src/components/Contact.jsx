import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane, FaPhoneAlt, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // EmailJS code can be added here later
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // demo loader
  };

  return (
    <section
      id="contact"
      className="rounded-3xl shadow-lg mt-20 px-6 py-20
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
            <a href="" target="_blank" rel="noopener noreferrer"
               className="text-gray-700 dark:text-gray-300 hover:text-blue-600 text-4xl transition-colors">
              <FaFacebook />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer"
               className="text-gray-700 dark:text-gray-300 hover:bg-blue-600 rounded-full hover:text-blue-600 dark:hover:text-white text-4xl transition-colors ">
              <FaGithub />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer"
               className="text-gray-700 dark:text-gray-300 hover:text-blue-500 text-4xl transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* === Right Side (Form) === */}
        <div className="flex-1 w-full max-w-lg bg-white/70 dark:bg-gray-800/50 backdrop-blur-lg 
        rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
          <form className="space-y-6" onSubmit={sendEmail}>
            <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-900 rounded-lg px-4 py-3">
              <FaUser className="text-teal-500 text-xl" />
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100"
              />
            </div>

            <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-900 rounded-lg px-4 py-3">
              <FaEnvelope className="text-teal-500 text-xl" />
              <input
                type="email"
                name="reply_to"
                placeholder="Your Email"
                required
                className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100"
              />
            </div>

            <div className="flex items-start gap-3 bg-gray-100 dark:bg-gray-900 rounded-lg px-4 py-3">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full bg-transparent outline-none resize-none text-gray-800 dark:text-gray-100"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-3 py-3 text-lg font-medium 
              bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full shadow-md 
              hover:from-teal-400 hover:to-blue-400 hover:scale-105 transition-all duration-300 
              ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              <FaPaperPlane className="text-xl" />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
