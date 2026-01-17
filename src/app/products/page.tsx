'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  FiBatteryCharging,
  FiTrendingUp,
  FiPackage,
  FiShield,
  FiArrowRight
} from 'react-icons/fi';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GiElectric } from 'react-icons/gi';
import { FaCarSide } from 'react-icons/fa';



export default function ProductsSection() {
const products = [
  {
    id: 1,
    name: 'E-Rickshaw Pro',
    category: 'E-Rickshaw',
    image: '/image/ricks1.png',
    range: '120 km',
    speed: '25 km/h',
    capacity: '400 kg',
    warranty: '2 Years',
  },
  {
    id: 2,
    name: 'E-Rickshaw Plus',
    category: 'E-Rickshaw',
    image: '/image/ricks2.png',
    range: '110 km',
    speed: '25 km/h',
    capacity: '380 kg',
    warranty: '2 Years',
  },
  {
    id: 3,
    name: 'Cargo E-Rickshaw',
    category: 'E-Rickshaw',
    image: '/image/ricks3.png',
    range: '100 km',
    speed: '22 km/h',
    capacity: '500 kg',
    warranty: '2 Years',
  },
  {
    id: 4,
    name: 'Passenger E-Rickshaw',
    category: 'E-Rickshaw',
    image: '/image/ricks1.png',
    range: '130 km',
    speed: '25 km/h',
    capacity: '420 kg',
    warranty: '3 Years',
  },
  {
    id: 5,
    name: 'Heavy Duty E-Rickshaw',
    category: 'E-Rickshaw',
    image: '/image/ricks4.png',
    range: '115 km',
    speed: '24 km/h',
    capacity: '550 kg',
    warranty: '3 Years',
  },

  {
    id: 6,
    name: 'Urban E-Scooter',
    category: 'E-Scooter',
    image: '/image/sc1.png',
    range: '90 km',
    speed: '50 km/h',
    capacity: '150 kg',
    warranty: '3 Years',
  },
  {
    id: 7,
    name: 'Urban E-Scooter Max',
    category: 'E-Scooter',
    image: '/image/sc2.png',
    range: '110 km',
    speed: '55 km/h',
    capacity: '160 kg',
    warranty: '3 Years',
  },
  {
    id: 8,
    name: 'City Rider',
    category: 'E-Scooter',
    image: '/image/sc3.png',
    range: '95 km',
    speed: '50 km/h',
    capacity: '150 kg',
    warranty: '2 Years',
  },
  {
    id: 9,
    name: 'Commuter Pro',
    category: 'E-Scooter',
    image: '/image/sc4.png',
    range: '105 km',
    speed: '55 km/h',
    capacity: '170 kg',
    warranty: '3 Years',
  },
  {
    id: 10,
    name: 'Lite E-Scooter',
    category: 'E-Scooter',
    image: '/image/sc5.png',
    range: '80 km',
    speed: '45 km/h',
    capacity: '140 kg',
    warranty: '2 Years',
  },

  // ================= CARGO =================
  {
    id: 11,
    name: 'Cargo Mini',
    category: 'Cargo',
    image: '/image/cr1.png',
    range: '100 km',
    speed: '35 km/h',
    capacity: '600 kg',
    warranty: '2 Years',
  },
  {
    id: 12,
    name: 'Cargo Max',
    category: 'Cargo',
    image: '/image/cr2.png',
    range: '120 km',
    speed: '40 km/h',
    capacity: '800 kg',
    warranty: '3 Years',
  },
  {
    id: 13,
    name: 'Delivery Pro',
    category: 'Cargo',
    image: '/image/cr3.png',
    range: '110 km',
    speed: '38 km/h',
    capacity: '700 kg',
    warranty: '3 Years',
  },
  {
    id: 14,
    name: 'Fleet Carrier',
    category: 'Cargo',
    image: '/image/cr4.png',
    range: '130 km',
    speed: '40 km/h',
    capacity: '900 kg',
    warranty: '3 Years',
  },
  {
    id: 15,
    name: 'LoadMaster EV',
    category: 'Cargo',
    image: '/image/cr.png',
    range: '125 km',
    speed: '42 km/h',
    capacity: '1000 kg',
    warranty: '4 Years',
  },

  {
    id: 16,
    name: 'E-Auto Smart',
    category: 'E-Auto',
    image: '/image/au1.png',
    range: '140 km',
    speed: '45 km/h',
    capacity: '450 kg',
    warranty: '3 Years',
  },
  {
    id: 17,
    name: 'E-Auto Passenger',
    category: 'E-Auto',
    image: '/image/au2.png',
    range: '150 km',
    speed: '45 km/h',
    capacity: '480 kg',
    warranty: '3 Years',
  },
  {
    id: 18,
    name: 'E-Auto Cargo',
    category: 'E-Auto',
    image: '/image/au3.png',
    range: '135 km',
    speed: '42 km/h',
    capacity: '550 kg',
    warranty: '3 Years',
  },
  {
    id: 19,
    name: 'E-Auto Pro Max',
    category: 'E-Auto',
    image: '/image/au4.png',
    range: '160 km',
    speed: '48 km/h',
    capacity: '600 kg',
    warranty: '4 Years',
  },

  {
    id: 20,
    name: 'Smart EV One',
    category: 'Premium',
    image: '/image/ricks2.png',
    range: '140 km',
    speed: '65 km/h',
    capacity: '200 kg',
    warranty: '4 Years',
  },
  {
    id: 21,
    name: 'Smart EV Plus',
    category: 'Premium',
    image: '/image/sc1.png',
    range: '150 km',
    speed: '70 km/h',
    capacity: '220 kg',
    warranty: '4 Years',
  },
  {
    id: 22,
    name: 'Executive EV',
    category: 'Premium',
    image: '/image/ricks4.png',
    range: '160 km',
    speed: '75 km/h',
    capacity: '230 kg',
    warranty: '5 Years',
  },
  {
    id: 23,
    name: 'NextGen EV',
    category: 'Premium',
    image: '/image/ricks1.png',
    range: '170 km',
    speed: '80 km/h',
    capacity: '240 kg',
    warranty: '5 Years',
  },
  {
    id: 24,
    name: 'Future EV X',
    category: 'Premium',
    image: '/image/sc3.png',
    range: '180 km',
    speed: '85 km/h',
    capacity: '250 kg',
    warranty: '5 Years',
  },
  {
    id: 25,
    name: 'Future EV Z',
    category: 'Premium',
    image: '/image/cr4.png',
    range: '190 km',
    speed: '90 km/h',
    capacity: '260 kg',
    warranty: '5 Years',
  },
  {
    id: 26,
    name: 'Elite EV Ultra',
    category: 'Premium',
    image: '/image/au1.png',
    range: '200 km',
    speed: '95 km/h',
    capacity: '280 kg',
    warranty: '6 Years',
  },
  {
    id: 27,
    name: 'Signature EV',
    category: 'Premium',
    image: '/image/cr.png',
    range: '210 km',
    speed: '100 km/h',
    capacity: '300 kg',
    warranty: '6 Years',
  },
];


  const categories = ['All', 'E-Rickshaw', 'E-Scooter','E-Auto'];
  const [active, setActive] = useState('All');

  const filteredProducts =
    active === 'All'
      ? products
      : products.filter((p) => p.category === active);

return (
  <>  
  <Navbar />
  <section className="relative py-36 bg-gradient-to-b from-[#f4f6f8] via-white to-[#f4f6f8]">
    <div className="max-w-7xl mx-auto px-6">

  {/* Header */}
    <div className="relative text-center mb-28 overflow-hidden">

      {/* Left Top Floating Blob */}
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-0 left-0 w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl -z-20"
      />

      {/* Right Bottom Floating Blob */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400/30 rounded-full blur-3xl -z-20"
      />

      {/* Central Soft Glow */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], rotate: [0, 2, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 -z-10 flex justify-center items-center"
      >
        <div className="w-[520px] h-[220px] bg-emerald-300/20 blur-[140px] rounded-full" />
      </motion.div>

      {/* Badge */}
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 mb-6 px-6 py-2.5 rounded-full
                   text-sm font-semibold text-emerald-700 bg-emerald-100
                   shadow-sm"
      >
        <FiBatteryCharging className="text-base" />
        Our Product Range
      </motion.span>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight"
      >
        Electric Vehicles <br />
        <span className="text-emerald-600">Engineered for India</span>
      </motion.h2>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-20 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="text-gray-600 mt-8 max-w-2xl mx-auto text-lg leading-relaxed"
      >
        Reliable, efficient, and performance-driven EVs built for real-world
        commercial and personal use.
      </motion.p>

      {/* Floating EV Icons */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 20, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-10 left-10 text-emerald-400 text-5xl opacity-50"
      >
        <FaCarSide />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 right-10 text-emerald-300 text-6xl opacity-40"
      >
        <GiElectric />
      </motion.div>
    </div>
  


      {/* Filters */}
      <div className="flex justify-center gap-5 mb-24 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
              ${
                active === cat
                  ? 'bg-gray-900 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="group bg-white rounded-[36px] overflow-hidden
                         shadow-[0_25px_80px_rgba(0,0,0,0.12)]
                         hover:-translate-y-3 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />

                <span className="absolute top-6 left-6 px-4 py-1.5 text-xs font-semibold
                                 rounded-full bg-white text-gray-900 shadow">
                  {product.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  Built for daily operations with strong chassis, optimized
                  battery life, and low maintenance cost.
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-6 mb-10 text-sm">
                  <div className="flex items-center gap-3 text-gray-700">
                    <FiBatteryCharging className="text-emerald-600 text-lg" />
                    {product.range} Range
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <FiTrendingUp className="text-emerald-600 text-lg" />
                    {product.speed} Speed
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <FiPackage className="text-emerald-600 text-lg" />
                    {product.capacity} Load
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <FiShield className="text-emerald-600 text-lg" />
                    {product.warranty} Warranty
                  </div>
                </div>

                {/* CTA */}
                <Link href="/contact">
  <button
    className="w-full inline-flex items-center justify-center gap-2
               px-6 py-3 text-sm font-semibold rounded-full
               bg-gray-900 text-white hover:bg-gray-800
               transition shadow-lg"
  >
    View Full Specifications
    <FiArrowRight />
  </button>
</Link>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

    </div>
  </section>
  <Footer/>
  </>
);


}
