export default function Certifications() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Certifications & Professional Development</h1>
          
          {/* Overview */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Certifications</h2>
            <p className="text-gray-600 leading-relaxed">
              I believe in continuous learning and professional development. These certifications 
              represent my commitment to staying current with industry best practices and 
              expanding my technical expertise. Each certification has provided valuable 
              knowledge and skills that I apply in my professional work.
            </p>
          </section>

          {/* Technical Certifications */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Technical Certifications</h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Device Configuration & Management</h3>
                    <p className="text-gray-600">IT Infrastructure Certification</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Active
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">
                  Certification demonstrating expertise in configuring and managing devices across various platforms, 
                  including desktop, laptop, and mobile device management using enterprise tools like Microsoft Intune.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Device Management', 'Intune', 'Configuration', 'IT Infrastructure'].map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Introduction to Programming Using Python</h3>
                    <p className="text-gray-600">Programming Fundamentals</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Active
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">
                  Foundational certification covering Python programming fundamentals, data structures, 
                  algorithms, and best practices in software development.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Programming Fundamentals', 'Data Structures', 'Algorithms'].map((skill) => (
                    <span key={skill} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Information Technology Specialist in Networking</h3>
                    <p className="text-gray-600">Network Infrastructure</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Active
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">
                  Specialized certification validating skills in network design, implementation, troubleshooting, 
                  and management using TCP/IP models and network protocols.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Networking', 'TCP/IP', 'Network Troubleshooting', 'Infrastructure'].map((skill) => (
                    <span key={skill} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Google IT Support Professional</h3>
                    <p className="text-gray-600">Google Career Certificates</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Active
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">
                  Comprehensive professional certification covering IT support fundamentals, including system administration, 
                  troubleshooting, customer service, and technical problem-solving.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['IT Support', 'System Administration', 'Troubleshooting', 'Customer Service'].map((skill) => (
                    <span key={skill} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>


          {/* Certification Statistics */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Certification Overview</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <p className="text-gray-600">Total Certifications</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">4</div>
                <p className="text-gray-600">Currently Active</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <p className="text-gray-600">Technical Focus</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
                <p className="text-gray-600">Professional</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
