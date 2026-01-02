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
              Here are the projects I&apos;ve worked on to expand my skills, explore new technologies, 
              and solve interesting problems. Each project represents a learning opportunity and a chance 
              to apply my knowledge in practical scenarios, particularly in the fields of artificial 
              intelligence, mobile development, and data analytics.
            </p>
          </section>

          {/* Featured Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Project</h2>
            <div className="grid lg:grid-cols-1 gap-8">
              {/* Health & Fitness AI App */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-blue-500">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🏋️</div>
                    <h3 className="text-xl font-semibold">Health & Fitness AI App</h3>
                    <p className="text-sm mt-2 opacity-90">Artificial Intelligence Mentorship Program - UT Dallas</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Health & Fitness AI App</h3>
                      <p className="text-gray-500">September 2024 – December 2024</p>
                      <p className="text-gray-600 font-medium">Artificial Intelligence Mentorship Program - UT Dallas</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Developed an AI-powered Health & Fitness app with personalized workout plans and continuous updates. 
                    The application features intelligent meal recommendations, comprehensive calorie tracking, and progress 
                    monitoring capabilities. The AI system continuously adjusts workout plans and recommendations based 
                    on user performance and goals.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 mb-3">
                      <li>Personalized workout plans powered by AI with continuous updates</li>
                      <li>User-friendly calorie tracking dashboard with real-time visualization</li>
                      <li>Meal recommendation system integrated with APIs</li>
                      <li>Progress tracking features for workouts, calories, and goals</li>
                      <li>AI-driven adjustments based on user performance</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Flutter', 'TensorFlow', 'AWS', 'MySQL', 'Chart.js', 'Python'].map((tech) => (
                        <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Technical Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Implemented AI models using TensorFlow for personalized recommendations</li>
                      <li>Built mobile application using Flutter for cross-platform compatibility</li>
                      <li>Designed and managed MySQL database for data storage and management</li>
                      <li>Integrated AWS services for cloud infrastructure and scalability</li>
                      <li>Created real-time data visualization using Chart.js for tracking dashboard</li>
                      <li>Developed API integrations for meal recommendations and nutrition data</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Projects Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Additional Work & Projects</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 leading-relaxed">
                In addition to my featured project, I have worked on various technical projects and initiatives 
                throughout my academic and professional journey. These include data analytics tools, automation 
                scripts, and educational programming projects developed during my time as a Programming Instructor 
                and through various coursework and internships.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                I am continuously working on new projects to expand my skill set and explore emerging technologies 
                in AI, data analytics, and software development. Check back soon for updates on new projects!
              </p>
            </div>
          </section>

          {/* Project Statistics */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Project Highlights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">AI-Powered</div>
                <p className="text-gray-600">Machine Learning Integration</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">Full-Stack</div>
                <p className="text-gray-600">Mobile & Backend Development</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">Cloud-Based</div>
                <p className="text-gray-600">AWS Infrastructure</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
