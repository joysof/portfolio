import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";


const Contact = () => {

  const [loading , setLoading] = useState(false)
  const sendEmail = (e) =>{
    e.preventDefault()
  }


  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 
      bg-gradient-to-b from-gray-50 via-white to-gray-100 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
      text-center transition-all duration-500"
    >
      <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text uppercase">
        Contact Me
      </h2>

      <div
        className="w-full max-w-lg bg-white/70 dark:bg-gray-800/50 backdrop-blur-lg 
        rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700"
      >
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
    </section>
  );
};

export default Contact;
