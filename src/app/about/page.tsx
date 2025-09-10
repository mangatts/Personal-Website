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
              I am a passionate and dedicated professional with a strong background in technology 
              and a commitment to continuous learning and growth. My journey has been shaped by 
              diverse experiences in both academic and professional settings, which have helped 
              me develop a well-rounded skill set and a deep understanding of various industries.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I believe in the power of technology to solve real-world problems and am always 
              excited to take on new challenges that allow me to expand my knowledge and 
              contribute meaningfully to the projects I work on.
            </p>
          </section>

          {/* Education Section */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Education</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800">Degree Program</h3>
                <p className="text-gray-600 font-medium">Institution Name</p>
                <p className="text-gray-500">Year - Year</p>
                <p className="text-gray-600 mt-2">
                  Brief description of your degree program, key coursework, and academic achievements.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800">Additional Education</h3>
                <p className="text-gray-600 font-medium">Institution or Program Name</p>
                <p className="text-gray-500">Year - Year</p>
                <p className="text-gray-600 mt-2">
                  Description of any additional education, certifications, or training programs.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Technical Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Programming Languages
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Web Development
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Database Management
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Software Development
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Soft Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Leadership
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Team Collaboration
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Problem Solving
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Communication
                  </li>
                </ul>
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
