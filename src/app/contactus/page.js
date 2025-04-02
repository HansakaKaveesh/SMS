"use client";

import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { FaQuestionCircle, FaWallet } from 'react-icons/fa';
import { FaUser, FaIdCard, FaBuilding, FaCommentDots, FaPaperPlane, FaSpinner } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
     
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 mt-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Student Support</h1>
          <p className="text-xl text-gray-600">Get in touch with our student support team</p>
        </div>

        

<div className="grid lg:grid-cols-3 gap-12">
  {/* Contact Information */}
  <div className="bg-white rounded-2xl p-8 shadow-lg">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h2>
    
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="bg-indigo-100 p-3 rounded-lg">
          <FaMapMarkerAlt className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Campus Address</h3>
          <p className="text-gray-600 mt-1">123 University Avenue</p>
          <p className="text-gray-600">Academic City, Education State 45678</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-indigo-100 p-3 rounded-lg">
          <FaPhone className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Student Helpline</h3>
          <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
          <p className="text-gray-600">Mon-Fri: 8am - 6pm (EST)</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-indigo-100 p-3 rounded-lg">
          <FaEnvelope className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Email Support</h3>
          <p className="text-gray-600 mt-1">support@studentportal.edu</p>
          <p className="text-gray-600">admissions@studentportal.edu</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-indigo-100 p-3 rounded-lg">
          <FaClock className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
          <p className="text-gray-600 mt-1">Monday - Friday: 9am - 5pm</p>
          <p className="text-gray-600">Saturday: 10am - 2pm</p>
        </div>
      </div>
    </div>
  </div>

  {/* Contact Form remains unchanged */}
  <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
    <FaCommentDots className="text-indigo-600" />
    Send Us a Message
  </h2>
  
  <form className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name Field */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            placeholder="John Doe"
          />
        </div>
      </div>

      {/* Student ID Field */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">Student ID</label>
        <div className="relative">
          <FaIdCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            required
            pattern="STU-\d{5}"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            placeholder="STU-12345"
          />
        </div>
        <span className="text-xs text-gray-500 mt-1 block">Format: STU-12345</span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Email Field */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            placeholder="john@studentportal.edu"
          />
        </div>
      </div>

      {/* Department Field */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
        <div className="relative">
          <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
          <select 
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none transition-all"
            required
          >
            <option value="">Select Department</option>
            <option>Admissions</option>
            <option>Academic Services</option>
            <option>Financial Aid</option>
            <option>Technical Support</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    {/* Message Field */}
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
      <div className="relative">
        <FaCommentDots className="absolute left-3 top-4 text-gray-400" />
        <textarea
          rows={4}
          required
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          placeholder="Describe your inquiry..."
          maxLength={500}
        />
      </div>
      <div className="text-xs text-gray-500 mt-1 text-right">
        <span className="char-counter">0</span>/500 characters
      </div>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
    >
      <FaPaperPlane className="h-4 w-4" />
      Send Message
      {/* Loading Spinner (add conditional rendering in React) */}
      {/* <FaSpinner className="animate-spin h-5 w-5 ml-2" /> */}
    </button>

    {/* Success Message (add conditional rendering in React) */}
    {/* <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
      <FaCheckCircle />
      Message sent successfully!
    </div> */}
  </form>
</div>
        


</div>

        {/* Campus Map */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-73.985664!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU1LjgiTiA3M8KwNTknMDguNyJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="450"
            className="border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Support Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
  {/* Emergency Support Card */}
  <div className="bg-indigo-600 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
      <FaClock className="h-5 w-5 text-indigo-200" />
      24/7 Emergency Support
    </h3>
    <p className="mb-4 text-indigo-100">For urgent technical issues affecting your academic progress:</p>
    <div className="flex items-center gap-3 group">
      <div className="p-2 bg-indigo-700 rounded-lg">
        <FaPhone className="h-6 w-6 text-indigo-200 group-hover:text-white transition-colors" />
      </div>
      <span className="text-2xl font-bold hover:text-indigo-100 transition-colors">
        +1 (555) 987-6543
      </span>
    </div>
  </div>

  {/* FAQs Card */}
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
      <FaQuestionCircle className="h-5 w-5 text-indigo-600" />
      Frequently Asked Questions
    </h3>
    <div className="space-y-4">
      <div className="border-b pb-4 hover:bg-gray-50 px-3 -mx-3 rounded-lg transition-colors">
        <div className="flex items-start gap-3">
          <FaQuestionCircle className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-900">How do I reset my password?</p>
            <p className="text-gray-600 text-sm mt-1">
              Visit the student portal login page and click "Forgot Password"
            </p>
          </div>
        </div>
      </div>
      
      <div className="border-b pb-4 hover:bg-gray-50 px-3 -mx-3 rounded-lg transition-colors">
        <div className="flex items-start gap-3">
          <FaWallet className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-900">When are tuition payments due?</p>
            <p className="text-gray-600 text-sm mt-1">
              Payments are typically due 2 weeks before each semester
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default ContactUs;