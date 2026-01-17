'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', company: '', email: '', phone: '', address: '', message: '' });
      } else {
        setSubmitMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen bg-gradient-to-br from-[#1f1a2b] via-[#2e243d] to-[#3b2f52] flex items-center justify-center px-6 py-40 overflow-hidden">

        {/* Dotted background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:18px_18px] opacity-20"></div>

        {/* Floating dark blobs */}
        <motion.div
          className="absolute -top-48 -left-48 w-[520px] h-[520px] bg-purple-800/40 rounded-full blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-indigo-800/40 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl font-semibold mb-6 italic text-orange-500">Contact Us</h2>

            <p className="text-gray-300 max-w-md mb-10 leading-relaxed italic">
              Not sure what you need? Our team will listen carefully and help you
              discover solutions you may not have considered.
            </p>

            <div className="space-y-5 text-gray-300">
              <div className="flex items-center gap-4">
                <FiMail className="text-xl text-orange-500" />
                <span>shandilyamedtech@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FiPhone className="text-xl text-orange-500" />
                <span>Support: +91 8881033332</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-[#2e243d] rounded-2xl shadow-2xl p-10 max-w-xl w-full"
          >
            {/* Decorative rings */}
            <div className="absolute top-6 right-6 w-24 h-24 border border-orange-500 rounded-full opacity-40"></div>
            <div className="absolute top-12 right-12 w-14 h-14 border border-orange-500 rounded-full opacity-40"></div>

            <h3 className="text-2xl font-semibold mb-2 italic text-orange-400">
              We’d love to hear from you
            </h3>
            <p className="text-gray-400 mb-8 italic">
              Let’s get in touch
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full border border-gray-600 bg-[#3b2f52] text-white rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full border border-gray-600 bg-[#3b2f52] text-white rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border border-gray-600 bg-[#3b2f52] text-white rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full border border-gray-600 bg-[#3b2f52] text-white rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Address */}
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full border border-gray-600 bg-[#3b2f52] text-white rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              {/* Message */}
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
                className="w-full border border-gray-600 bg-[#3b2f52] text-white rounded-md px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              {/* Submit Message */}
              {submitMessage && (
                <p className={`text-sm ${submitMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                  {submitMessage}
                </p>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 disabled:cursor-not-allowed text-black px-6 py-3 rounded-md text-sm font-medium shadow transition"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
