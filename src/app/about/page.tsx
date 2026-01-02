export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h1>
          
          {/* Personal Introduction */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I am a dedicated Computer Information Systems and Technology student at The University of Texas at Dallas, 
              with a strong passion for technology, data analytics, and continuous learning. My journey has been shaped 
              by diverse experiences in risk analytics, programming education, and IT systems, which have helped me 
              develop a well-rounded skill set spanning data analysis, software development, and technical leadership.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I believe in the power of technology to solve real-world problems and am always excited to take on new 
              challenges that allow me to expand my knowledge and contribute meaningfully to the projects I work on. 
              With a GPA of 3.9 and recognition on the Dean's List, I am committed to academic excellence while 
              actively engaging in professional development and community service.
            </p>
          </section>

          {/* Education Section */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Education</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">B.S. in Computer Information Systems and Technology</h3>
                    <p className="text-gray-600 font-medium">The University of Texas at Dallas</p>
                    <p className="text-gray-500">Expected May 2027</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Current
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">GPA:</span> 3.9
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Achievements:</span> Academic Excellence Scholarship | Dean's List
                  </p>
                  <p className="text-gray-600 mt-3">
                    Pursuing a comprehensive program in Computer Information Systems and Technology, focusing on 
                    software development, data analytics, database management, and IT systems. The program combines 
                    theoretical knowledge with practical applications, preparing me for a career in technology and 
                    data-driven decision making.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['SQL', 'Python', 'HTML', 'C++', 'JavaScript'].map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['Snowflake', 'Microsoft Excel', 'AWS', 'MySQL', 'Flutter', 'TensorFlow', 'IntelliJ IDEA', 'Visual Studio Code', 'Chart.js'].map((tool) => (
                    <span key={tool} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Technical Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Data Analytics & Modeling
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Database Management
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    AI/ML Development
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Web Development
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    IT Systems Configuration
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Professional Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Teaching & Mentoring
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Problem Solving
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Team Collaboration
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Communication
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Leadership
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Language Fluency</h3>
              <div className="flex flex-wrap gap-2">
                {['English', 'Punjabi', 'Hindi', 'Urdu'].map((lang) => (
                  <span key={lang} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Interests Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Interests & Hobbies</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Technology</h3>
                <p className="text-sm text-gray-600">Staying updated with latest tech trends</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">📚</div>
                <h3 className="font-semibold text-gray-800">Learning</h3>
                <p className="text-sm text-gray-600">Continuous education and skill development</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">🌱</div>
                <h3 className="font-semibold text-gray-800">Personal Growth</h3>
                <p className="text-sm text-gray-600">Self-improvement and mindfulness</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
