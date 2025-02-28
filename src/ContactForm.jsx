import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs
      .send(
        "service_6ojfi8o",
        "template_a7pt00w",
        emailParams,
        "DhitD8Q-eT1LeWyP3"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-16 px-6 bg-white-900"
    >
      {/* Contact Header */}
      <motion.h2
        className="text-5xl font-bold text-center mb-8 text-orange-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get In <span className="text-white">Touch</span>
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white p-10 rounded-xl shadow-xl border border-gray-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["name", "email", "phone", "subject"].map((field, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder=""
                value={formData[field]}
                onChange={handleChange}
                className="peer w-full bg-transparent text-gray-700 border-2 border-orange-400 py-3 px-4 rounded-lg focus:outline-none focus:border-orange-500 transition-all placeholder-transparent"
                required
              />
              <label
                className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
            </motion.div>
          ))}
        </div>

        {/* Message Box */}
        <motion.div
          className="relative mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <textarea
            name="message"
            placeholder=""
            value={formData.message}
            onChange={handleChange}
            className="peer w-full h-32 bg-transparent text-gray-700 border-2 border-orange-400 py-3 px-4 rounded-lg focus:outline-none focus:border-orange-500 transition-all placeholder-transparent"
            required
          />
          <label
            className="absolute left-4 top-3 text-gray-400 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 transition-all"
          >
            Your Message
          </label>
        </motion.div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <motion.button
            type="submit"
            className="relative px-8 py-3 text-lg font-semibold bg-orange-500 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:bg-orange-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Send Message
            <span className="absolute inset-0 bg-orange-300 opacity-10 blur-xl rounded-full"></span>
          </motion.button>
        </div>
      </motion.form>

      {/* Status Message */}
      {status && (
        <motion.p
          className={`mt-6 text-lg ${
            status.includes("successfully") ? "text-black-400" : "text-red-400"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {status}
        </motion.p>
      )}
    </section>
  );
};

export default ContactForm;
