'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaYoutube,
  FaFacebookF,
  FaInstagram
} from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-14 md:grid-cols-4 pb-16"
        >

          <div>
            <img
              src="/image/logo.png"
              alt="Shandilya MedTech Logo"
              className="h-20 mb-4"
            />
            <h3 className="text-xl font-bold text-white mb-4">
              Shandilya MedTech
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Engineering reliable electric mobility solutions designed for
              real-world Indian usage with trust, performance, and sustainability.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Products', href: '/products' },
                { name: 'Contact', href: '/contact' },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:text-orange-500 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Products
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>EV-Rickshaw</li>
              <li>EV-Loader</li>
              <li>EV Scooter</li>
              <li>Spare Parts</li>
              <li>GPS Tracker</li>
              <li>EV Charger</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>Ayodhyadham,India</span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-500" />
                <span>+91 8881033332</span>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500" />
                <span>shandilyamedtech@gmail.com</span>
              </li>

              <li className="flex items-center gap-3">
                <FaClock className="text-orange-500" />
                <span>Mon – Sat : 10AM – 9PM</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Shandilya MedTech Pvt Ltd. All rights reserved.
          </p>

          

            {/* Social Icons */}
            <div className="flex space-x-4 text-lg">
            

              <a
                href="https://www.facebook.com/61585980602516/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/shandilya_private_limited?igsh=MXVmZnI3ZXZoOHozZg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
            </div>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="hover:text-orange-500 cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-orange-500 cursor-pointer">
                Terms & Conditions
              </span>
            </div>
          </div>

        </div>
    </footer>
  );
}
