import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from "../assets/Images/Logo.png";

const Test = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const achievementImages = [Logo, "/api/placeholder/800/600", "/api/placeholder/800/600"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => prev === achievementImages.length - 1 ? 0 : prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center space-x-3">
              <img src={Logo} alt="Lakshmi Academy Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-blue-600">Lakshmi Academy</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="text-sm font-medium text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600">About</a>
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600">Features</a>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-4 py-2 rounded-full">
                Get Started
              </motion.button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 hover:text-blue-600">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-8">
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-black">
                Master the Art of <span className="text-blue-600">International Trade</span>
              </h1>
              <p className="text-xl text-gray-700">
                Join T. Rameshkumar's expert-led export training program with 15+ years of international trade excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-full">
                  Start Learning <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-full">
                  View Courses
                </motion.button>
              </div>
            </motion.div>

            {/* Achievement Carousel */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="relative shadow-md rounded-lg overflow-hidden">
              <div className="relative aspect-[4/4]">
                <AnimatePresence mode="wait">
                  <motion.img key={currentImageIndex} src={achievementImages[currentImageIndex]} alt={`Achievement ${currentImageIndex + 1}`} className="w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} />
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? achievementImages.length - 1 : prev - 1))} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button onClick={() => setCurrentImageIndex((prev) => (prev === achievementImages.length - 1 ? 0 : prev + 1))} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Lakshmi Academy?</h2>
            <p className="text-gray-600">Discover why our academy stands out as a leader in international trade education.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Instruction</h3>
              <p className="text-gray-600">Learn from industry veterans with extensive experience in international trade.</p>
            </motion.div>

            {/* Repeat for other features */}
          </div>
        </div>
      </section>
      {/* Repeat similar sections for more content */}
    </div>
  );
};

export default Test;
