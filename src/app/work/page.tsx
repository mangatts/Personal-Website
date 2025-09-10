export default function Work() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Work Experience</h1>
          
          {/* Current Position */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Current Position</h2>
                <p className="text-lg text-gray-600">Company Name</p>
                <p className="text-gray-500">Start Date - Present</p>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Current
              </span>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Responsibilities:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Lead and manage development projects from conception to completion</li>
                <li>Collaborate with cross-functional teams to deliver high-quality solutions</li>
                <li>Mentor junior team members and conduct code reviews</li>
                <li>Implement best practices and improve development processes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Achievements:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Successfully delivered [specific project] resulting in [measurable outcome]</li>
                <li>Improved team productivity by [percentage] through process optimization</li>
                <li>Led initiative that reduced [specific metric] by [percentage]</li>
              </ul>
            </div>
          </section>

          {/* Previous Positions */}
          <section className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">Previous Position 1</h2>
                  <p className="text-lg text-gray-600">Company Name</p>
                  <p className="text-gray-500">Start Date - End Date</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Previous
                </span>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Responsibilities:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Developed and maintained web applications using modern technologies</li>
                  <li>Collaborated with design team to implement user interfaces</li>
                  <li>Participated in agile development processes and sprint planning</li>
                  <li>Contributed to technical documentation and knowledge sharing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Achievements:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Delivered [specific project] ahead of schedule</li>
                  <li>Implemented [specific feature] that improved user experience</li>
                  <li>Received recognition for [specific achievement]</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">Previous Position 2</h2>
                  <p className="text-lg text-gray-600">Company Name</p>
                  <p className="text-gray-500">Start Date - End Date</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Previous
                </span>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Responsibilities:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Assisted in development and testing of software applications</li>
                  <li>Participated in team meetings and project planning sessions</li>
                  <li>Learned and applied new technologies and development practices</li>
                  <li>Contributed to bug fixes and feature implementations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Achievements:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Successfully completed [specific project or task]</li>
                  <li>Demonstrated strong learning ability and adaptability</li>
                  <li>Received positive feedback from team members and supervisors</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Gained */}
          <section className="bg-white rounded-lg shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Skills Gained Through Experience</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'Docker', 'AWS'].map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Professional Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['Project Management', 'Team Leadership', 'Agile Methodologies', 'Problem Solving', 'Communication', 'Mentoring'].map((skill) => (
                    <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
