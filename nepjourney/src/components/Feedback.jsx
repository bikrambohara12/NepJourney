
import React, { useState } from "react";

function Feedback() {
  const [result, setResult] = useState("");
  const [message, setMessage] = useState(""); 
  const [showMessage, setShowMessage] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "bf10fa30-25c7-4e3b-a5c3-27e2c1b92328");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setMessage(" Feedback submitted successfully!");
      event.target.reset();
    } else {
      setMessage("Failed to submit feedback. Please try again.");
    }

    setResult("");
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 text-gray-900 px-4 sm:px-6 md:px-10 pt-20 pb-14 font-sans">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="w-full mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">Feedback</h1>
          <p className="text-white max-w-2xl mx-auto">
            We value your feedback! Please share your thoughts and help us improve our service.
          </p>
        </div>

        {/* Feedback Form */}
        <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="first_name" 
              placeholder="First Name" 
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
            <input 
              type="text" 
              name="last_name" 
              placeholder="Last Name" 
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />

          <textarea 
            name="feedback" 
            placeholder="Share your feedback..." 
            className="border p-5 rounded-md w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required
          ></textarea>

          <button 
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition transform hover:scale-105 w-full font-semibold"
          >
            {result ? result : "Submit Feedback"}
          </button>

          {/* Feedback Message */}
          {showMessage && (
            <p className="text-center mt-4 text-lg font-medium text-green-600 transition-opacity duration-300">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Feedback;
