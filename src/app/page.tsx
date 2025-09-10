'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
              <img
                src="/profile-picture.jpg"
                alt="Tanveer Mangat"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='16' fill='%236b7280' text-anchor='middle' dy='.3em'%3EAdd your photo here%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Welcome to My
            <span className="text-blue-600 block">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            I'm Tanveer Mangat, a passionate professional with expertise in technology, 
            leadership, and continuous learning. Explore my journey through 
            work experience, projects, and achievements.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/mangatts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="GitHub Profile"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/tmsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn More About Me
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
            <p className="text-gray-600">
              Professional journey and career achievements
            </p>
            <Link href="/work" className="text-blue-600 hover:underline mt-2 inline-block">
              View Details →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-2">Education & Coursework</h3>
            <p className="text-gray-600">
              Academic background and project portfolio
            </p>
            <Link href="/coursework" className="text-blue-600 hover:underline mt-2 inline-block">
              View Details →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <p className="text-gray-600">
              Personal and professional project showcase
            </p>
            <Link href="/projects" className="text-blue-600 hover:underline mt-2 inline-block">
              View Details →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
          <p className="text-xl mb-8">
            Let's discuss opportunities, collaborations, or just have a conversation!
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Me Today
          </Link>
        </div>
      </section>
    </div>
  );
}
