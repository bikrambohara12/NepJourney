"use client"

import { useState } from "react"
import {
  FaMapMarkedAlt,
  FaUserTie,
  FaCalendarCheck,
  FaPhoneAlt,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendar,
  FaUsers,
} from "react-icons/fa"
import { BsStars } from "react-icons/bs"

const tourData = [
  {
    id: 1,
    image: "./home.jpg",
    days: "7 Days / 6 Nights",
    location: "Himachal Pradesh - India",
    title: "Discover Spiti Valley 7D/6N Tour Package",
    isNew: true,
    originalPrice: "₹25,000",
    discountedPrice: "₹20,999",
    save: "₹4,001",
  },
  {
    id: 2,
    image: "./home.jpg",
    days: "5 Days / 4 Nights",
    location: "Himachal Pradesh - India",
    title: "Chandigarh to Chitkul : 5 days Spiti Itinerary",
    isNew: true,
    originalPrice: "₹27,999",
    discountedPrice: "₹21,999",
    save: "₹6,000",
  },
  {
    id: 3,
    image: "/home.jpg",
    days: "7 Days / 6 Nights",
    location: "Ladakh - India",
    title: "7 days Leh Ladakh road trip with Turtuk",
    isNew: true,
    originalPrice: "₹38,999",
    discountedPrice: "₹26,999",
    save: "₹12,000",
  },
  {
    id: 4,
    image: "/home.jpg",
    days: "7 Days / 6 Nights",
    location: "Ladakh - India",
    title: "7 days Leh Ladakh road trip with Turtuk",
    isNew: true,
    originalPrice: "₹38,999",
    discountedPrice: "₹26,999",
    save: "₹12,000",
  },
  {
    id: 5,
    image: "/home.jpg",
    days: "7 Days / 6 Nights",
    location: "Ladakh - India",
    title: "7 days Leh Ladakh road trip with Turtuk",
    isNew: true,
    originalPrice: "₹38,999",
    discountedPrice: "₹26,999",
    save: "₹12,000",
  },
  {
    id: 6,
    image: "/home.jpg",
    days: "7 Days / 6 Nights",
    location: "Ladakh - India",
    title: "7 days Leh Ladakh road trip with Turtuk",
    isNew: true,
    originalPrice: "₹38,999",
    discountedPrice: "₹26,999",
    save: "₹12,000",
  },
  {
    id: 7,
    image: "/home.jpg",
    days: "7 Days / 6 Nights",
    location: "Ladakh - India",
    title: "7 days Leh Ladakh road trip with Turtuk",
    isNew: true,
    originalPrice: "₹38,999",
    discountedPrice: "₹26,999",
    save: "₹12,000",
  },
  {
    id: 8,
    image: "/home.jpg",
    days: "7 Days / 6 Nights",
    location: "Ladakh - India",
    title: "7 days Leh Ladakh road trip with Turtuk",
    isNew: true,
    originalPrice: "₹38,999",
    discountedPrice: "₹26,999",
    save: "₹12,000",
  },
  {
    id: 9,
    image: "/home.jpg",
    days: "7 Days / 6 Nights",
    location: "Ladakh - India",
    title: "7 days Leh Ladakh road trip with Turtuk",
    isNew: true,
    originalPrice: "₹38,999",
    discountedPrice: "₹26,999",
    save: "₹12,000",
  },
  {
    id: 10,
    image: "/home.jpg",
    days: "7 Days / 6 Nights",
    location: "Ladakh - India",
    title: "7 days Leh Ladakh road trip with Turtuk",
    isNew: true,
    originalPrice: "₹38,999",
    discountedPrice: "₹26,999",
    save: "₹12,000",
  },
  {
    id: 11,
    image: "/home.jpg",
    days: "7 Days / 6 Nights",
    location: "Ladakh - India",
    title: "7 days Leh Ladakh road trip with Turtuk",
    isNew: true,
    originalPrice: "₹38,999",
    discountedPrice: "₹26,999",
    save: "₹12,000",
  },
  {
    id: 12,
    image: "/home.jpg",
    days: "7 Days / 6 Nights",
    location: "Ladakh - India",
    title: "7 days Leh Ladakh road trip with Turtuk",
    isNew: true,
    originalPrice: "₹38,999",
    discountedPrice: "₹26,999",
    save: "₹12,000",
  },
]

const Features = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedTour, setSelectedTour] = useState(null)
  const [bookingData, setBookingData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
    travelers: "1",
    specialRequests: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingSuccess, setBookingSuccess] = useState(false)

  const handleBookNow = (tour) => {
    setSelectedTour(tour)
    setIsBookingModalOpen(true)
    setBookingSuccess(false)
  }

  const handleCloseModal = () => {
    setIsBookingModalOpen(false)
    setSelectedTour(null)
    setBookingData({
      fullName: "",
      email: "",
      phone: "",
      travelDate: "",
      travelers: "1",
      specialRequests: "",
    })
    setBookingSuccess(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmitBooking = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setBookingSuccess(true)
    }, 2000)
  }

  const getTomorrowDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split("T")[0]
  }

  return (
    <>
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 text-center bg-slate-600 text-black">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary-600 mb-8 inline-block border-b-4 border-yellow-400 pb-3 text-shadow-md/30">
          Why Choose NepJourney?
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-xl/20 p-8 w-full max-w-[300px] min-w-[280px] hover:-translate-y-2 transform transition">
            <FaMapMarkedAlt className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Explore Destinations</h3>
            <p className="">Discover Nepal's most beautiful places with detailed information and cultural insights.</p>
          </div>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-xl/20 p-8 w-full max-w-[300px] min-w-[280px] hover:-translate-y-2 transform transition">
            <FaUserTie className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Local Guides</h3>
            <p className="">Connect with certified local guides who know the hidden gems and authentic experiences.</p>
          </div>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-xl/20 p-8 w-full max-w-[300px] min-w-[280px] hover:-translate-y-2 transform transition">
            <FaCalendarCheck className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p className="">Simple and secure booking system for guides and travel services.</p>
          </div>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-xl/20 p-8 w-full max-w-[300px] min-w-[280px] hover:-translate-y-2 transform transition text-black">
            <FaPhoneAlt className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
            <p className="">No matter the time zone, we're here to help.</p>
          </div>
        </div>
      </section>

      {/* Trending Tours Section */}
      <section className="px-4 sm:px-6 py-8 sm:py-10 md:px-20 bg-slate-600">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-shadow-md/30 text-white">
          Trending <span className="border-b-4 border-yellow-500">Tours</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tourData.map((tour, index) => (
            <div
              key={`${tour.id}-${index}`}
              className="bg-white rounded-xl shadow-xl/80 hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
            >
              <div className="relative">
                <img
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  className="w-full h-40 sm:h-48 lg:h-52 object-cover"
                />
                {tour.save && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    💰 Save {tour.save}
                  </div>
                )}
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-sm px-2 py-1 rounded shadow-xl/30">
                  {tour.days}
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-sm text-gray-500">{tour.location}</p>
                <h3 className="font-semibold mt-1">{tour.title}</h3>
                {tour.isNew && (
                  <p className="flex items-center text-sm text-yellow-500 mt-1">
                    <BsStars className="mr-1" /> New
                  </p>
                )}
                <div className="mt-2 mb-4 text-sm">
                  {tour.originalPrice ? (
                    <>
                      <span className="line-through text-gray-500 mr-2">{tour.originalPrice}</span>
                      <span className="text-green-600 font-semibold">{tour.discountedPrice}</span>
                    </>
                  ) : (
                    <span className="text-blue-500 font-medium">{tour.discountedPrice} &rarr;</span>
                  )}
                </div>
                <button
                  onClick={() => handleBookNow(tour)}
                  className="w-full flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-md transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex justify-between items-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Book Your Tour</h3>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700 text-2xl">
                <FaTimes />
              </button>
            </div>

            <div className="p-4 sm:p-6">
              {!bookingSuccess ? (
                <>
                  {/* Tour Details */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">{selectedTour?.title}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <FaCalendar className="text-blue-500" />
                        {selectedTour?.days}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkedAlt className="text-green-500" />
                        {selectedTour?.location}
                      </span>
                      <span className="font-semibold text-green-600">{selectedTour?.discountedPrice}</span>
                    </div>
                  </div>

                  {/* Booking Form */}
                  <form onSubmit={handleSubmitBooking} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FaUser className="inline mr-2 text-blue-500" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={bookingData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FaEnvelope className="inline mr-2 text-green-500" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={bookingData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FaPhone className="inline mr-2 text-purple-500" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={bookingData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FaCalendar className="inline mr-2 text-orange-500" />
                          Travel Date *
                        </label>
                        <input
                          type="date"
                          name="travelDate"
                          value={bookingData.travelDate}
                          onChange={handleInputChange}
                          min={getTomorrowDate()}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FaUsers className="inline mr-2 text-red-500" />
                          Number of Travelers *
                        </label>
                        <select
                          name="travelers"
                          value={bookingData.travelers}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? "Person" : "People"}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Special Requests (Optional)
                        </label>
                        <textarea
                          name="specialRequests"
                          value={bookingData.specialRequests}
                          onChange={handleInputChange}
                          rows="3"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                          placeholder="Any special requirements or requests..."
                        />
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-lg font-semibold">
                        <span className="mb-2 sm:mb-0">Total Amount:</span>
                        <span className="text-green-600">
                          {selectedTour?.discountedPrice} × {bookingData.travelers} = ₹
                          {(
                            Number.parseInt(selectedTour?.discountedPrice?.replace(/[₹,]/g, "")) *
                            Number.parseInt(bookingData.travelers)
                          ).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        type="button"
                        onClick={handleCloseModal}
                        className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Processing...
                          </span>
                        ) : (
                          "Confirm Booking"
                        )}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h4>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base">
                    Thank you for booking with NepJourney. We'll send you a confirmation email shortly with all the
                    details.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <h5 className="font-semibold text-gray-800 mb-2">Booking Summary:</h5>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>
                        <strong>Tour:</strong> {selectedTour?.title}
                      </p>
                      <p>
                        <strong>Date:</strong> {bookingData.travelDate}
                      </p>
                      <p>
                        <strong>Travelers:</strong> {bookingData.travelers}
                      </p>
                      <p>
                        <strong>Total:</strong> ₹
                        {(
                          Number.parseInt(selectedTour?.discountedPrice?.replace(/[₹,]/g, "")) *
                          Number.parseInt(bookingData.travelers)
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Features