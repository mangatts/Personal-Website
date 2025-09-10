export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Personal Projects</h1>
          
          {/* Project Overview */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Portfolio</h2>
            <p className="text-gray-600 leading-relaxed">
              Here are some of the personal projects I&apos;ve worked on to expand my skills, 
              explore new technologies, and solve interesting problems. Each project 
              represents a learning opportunity and a chance to apply my knowledge in 
              practical scenarios.
            </p>
          </section>

          {/* Featured Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Projects</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🚀</div>
                    <h3 className="text-xl font-semibold">Project Name</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">E-Commerce Platform</h3>
                  <p className="text-gray-600 mb-4">
                    A full-stack e-commerce application with user authentication, product catalog, 
                    shopping cart, and payment integration. Built with modern web technologies 
                    and responsive design principles.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'].map((tech) => (
                        <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      Live Demo
                    </a>
                    <a href="#" className="text-gray-600 hover:underline font-medium">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">📱</div>
                    <h3 className="text-xl font-semibold">Mobile App</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Task Management App</h3>
                  <p className="text-gray-600 mb-4">
                    A cross-platform mobile application for task and project management. 
                    Features include team collaboration, deadline tracking, and progress 
                    visualization with offline capabilities.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React Native', 'Firebase', 'Redux', 'Expo'].map((tech) => (
                        <span key={tech} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                      App Store
                    </a>
                    <a href="#" className="text-gray-600 hover:underline font-medium">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* All Projects Grid */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">All Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project 3 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-3xl mb-4 text-center">🌐</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Web Scraper</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Python-based web scraper for collecting and analyzing data from various sources.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {['Python', 'BeautifulSoup', 'Pandas'].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                  View Code →
                </a>
              </div>

              {/* Project 4 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-3xl mb-4 text-center">🤖</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Chatbot</h3>
                <p className="text-gray-600 text-sm mb-4">
                  AI-powered chatbot using natural language processing for customer support.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {['Python', 'TensorFlow', 'Flask'].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                  View Code →
                </a>
              </div>

              {/* Project 5 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-3xl mb-4 text-center">📊</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Visualization</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Interactive dashboard for visualizing complex datasets with real-time updates.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {['D3.js', 'React', 'Node.js'].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                  View Demo →
                </a>
              </div>

              {/* Project 6 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-3xl mb-4 text-center">🔐</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Password Manager</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Secure password management application with encryption and cloud sync.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {['Electron', 'Node.js', 'SQLite'].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                  View Code →
                </a>
              </div>

              {/* Project 7 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-3xl mb-4 text-center">🎮</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Game Development</h3>
                <p className="text-gray-600 text-sm mb-4">
                  2D platformer game built with modern game development practices.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {['Unity', 'C#', 'Blender'].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                  Play Game →
                </a>
              </div>

              {/* Project 8 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-3xl mb-4 text-center">☁️</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Cloud Migration</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Automated cloud infrastructure setup and deployment pipeline.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {['AWS', 'Terraform', 'Docker'].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                  View Code →
                </a>
              </div>
            </div>
          </section>

          {/* Project Statistics */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Project Statistics</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">8</div>
                <p className="text-gray-600">Technologies Mastered</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
                <p className="text-gray-600">Live Applications</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
                <p className="text-gray-600">Lines of Code</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
