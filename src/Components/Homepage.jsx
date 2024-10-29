import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Youtube, Linkedin, Instagram, Phone, ArrowRight, Calendar, MapPin, User, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from "../assets/Images/Logo.png";

const Homepage = () => {

  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const achievementImages = [
    Logo,
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
    ];



  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === achievementImages.length - 1? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0? achievementImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === achievementImages.length - 1? 0 : prev + 1
    );
  };


  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed w-full bg-white backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center space-x-3" 
      >
        <img 
          src={Logo} // replace with the path to your logo image
          alt="Lakshmi Academy Logo"
          className="h-8 w-8" // Adjust the height and width as needed
        />
        
     
        <span className="text-xl font-bold text-blue-600">
          Lakshmi Academy
        </span>
      </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className={`text-sm font-medium transition-colors ${activeSection === 'hero'? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`} >Home</a>
              <a href="#about" className={`text-sm font-medium transition-colors ${activeSection === 'about'? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>About</a>
              <a href="#features" className={`text-sm font-medium transition-colors ${activeSection === 'features'? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>Features</a>
              <a href="#classes" className={`text-sm font-medium transition-colors ${activeSection === 'classes'? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>Classes</a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen?<X className="w-6 h-6" />:<Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                <a href="#hero" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">Home</a>
                <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">About</a>
                <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">Features</a>
                <a href="#classes" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">Classes</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                Master the Art of <span className="text-blue-600">International Trade</span>
              </h1>
              <p className="text-xl text-gray-100">
                Transform your career with expert-led export training from industry veterans.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium inline-flex items-center gap-2"
                >
                  Start Learning <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-200 text-gray-100 px-8 py-3 rounded-full text-lg font-medium"
                >
                    
                  View Courses
                </motion.button>
              </div>
            </motion.div>
            
            {/* Achievement Carousel */}
           

<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  className="relative rounded-2xl overflow-hidden shadow-2xl"
>
  <div className="relative aspect-[4/4]">
    <AnimatePresence mode="wait">
      <motion.img
        key={currentImageIndex}
        src={achievementImages[currentImageIndex]}
        alt={`Achievement ${currentImageIndex + 1}`}
      className="w-full h-full object-fit object-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </AnimatePresence>
    
    {/* Navigation Buttons */}
    <button
      onClick={handlePrevImage}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
    >
      <ChevronLeft className="w-6 h-6 text-gray-800" />
    </button>
    <button
      onClick={handleNextImage}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
    >
      <ChevronRight className="w-6 h-6 text-gray-800" />
    </button>
    
    {/* Dots Indicator */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {achievementImages.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentImageIndex(index)}
          className={`w-2 h-2 rounded-full transition-colors ${
            index === currentImageIndex ? 'bg-blue-600' : 'bg-white/60'
          }`}
        />
      ))}
    </div>
  </div>
</motion.div>

          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-600">
              Since 2021, I've been sharing my knowledge in the "Yetrumathi Cheivathu Eppadi?" column
              of "Velaan Vaniga Ulagam" magazine, answering public questions and offering insights on export business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">15+ Years Experience</h3>
              <p className="text-gray-600">
                Proven track record in international trade consulting and training.
              </p>
            </motion.div>

            {/* Achievement Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Trainer</h3>
              <p className="text-gray-600">
                Specialized knowledge in export procedures and regulations.
              </p>
            </motion.div>

            {/* Award Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Export Consultant</h3>
              <p className="text-gray-600">
                Recognized for outstanding contributions to the field of international trade.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Lakshmi Academy</h2>
            <p className="text-gray-600">
              Lakshmi Academy is dedicated to empowering individuals and businesses in the realm of international trade. Our comprehensive training programs are designed to equip learners with the knowledge and skills necessary to succeed in the global marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p className="text-gray-600">
                To bridge the gap between local businesses and global markets through innovative education and practical training.
              </p>
            </motion.div>

            {/* About Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <img src="/api/placeholder/800/600" alt="Academy Image" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Lakshmi Academy?</h2>
            <p className="text-gray-600">
              Discover why our academy stands out as a leader in international trade education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4">
                <User className="w-8 h-8 text-blue-600 mb-2" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Instruction</h3>
              <p className="text-gray-600">
                Learn from industry veterans with extensive experience in international trade.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4">
                <BookOpen className="w-8 h-8 text-blue-600 mb-2" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Curriculum</h3>
              <p className="text-gray-600">
                Our courses cover all aspects of international trade, from basics to advanced strategies.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4">
                <Calendar className="w-8 h-8 text-blue-600 mb-2" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Choose from various course formats to fit your schedule and learning style.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Courses</h2>
            <p className="text-gray-600">
              Explore our comprehensive range of classes designed to enhance your skills in international trade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Course Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4">
                <Mail className="w-8 h-8 text-blue-600 mb-2" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Export Documentation</h3>
              <p className="text-gray-600">
                Master the art of preparing accurate and compliant export documents.
              </p>
            </motion.div>

            {/* Course Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4">
                <Youtube className="w-8 h-8 text-blue-600 mb-2" />
              </div>
              <h3 className="text-xl font-semibold mb-2">International Trade Strategies</h3>
              <p className="text-gray-600">
                Develop effective strategies for success in global markets.
              </p>
            </motion.div>

            {/* Course Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4">
                <Linkedin className="w-8 h-8 text-blue-600 mb-2" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Digital Marketing for Exporters</h3>
              <p className="text-gray-600">
                Learn how to leverage digital platforms for effective export marketing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex flex-wrap justify-center space-x-4">
              <a href="#" className="text-white hover:text-blue-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-500 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <div className="text-center text-sm">
              &copy; 2024 Lakshmi Academy. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
