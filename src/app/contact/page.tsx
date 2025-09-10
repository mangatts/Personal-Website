'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h1>
          
          {/* Contact Overview */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Let's Connect</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm always interested in new opportunities, collaborations, and meaningful conversations. 
              Whether you have a project in mind, want to discuss technology, or just want to say hello, 
              I'd love to hear from you. Feel free to reach out through any of the channels below.
            </p>
          </section>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me about your project, question, or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </section>

            {/* Contact Information */}
            <section className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">your.email@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xl">📱</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Location</h3>
                      <p className="text-gray-600">City, State, Country</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Connect With Me</h2>
                <div className="space-y-4">
                  <a 
                    href="https://linkedin.com/in/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xl">💼</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">LinkedIn</h3>
                      <p className="text-gray-600">Professional networking</p>
                    </div>
                  </a>

                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-xl">🐙</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">GitHub</h3>
                      <p className="text-gray-600">Code repositories and projects</p>
                    </div>
                  </a>

                  <a 
                    href="https://twitter.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xl">🐦</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Twitter</h3>
                      <p className="text-gray-600">Thoughts and updates</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Availability</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Available for new opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700">Open to freelance projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Interested in collaborations</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  I typically respond to messages within 24-48 hours. 
                  For urgent matters, please call or text directly.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
