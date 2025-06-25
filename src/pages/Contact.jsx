import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Contact Us
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
