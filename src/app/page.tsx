'use client';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { FaLeaf, FaWallet, FaBatteryFull, FaMicrochip } from 'react-icons/fa';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function HomePage() {
  const products = [
    { img: 'ricks4.png', title: 'Electric Rickshaw', desc: 'Reliable daily commuting solution for city transport.', badge: 'Best Seller', bg: 'bg-yellow-100' },
    { img: 'ricks1.png', title: 'Electric Scooter', desc: 'Compact, fast, and energy-efficient urban mobility.', badge: 'New', bg: 'bg-pink-100' },
    { img: 'ricks2.png', title: 'Electric Bike', desc: 'Sustainable and fun rides for short trips and deliveries.', badge: 'Popular', bg: 'bg-green-100' },
    { img: 'ricks3.png', title: 'Electric Car', desc: 'Eco-friendly rides for modern city travel.', badge: 'Latest', bg: 'bg-blue-100' },
  ];
  const images = [
    { src: "/image/about1.png", size: "w-35", rotate: "-rotate-2" },
    { src: "/image/user2.jpg", size: "w-36", rotate: "rotate-1" },
    { src: "/image/about3.png", size: "w-30", rotate: "-rotate-9" },
    { src: "/image/about4.png", size: "w-32", rotate: "rotate-2" },
    { src: "/image/about2.png", size: "w-24", rotate: "-rotate-6" },
    { src: "/image/about6.png", size: "w-34", rotate: "-rotate-6" },
  ];
  return (
    <div className="bg-[#f8f7f4] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] pt-40 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <Navbar />

        {/* Floating background blobs */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-tr from-orange-300 to-yellow-200 opacity-30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute top-40 right-0 w-80 h-80 bg-gradient-to-tr from-orange-200 to-pink-200 opacity-25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 16, repeat: Infinity }}
          className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-tr from-yellow-100 to-orange-100 opacity-20 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* COMPANY NAME – MAIN HEADING */}
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                Shandilya MedTech
              </span>
            </h1>

            {/* SUB HEADING */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 leading-snug">
              Smart & Reliable <br />
              <span className="text-orange-500">
                Electric Rickshaws
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-lg text-gray-700 max-w-md mb-10 leading-relaxed">
              Empowering daily transport with{" "}
              <span className="font-semibold text-orange-500">
                eco-friendly electric vehicles
              </span>.
              Our rickshaws and scooters are engineered for{" "}
              <span className="font-semibold text-orange-500">
                durability, low maintenance, and smooth performance
              </span>{" "}
              in real-world conditions.
            </p>

            {/* CTA */}
            <Link href="/contact">
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 12px 30px rgba(250, 130, 0, 0.45)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-400 to-yellow-400
                   text-white px-10 py-4 rounded-xl font-semibold
                   shadow-lg transition-all"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center md:justify-end"
          >
            {/* Spotlight */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -inset-20 bg-gradient-to-tr
      from-orange-300 to-yellow-200
      opacity-25 rounded-full blur-3xl"
            />

            <img
              src="/image/rick4.png"
              alt="Electric Rickshaw"
              className="
      relative z-10
      w-[200%]              
      max-w-none          
      md:w-[200%]
      drop-shadow-2xl
    "
            />
          </motion.div>


        </div>

      </section>


      {/* STATS */}
      <section className=" bg-white text-black pt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-3xl md:text-4xl font-extrabold mb-12"
          >
            Our Impact
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
            className="bg-gray-800 rounded-3xl shadow-xl flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-700 overflow-hidden"
          >
            {[
              ['500+', 'Vehicles Sold'],
              ['50+', 'Cities Covered'],
              ['10K+', 'Happy Customers'],
            ].map((item, i) => (
              <div
                key={i}
                className="flex-1 p-10 flex flex-col justify-center items-center text-center"
              >
                <h3 className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">{item[0]}</h3>
                <p className="text-gray-300 font-medium text-lg">{item[1]}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ABOUT US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
              About <span className="text-indigo-600">Shandilya MedTech</span>
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              <span className="font-semibold text-gray-900">Shandilya MedTech</span> is dedicated to transforming healthcare technology with innovative solutions
              that improve patient care, efficiency, and accessibility. Our mission is to make modern medical devices and wellness tools reliable, easy to use, and
              sustainable for hospitals and clinics across the country.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a focus on <span className="text-indigo-600 font-semibold">quality, precision, and innovation</span>, our products are designed for long-lasting performance,
              low maintenance, and maximum impact. Join the growing community of healthcare professionals who trust <span className="font-semibold">Shandilya MedTech</span>
              for cutting-edge medical technology.
            </p>
          </motion.div>

          {/* Image */}
          <div className="relative flex flex-wrap gap-6 justify-center items-center">
            {images.map((img, index) => (
              <motion.img
                key={index}
                src={img.src}
                alt="Shandilya MedTech"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className={`
            ${img.size}
            ${img.rotate}
            rounded-3xl
            shadow-2xl
            transition-transform
            duration-500
          `}
              />
            ))}
          </div>

        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-[#f0f4f8] to-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
          >
            Why Choose <span className="text-blue-600">Shandaliya MedTech Infra Pvt. Ltd.</span>
          </motion.h2>

          <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
            Delivering smart, affordable, and eco-friendly solutions with advanced technology and reliable infrastructure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Eco-Friendly',
                desc: 'Zero-emission electric vehicles designed for sustainable urban transport.',
                icon: <FaLeaf className="text-green-500 w-10 h-10 mx-auto mb-4" />
              },
              {
                title: 'Affordable',
                desc: 'Cost-effective EVs that save you money on fuel and maintenance.',
                icon: <FaWallet className="text-yellow-500 w-10 h-10 mx-auto mb-4" />
              },
              {
                title: 'Smart Battery',
                desc: 'Long-lasting batteries with fast charging for uninterrupted journeys.',
                icon: <FaBatteryFull className="text-blue-500 w-10 h-10 mx-auto mb-4" />
              },
              {
                title: 'Advanced Tech',
                desc: 'Integrated smart features for safety, efficiency, and convenience.',
                icon: <FaMicrochip className="text-purple-500 w-10 h-10 mx-auto mb-4" />
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ amount: 0.3 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition relative overflow-hidden"
              >
                {/* Decorative Circle */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-tr from-blue-300 to-purple-400 rounded-full opacity-30 pointer-events-none"></div>

                {/* Icon */}
                {item.icon}
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* PRODUCTS */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative floating circles */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gray-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-gray-300 rounded-full opacity-15 blur-2xl"></div>
        <div className="absolute bottom-0 left-10 w-32 h-32 bg-gray-200 rounded-full opacity-15 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading with absolute button */}
          <div className="relative mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.3 }}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center"
            >
              Explore Our Electric Vehicles
            </motion.h2>

            <button
              onClick={() => window.location.href = '/products'}
              className="absolute top-0 right-0 px-6 py-2 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition"
            >
              View All
            </button>
          </div>

          {/* Product Cards Grid */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-10 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 25,
                ease: 'linear',
              }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              {[...products, ...products].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -6 }}
                  className={`${item.bg} min-w-[280px] md:min-w-[320px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer relative`}
                >
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-white text-gray-900 font-semibold px-3 py-1 rounded-full shadow text-sm z-10">
                    {item.badge}
                  </div>

                  {/* Image */}
                  <img
                    src={`/image/${item.img}`}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>









      {/* TESTIMONIALS */}
      <section className="py-24 bg-gradient-to-b from-orange-50 via-orange-100 to-orange-50 relative overflow-hidden">
        {/* Decorative floating shapes */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-orange-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-10 right-0 w-32 h-32 bg-yellow-200 rounded-full opacity-40 blur-2xl"></div>
        <div className="absolute bottom-0 left-10 w-32 h-32 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12"
          >
            What Our Customers Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Alice Johnson",
                text: "Amazing quality and performance. Highly recommended!",
                avatar: "/image/avatar1.jpg",
                role: "Customer",
              },
              {
                name: "Michael Lee",
                text: "Customer support was excellent, and delivery was fast!",
                avatar: "/image/avatar2.jpg",
                role: "Customer",
              },
              {
                name: "Sophia Brown",
                text: "The product exceeded my expectations. Will buy again!",
                avatar: "/image/avatar3.jpg",
                role: "Customer",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ amount: 0.3 }}
                className="bg-white p-8 rounded-3xl shadow-2xl border border-orange-200 relative"
              >
                {/* Decorative circle behind avatar */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-orange-200 rounded-full opacity-30 z-0"></div>

                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 relative z-10"
                />
                <p className="italic text-gray-700 mb-4">{t.text}</p>
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <span className="text-orange-500 text-sm">{t.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        {/* Bottom Corner Decorative Image */}
        <img
          src="/image/rick2.png"
          alt="Electric Rickshaw"
          className="hidden md:block absolute bottom-0 left-0 w-[380px]  pointer-events-none"
        />

        <div className="relative max-w-4xl mx-auto px-6 mr-6 text-center z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-3xl md:text-4xl font-extrabold mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4 text-left">
            {[
              [
                'What is the range of your electric rickshaws?',
                'Our rickshaws can travel up to 120 km on a single charge depending on load and terrain.',
              ],
              [
                'How long does it take to charge?',
                'Full charging takes approximately 6–8 hours using a standard 15A socket.',
              ],
              [
                'Do you offer warranty?',
                'Yes, we offer 1 year comprehensive warranty on all vehicles with optional extended plans.',
              ],
              [
                'Are spare parts easily available?',
                'Yes, we maintain a wide network of service centers and spare parts availability across cities.',
              ],
              [
                'Can I customize the vehicle?',
                'Yes, we offer limited customization options including color, seating, and accessories.',
              ],
            ].map(([q, a], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ amount: 0.3 }}
                className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <details className="group">
                  <summary className="font-semibold text-lg flex justify-between items-center list-none cursor-pointer">
                    {q}
                    <span className="ml-3 transition-transform duration-300 group-open:rotate-45 text-orange-500 font-bold text-xl">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-300 leading-relaxed">{a}</p>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-b from-[#f6f8fa] to-[#ffffff] overflow-hidden text-gray-900">
        {/* Floating blobs with soft gradients */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-80 h-80 opacity-30 rounded-full blur-3xl bg-gradient-to-tr from-blue-300 to-purple-300"
        />
        <motion.div
          animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 opacity-30 rounded-full blur-3xl bg-gradient-to-tr from-pink-300 to-orange-300"
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900"
          >
            Drive the Future Today
          </motion.h2>

          {/* Highlight under heading */}
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mb-6"></div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-700"
          >
            Explore our smart electric rickshaws, scooters, and bikes designed for efficiency, sustainability,
            and everyday comfort. Take the first step towards eco-friendly urban mobility with
            <span className="text-orange-500 font-semibold"> Shandaliya MedTech Infra Pvt. Ltd.</span>
          </motion.p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-12 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition"
              >
                Contact Us
              </motion.button>
            </Link>
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-gray-900 text-gray-900 px-12 py-4 rounded-xl font-semibold shadow-lg hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-400 hover:text-white transition"
              >
                Explore Products
              </motion.button>
            </Link>
          </div>
        </div>
      </section>



      <Footer />

    </div>
  );
}
