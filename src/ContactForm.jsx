import React, { useState } from "react";
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

    // EmailJS Template Parameters
    const emailParams = {
      name: formData.name,
      email: formData.email, // User's email
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email, // Ensure this is passed for Reply-To to work
    };

    emailjs
      .send(
        "service_6ojfi8o", // Replace with your EmailJS service ID
        "template_a7pt00w", // Replace with your EmailJS template ID
        emailParams, // Sending the correctly structured data
        "DhitD8Q-eT1LeWyP3" // Replace with your EmailJS public key
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
    <section id="contact" className="flex flex-col items-center justify-center py-12 rounded-2xl shadow-lg bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        Contact <span className="text-orange-500">Me</span>
      </h2>

      <form onSubmit={handleSubmit} className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 px-8">
        {/* Left Inputs */}
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border-2 border-orange-400 p-4 rounded-lg w-full focus:ring focus:ring-orange-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border-2 border-orange-400 p-4 rounded-lg w-full focus:ring focus:ring-orange-300"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border-2 border-orange-400 p-4 rounded-lg w-full focus:ring focus:ring-orange-300"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="border-2 border-orange-400 p-4 rounded-lg w-full focus:ring focus:ring-orange-300"
            required
          />
        </div>

        {/* Right Message Input */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="border-2 border-orange-400 p-4 rounded-lg w-full h-40 resize-none focus:ring focus:ring-orange-300"
          required
        ></textarea>

        {/* Submit Button */}
        <div className="col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-400 transition-all duration-300"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Status Message */}
      {status && <p className="mt-4 text-gray-700">{status}</p>}
    </section>
  );
};

export default ContactForm;
