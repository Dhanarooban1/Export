import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Youtube, Linkedin, Instagram, Phone, ArrowRight, Calendar, MapPin, User, BookOpen, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from "../assets/Images/Logo.png";
import { XMarkIcon } from "@heroicons/react/24/solid";

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

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [meetingDetails, setMeetingDetails] = useState({
    title: "Upcoming Class Meeting",
    time: "2024-10-31 10:00 AM", // Add your meeting time here
    link: "https://meet.google.com/example-meet-link" // Replace with actual link
  });

  const handlePopupToggle = () => setIsPopupOpen(!isPopupOpen);



  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === achievementImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? achievementImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === achievementImages.length - 1 ? 0 : prev + 1
    );
  };



  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, Global Exports Inc",
      content: "The training provided by T. Rameshkumar transformed our export business.",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Sarah Johnson",
      role: "Entrepreneur",
      content: "Thanks to Lakshmi Academy, I successfully launched my export business.",
      image: "/api/placeholder/100/100"
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* <nav className="fixed top-0 left-0 z-50 w-full p-6 bg-gradient-to-br from-gray-900 to-gray-800 border-b border-gray-700 rounded-2xl backdrop-blur-md"> */}

      <nav className="fixed w-full  bg-gradient-to-b from-black to-gray-900   backdrop-blur-md z-50 border-b ">
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
              <span className="text-xl font-bold text-white">
                Lakshmi Academy
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className={`text-sm font-medium transition-colors ${activeSection === 'hero' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`} >Home</a>
              <a href="#about" className={`text-sm font-medium transition-colors ${activeSection === 'about' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>About</a>
              <a href="#features" className={`text-sm font-medium transition-colors ${activeSection === 'features' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>Features</a>
              <a href="#classes" className={`text-sm font-medium transition-colors ${activeSection === 'classes' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>Classes</a>
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
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              <h1 className="text-5xl sm:text-6xl font-bold text-black leading-tight">
                Master the Art of <span className="text-blue-600">International Trade</span>
              </h1>
              <p className="text-xl text-black">
                Join T. Rameshkumar's expert-led export training program with 15+ years of international trade excellence.
              </p>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-black text-lg">Don’t miss our upcoming session. Click below to view details and join.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePopupToggle}
                >
                  <button
                    onClick={() => setIsPopupOpen(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Open Calendar
                  </button>
                </motion.button>
              </div>

            </motion.div>
            <AnimatePresence>
              {isPopupOpen && (
                <motion.div
                  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                <motion.div
  className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden w-full max-w-3xl mx-4"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.8, opacity: 0 }}
  transition={{ type: "spring", stiffness: 300, damping: 25 }}
  style={{ paddingTop: "2rem" }} // Adjust top padding to prevent overlap
>
  <button
    onClick={() => setIsPopupOpen(false)}
    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none transition-colors z-10" // Add z-index
  >
    <XMarkIcon className="w-6 h-6" />
  </button>

  <iframe
    src="https://calendar.google.com/calendar/embed?src=dhanazx1%40gmail.com&ctz=Asia%2FKolkata"
    style={{ border: '0', paddingTop: '1rem' }} // Additional padding if needed
    width="100%"
    height="600"
    frameBorder="0"
    scrolling="no"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-b-lg"
  />
</motion.div>

                </motion.div>
              )}
            </AnimatePresence>

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
                      className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-blue-600' : 'bg-white/60'
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">Featured Programs</h2>
            <p className="text-blue-600 text-lg max-w-2xl mx-auto">
              Comprehensive export training programs designed for various professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Featured Program Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700"
            >

              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Export Documentation</h3>
              <p className="text-gray-400">Master international trade documentation and compliance</p>
            </motion.div>
            {/* Add more program cards similarly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                <Youtube className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">International Trade Strategies</h3>
              <p className="text-gray-400">
                Develop effective strategies for success in global markets.
              </p>
            </motion.div>

            {/* Course Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                <Linkedin className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Digital Marketing for Exporters</h3>
              <p className="text-gray-400">
                Learn how to leverage digital platforms for effective export marketing.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl text-blue-600 font-bold mb-4">Why Choose Lakshmi Academy?</h2>
            <p className="text-black">
              Discover why our academy stands out as a leader in international trade education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                <User className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Expert Instruction</h3>
              <p className="text-gray-400">
                Learn from industry veterans with extensive experience in international trade.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4" >Comprehensive Curriculum</h3>
              <p className="text-gray-400">
                Our courses cover all aspects of international trade, from basics to advanced strategies.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Flexible Scheduling</h3>
              <p className="text-gray-400">
                Choose from various course formats to fit your schedule and learning style.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Classes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Achievements</h2>
            <p className="text-black text-lg max-w-2xl mx-auto">
              Recognized excellence in international trade education and consulting
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-white mb-4">U TV Coimbatore Feature</h3>
                <p className="text-gray-400">Live program host sharing expert insights on export business (2015)</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-white mb-4">"Velaan Vaniga Ulagam" Column</h3>
                <p className="text-gray-400">Regular contributor since 2021, sharing expertise through "Yetrumathi Cheivathu Eppadi?"</p>
              </motion.div>
            </div>


            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Global Reach</h3>
                <p className="text-gray-400">Participants from USA, Australia, Germany, France, Malaysia, and Singapore</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Export Excellence</h3>
                <p className="text-gray-400">Successfully exporting premium products to America, England, and Malaysia since 2010</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Student Success Stories</h2>
            <p className="text- text-lg max-w-2xl mx-auto">
              Hear from our graduates who have transformed their export business journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
              >
                <p className="text-gray-300 mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Start Your Journey Today</h2>
            <p className="text-blue-600 text-lg max-w-2xl mx-auto">
              Take the first step towards international trade success
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto"
          >
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-3 rounded-full bg-white/5 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium"
              >
                Get Started
              </motion.button>
            </div>
          </motion.form>
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
