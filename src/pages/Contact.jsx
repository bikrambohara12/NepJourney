import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-slate-800 text-white p-6 pt-32 font-sans">
      <div className="w-full max-w-6xl mx-auto">

        {/* Header */}
        <div className="w-full mb-10 text-center">
          <h1 className="text-4xl font-bold mb-4 text-amber-50">Contact Us</h1>
          <p className="text-white max-w-2xl mx-auto">
            Got any questions about the product or scaling on our platform? We’re here to help.
            Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-b from-blue-400 to-blue-200 rounded-2xl p-8 text-black transition-transform transform hover:scale-105 shadow-xl/30">
            <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
            <div className="mb-4">
              <p className="font-semibold">Visit us</p>
              <p>Come say hello at our office HQ.<br />67 Wisteria Way Croydon South VIC 3136 AU</p>
              <p className="mt-2">Or visit our Nepal office:<br />Kathmandu, Nepal</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Chat to us</p>
              <p>Our friendly team is here to help.<br />nepjourney@gmail.com</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Call us</p>
              <p>Mon-Fri from 8am to 5pm<br />+977-9868886773</p>
            </div>
            <div className="mt-6">
              <p className="font-semibold mb-2">Social media</p>
              <div className="flex gap-4 text-xl">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-yellow-400 transition-colors"><FaFacebookF /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-yellow-400 transition-colors"><FaLinkedinIn /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-yellow-400 transition-colors"><FaTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-yellow-400 transition-colors"><FaInstagram /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border p-3 rounded-md w-full" />
              <input type="text" placeholder="Last Name" className="border p-3 rounded-md w-full" />
            </div>
            <input type="email" placeholder="nepjourney@gmail.com" className="border p-3 rounded-md w-full" />
            <div className="flex gap-2 items-center">
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <select className="border p-3 rounded-md w-full sm:w-auto">
                  <option>NE</option>
                  <option>IN</option>
                  <option>US</option>
                  <option>UK</option>
                  <option>AU</option>
                </select>
                <input type="text" placeholder="+977-9868886773" className="border p-3 rounded-md w-full" />
              </div>
            </div>
            <textarea placeholder="Leave us a message..." className="border p-5 rounded-md w-full h-32"></textarea>
            <div className="flex items-start gap-2">
              <input type="checkbox" id="consent" />
              <label htmlFor="consent" className="text-sm">
                I'd like to receive more information about company. I understand and agree to the{" "}
                <a href="#" className="underline text-blue-400">Privacy Policy</a>
              </label>
            </div>
            <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* 3 Info Cards Below */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="text-black rounded-2xl p-6 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl/200 hover:scale-105 ">
            <h3 className="font-bold text-lg mb-2">Customer Support</h3>
            <p>Our support team is available around the clock to address any concerns or queries you may have.</p>
          </div>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-2xl p-6 shadow-xl/200 hover:scale-105">
            <h3 className="font-bold text-lg mb-2">Feedback and Suggestions</h3>
            <p>We value your feedback and are continuously working to improve Snappy. Your input is crucial in shaping the future of Snappy.</p>
          </div>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-2xl p-6 shadow-xl/200 hover:scale-105">
            <h3 className="font-bold text-lg mb-2">Media Inquiries</h3>
            <p>For media-related questions or press inquiries, please contact us at nepjourney@gmail.com.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
