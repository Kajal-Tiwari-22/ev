
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaLightbulb, FaHandsHelping, FaShieldAlt, FaRocket } from 'react-icons/fa';
import { FaBullseye, FaEye } from 'react-icons/fa';

export default function AboutUs() {
  const values = [
    {
      title: 'Integrity',
      description: 'We operate with transparency and honesty in every decision.',
      icon: <FaShieldAlt className="w-8 h-8 text-orange-500 mx-auto mb-4" />,
    },
    {
      title: 'Innovation',
      description: 'Continuous improvement drives our engineering and design.',
      icon: <FaLightbulb className="w-8 h-8 text-orange-500 mx-auto mb-4" />,
    },
    {
      title: 'Reliability',
      description: 'Our products are built for performance and longevity.',
      icon: <FaRocket className="w-8 h-8 text-orange-500 mx-auto mb-4" />,
    },
    {
      title: 'Customer First',
      description: 'Every solution starts with real user needs.',
      icon: <FaHandsHelping className="w-8 h-8 text-orange-500 mx-auto mb-4" />,
    },
  ];
  return (
    <>
      <Navbar />

      <section className="relative py-40 overflow-hidden bg-gradient-to-br from-[#f9fafb] via-[#f5f6f8] to-[#eef1f5]">

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(90deg, #000 1px, transparent 1px), linear-gradient(#000 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* BACKGROUND BLOBS */}
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-orange-400/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] bg-blue-400/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] bg-purple-400/10 rounded-full blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* ================= HERO ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-center mb-32"
          >
            <div>
              {/* Company Name */}
              {/* Company Name */}
              <h2 className="text-4xl md:text-4xl font-extrabold tracking-widest text-orange-600 uppercase mb-4">
                Shandilya MedTech
              </h2>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Ready. Set. <br />
                <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Innovate.
                </span>
              </h1>


              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                We design reliable electric mobility solutions that empower businesses,
                drivers, and communities with performance-driven engineering and
                long-term value.
              </p>
            </div>


            <div className="flex justify-center">
              <Image
                src="/image/rick.png"
                alt="About Illustration"
                width={520}
                height={320}
                className="rounded-3xl "
              />
            </div>
          </motion.div>

          {/* ================= WHO WE ARE ================= */}
          <div className="relative mb-36">
            {/* Section background */}
            <div className="absolute inset-0  rounded-[60px]" />

            <div className="relative max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  {
                    title: 'Who We Are',
                    desc: 'Shandilya MedTech is an innovation-driven electric mobility company focused on practical engineering, affordability, and long-term performance.',
                    accent: 'from-blue-500 to-cyan-500',
                  },
                  {
                    title: 'Our Manifesto',
                    desc: 'We believe electric vehicles must be reliable, serviceable, and designed for real Indian conditions—not just specifications.',
                    accent: 'from-emerald-500 to-green-500',
                  },
                  {
                    title: 'Our Strength',
                    desc: 'Strong after-sales support, durable build quality, and transparent pricing set us apart in the EV ecosystem.',
                    accent: 'from-violet-500 to-purple-500',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: i * 0.15, duration: 0.7 }}
                    className="group relative rounded-[32px] p-10 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-500"
                  >
                    {/* Vertical accent bar */}
                    <div
                      className={`absolute left-0 top-8 bottom-8 w-1 rounded-full bg-gradient-to-b ${item.accent}`}
                    />

                    {/* Floating accent glow */}
                    <div
                      className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.accent} opacity-10 blur-[80px] group-hover:opacity-20 transition`}
                    />

                    <h3 className="text-2xl font-extrabold text-gray-900 mb-5">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {item.desc}
                    </p>

                    {/* Bottom line */}
                    <div
                      className={`mt-8 w-12 h-1 rounded-full bg-gradient-to-r ${item.accent}`}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>


          {/* ================= IMAGE + CONTENT ================= */}
          <div className="relative mb-36">
            {/* Soft section background */}
            <div className="absolute inset-0 " />

            <div className="relative grid md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto px-6">

              {/* IMAGE BLOCK */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                {/* Glow behind image */}
                <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/20 via-emerald-500/10 to-transparent rounded-[40px] blur-2xl opacity-70 group-hover:opacity-100 transition" />

                <Image
                  src="/image/rick3.png"
                  alt="Industries We Serve"
                  width={520}
                  height={380}
                  className="relative rounded-[32px]  ring-1 ring-black/5"
                />
              </motion.div>

              {/* CONTENT BLOCK */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                {/* Section label */}
                <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold text-emerald-700 bg-emerald-100">
                  Impact Areas
                </span>

                <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Industries We <span className="text-emerald-600">Empower</span>
                </h2>

                <p className="text-gray-600 leading-relaxed mb-5 max-w-xl">
                  From last-mile delivery and public transport to small businesses and
                  fleet operators, our electric vehicles support diverse industries
                  across India.
                </p>

                <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
                  Each product is engineered to reduce downtime, improve operational
                  efficiency, and increase daily earnings.
                </p>

                {/* Industry pills */}
                <div className="flex flex-wrap gap-3">
                  {[
                    'Last-Mile Delivery',
                    'Public Transport',
                    'Fleet Operators',
                    'Small Businesses',
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm font-medium rounded-full bg-white shadow-md border border-gray-100 text-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>


          {/* ================= STATS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative rounded-3xl p-16 mb-36 text-center
             bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-blue-500/10" />

            <div className="relative z-10 grid md:grid-cols-3 gap-12">
              {[
                ['Quality First', 'Built with durable components & tested reliability'],
                ['Customer Support', 'Dedicated assistance before & after purchase'],
                ['Future Ready', 'Focused on scalable & sustainable EV solutions'],
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-3xl font-bold text-orange-500 mb-3">
                    {item[0]}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {item[1]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>


          {/* ================= MISSION & VISION ================= */}


          <div className="relative mt-36 grid md:grid-cols-2 gap-12">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-[40px] shadow-2xl p-12 bg-gradient-to-br from-orange-50 to-orange-200 hover:scale-105 transition-transform"
            >
              {/* Decorative Background Icon */}
              <FaBullseye className="absolute -top-16 -right-16 w-48 h-48 text-orange-300 opacity-20 rotate-[20deg]" />

              {/* Heading */}
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 relative z-10">
                Our <span className="text-orange-500">Mission</span>
              </h2>

              {/* Decorative line */}
              <div className="w-16 h-1 bg-orange-500 rounded-full mb-6 relative z-10"></div>

              <p className="text-gray-700 leading-relaxed mb-4 relative z-10">
                Accelerate sustainable mobility by delivering electric vehicles that are efficient, durable, and designed for real-world usage across India.
              </p>
              <p className="text-gray-700 leading-relaxed relative z-10">
                Focused on long-term reliability, simplified servicing, and cost-effective ownership for drivers and fleet operators.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-[40px] shadow-2xl p-12 bg-gradient-to-br from-blue-50 to-blue-200 hover:scale-105 transition-transform"
            >
              {/* Decorative Background Icon */}
              <FaEye className="absolute -top-16 -left-16 w-48 h-48 text-blue-300 opacity-20 rotate-[-20deg]" />

              {/* Heading */}
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 relative z-10">
                Our <span className="text-blue-500">Vision</span>
              </h2>

              {/* Decorative line */}
              <div className="w-16 h-1 bg-blue-500 rounded-full mb-6 relative z-10"></div>

              <p className="text-gray-700 leading-relaxed mb-4 relative z-10">
                Become a trusted electric mobility brand that empowers communities, reduces environmental impact, and creates sustainable livelihoods.
              </p>
              <p className="text-gray-700 leading-relaxed relative z-10">
                Envision cities powered by clean, smart, and accessible electric transportation solutions.
              </p>
            </motion.div>
          </div>


          {/* ================= CORE VALUES ================= */}
          <section className="relative mt-40 overflow-hidden">
            {/* Decorative background blobs */}
            <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-green-400/20 rounded-full blur-[140px]" />
            <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[140px]" />

            <div className="relative max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16">
                Our Core Values
              </h2>

              <div className="grid md:grid-cols-4 gap-12">
                {values.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: i * 0.2, duration: 0.8 }}
                    className="relative bg-gray-800 rounded-3xl p-10 shadow-2xl text-center hover:scale-105 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-transform duration-500"
                  >
                    {/* Icon Circle */}
                    <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 rounded-full bg-gradient-to-tr from-green-400 to-blue-400 text-white text-2xl shadow-lg">
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>

                    {/* Accent bar at bottom */}
                    <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mt-6 mx-auto" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <div className="relative mt-20 overflow-hidden">

            {/* BASE BACKGROUND */}
            <div className="absolute inset-0" />

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">

              {/* TITLE */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-3xl md:text-4xl font-extrabold text-center mb-20 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent"
              >
                Life at Shandilya MedTech
              </motion.h2>



              {/* SLIDER */}
              <div className="relative overflow-hidden">
                <motion.div
                  className="flex gap-12"
                  animate={{ x: ['0%', '-50%'] }}
                  transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: 'linear',
                  }}
                >
                  {[
                    '/image/user2.jpg',
                    '/image/about1.png',
                    '/image/about2.png',
                    '/image/about3.png',
                    '/image/about4.png',
                    '/image/about5.png',
                    '/image/about6.png',
                    '/image/about7.png',

                    '/image/user1.jpg',
                  ].map((img, i) => (
                    <div
                      key={i}
                      className="min-w-[360px] h-[360px] rounded-[2.5rem] overflow-hidden
            shadow-[0_30px_70px_rgba(0,0,0,0.28)]
            backdrop-blur-sm"
                    >
                      <img
                        src={img}
                        alt="Company culture"
                        className="w-full h-full object-cover
              hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}

                  {/* DUPLICATE FOR CONTINUOUS LOOP */}
                  {[
                    '/image/user2.jpg',
                    '/image/about1.jpg',
                    '/image/about2.jpg',
                    '/image/about3.jpg',
                    '/image/about4.jpg',
                    '/image/about5.jpg',
                    '/image/about6.jpg',
                    '/image/about7.jpg',

                    '/image/user1.jpg',
                  ].map((img, i) => (
                    <div
                      key={`dup-${i}`}
                      className="min-w-[360px] h-[360px] rounded-[2.5rem] overflow-hidden
            shadow-[0_30px_70px_rgba(0,0,0,0.22)]
            backdrop-blur-sm"
                    >
                      <img
                        src={img}
                        alt="Company culture"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>

            </div>
          </div>




        </div>
      </section>

      <Footer />
    </>
  );
}



