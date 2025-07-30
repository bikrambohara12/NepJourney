import React, { useState } from 'react';
import { FaPaperPlane, FaStar, FaHeart, FaComment, FaUser, FaEnvelope } from 'react-icons/fa';

const FeedbackSection = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      setRating(0);
    }, 3000);
  };

  return (
    <div className="py-16 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-pink-400 to-red-500 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Banner Section */}
      <div className="text-center mb-12 relative z-10">
        <div className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 text-white px-8 py-4 rounded-full shadow-2xl hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-500 cursor-pointer group">
          <div className="flex items-center space-x-3">
            <FaHeart className="text-2xl group-hover:animate-pulse" />
            <h2 className="text-3xl font-bold group-hover:text-yellow-100">Share Your Nepal Experience</h2>
            <FaHeart className="text-2xl group-hover:animate-pulse" />
          </div>
        </div>
        <p className="text-gray-300 text-lg mt-4 hover:text-white transition-colors duration-300">
          Help us improve and inspire other travelers with your feedback
        </p>
      </div>

      {/* Feedback Card */}
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-purple-500/20 group">
          
          {/* Success Message */}
          {isSubmitted && (
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/90 to-emerald-600/90 rounded-2xl flex items-center justify-center z-20 animate-pulse">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p>Your feedback has been sent successfully!</p>
              </div>
            </div>
          )}

          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 text-white mb-4">
                <FaComment className="text-2xl text-blue-400" />
                <h3 className="text-2xl font-bold">Send us your feedback</h3>
                <FaComment className="text-2xl text-blue-400" />
              </div>
              
              {/* Star Rating */}
              <div className="flex justify-center space-x-2 mb-6">
                <span className="text-white mr-3">Rate your experience:</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`text-2xl cursor-pointer transition-all duration-200 hover:scale-125 ${
                      star <= (hoveredRating || rating)
                        ? 'text-yellow-400'
                        : 'text-gray-400'
                    }`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                  />
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="relative group">
                  <FaUser className="absolute left-4 top-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 hover:bg-white/15 transition-all duration-300"
                  />
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <FaEnvelope className="absolute left-4 top-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 hover:bg-white/15 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="relative group">
                <FaComment className="absolute left-4 top-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share your experience, suggestions, or any feedback..."
                  required
                  rows="5"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 hover:bg-white/15 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 text-white font-bold py-4 px-8 rounded-full shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 group"
                >
                  <span>Send Feedback</span>
                  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="flex justify-center mt-8 space-x-4">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce animation-delay-400"></div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;