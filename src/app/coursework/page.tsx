export default function Coursework() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Coursework & Academic Projects</h1>
          
          {/* Academic Overview */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Academic Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              Throughout my academic journey, I have engaged in rigorous coursework that has provided me with 
              a strong foundation in both theoretical knowledge and practical application. The projects and 
              presentations completed during my studies have allowed me to develop critical thinking skills, 
              technical expertise, and the ability to communicate complex ideas effectively.
            </p>
          </section>

          {/* Core Courses */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Core Coursework</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Computer Science Fundamentals</h3>
                <p className="text-gray-600 mb-2">Data Structures & Algorithms, Computer Organization, Operating Systems</p>
                <p className="text-sm text-gray-500">Grade: A</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Software Engineering</h3>
                <p className="text-gray-600 mb-2">Software Design Patterns, Database Systems, Web Development</p>
                <p className="text-sm text-gray-500">Grade: A</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Mathematics & Statistics</h3>
                <p className="text-gray-600 mb-2">Calculus, Linear Algebra, Probability & Statistics</p>
                <p className="text-sm text-gray-500">Grade: A-</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Specialized Topics</h3>
                <p className="text-gray-600 mb-2">Machine Learning, Cybersecurity, Cloud Computing</p>
                <p className="text-sm text-gray-500">Grade: A</p>
              </div>
            </div>
          </section>

          {/* Major Projects */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Major Academic Projects</h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Capstone Project</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Final Year
                  </span>
                </div>
                <p className="text-gray-600 mb-3">
                  Developed a comprehensive web application that addresses [specific problem]. 
                  The project involved full-stack development, database design, and user interface implementation.
                </p>
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'MongoDB', 'Express', 'AWS'].map((tech) => (
                      <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  <strong>Duration:</strong> 6 months | <strong>Team Size:</strong> 4 members | <strong>Grade:</strong> A
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Database Management System</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Junior Year
                  </span>
                </div>
                <p className="text-gray-600 mb-3">
                  Designed and implemented a relational database system for [specific domain]. 
                  Included data modeling, query optimization, and user interface development.
                </p>
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['MySQL', 'PHP', 'HTML/CSS', 'JavaScript'].map((tech) => (
                      <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  <strong>Duration:</strong> 3 months | <strong>Team Size:</strong> 2 members | <strong>Grade:</strong> A
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Machine Learning Project</h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    Senior Year
                  </span>
                </div>
                <p className="text-gray-600 mb-3">
                  Implemented a machine learning model to [specific application]. 
                  Conducted data preprocessing, model training, and performance evaluation.
                </p>
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter'].map((tech) => (
                      <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  <strong>Duration:</strong> 4 months | <strong>Team Size:</strong> Individual | <strong>Grade:</strong> A
                </p>
              </div>
            </div>
          </section>

          {/* Presentations */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Presentations</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Capstone Project Presentation</h3>
                  <p className="text-gray-600">Presented final project to faculty and industry professionals</p>
                  <p className="text-sm text-gray-500">Duration: 20 minutes | Audience: 50+ people</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Research Paper Presentation</h3>
                  <p className="text-gray-600">Presented findings on [specific research topic]</p>
                  <p className="text-sm text-gray-500">Duration: 15 minutes | Conference: [Conference Name]</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Technical Workshop</h3>
                  <p className="text-gray-600">Conducted workshop on [specific technology or topic]</p>
                  <p className="text-sm text-gray-500">Duration: 2 hours | Participants: 25+ students</p>
                </div>
              </div>
            </div>
          </section>

          {/* Academic Achievements */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Academic Achievements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="font-semibold text-gray-800">Dean's List</h3>
                <p className="text-sm text-gray-600">Multiple semesters</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">🎓</div>
                <h3 className="font-semibold text-gray-800">Academic Excellence</h3>
                <p className="text-sm text-gray-600">GPA: 3.8/4.0</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">📚</div>
                <h3 className="font-semibold text-gray-800">Research Publication</h3>
                <p className="text-sm text-gray-600">Published in [Journal/Conference]</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
