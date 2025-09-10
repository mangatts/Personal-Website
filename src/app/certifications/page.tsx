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
                    <h3 className="text-xl font-semibold text-gray-800">AWS Certified Solutions Architect</h3>
                    <p className="text-gray-600">Amazon Web Services</p>
                    <p className="text-gray-500">Issued: March 2024 | Expires: March 2027</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Active
                    </span>
                    <p className="text-sm text-gray-500 mt-1">Credential ID: AWS-123456</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">
                  Comprehensive certification covering cloud architecture, security, and best practices 
                  for designing scalable and reliable applications on AWS.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Cloud Architecture', 'Security', 'Scalability', 'Cost Optimization'].map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Google Cloud Professional Developer</h3>
                    <p className="text-gray-600">Google Cloud Platform</p>
                    <p className="text-gray-500">Issued: January 2024 | Expires: January 2026</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Active
                    </span>
                    <p className="text-sm text-gray-500 mt-1">Credential ID: GCP-789012</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">
                  Advanced certification demonstrating expertise in developing and deploying 
                  applications on Google Cloud Platform using various services and tools.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['App Engine', 'Cloud Functions', 'Kubernetes', 'BigQuery'].map((skill) => (
                    <span key={skill} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Certified Kubernetes Administrator (CKA)</h3>
                    <p className="text-gray-600">Cloud Native Computing Foundation</p>
                    <p className="text-gray-500">Issued: November 2023 | Expires: November 2026</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Active
                    </span>
                    <p className="text-sm text-gray-500 mt-1">Credential ID: CKA-345678</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">
                  Hands-on certification validating skills in Kubernetes cluster management, 
                  troubleshooting, and application lifecycle management.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Cluster Management', 'Troubleshooting', 'Security', 'Networking'].map((skill) => (
                    <span key={skill} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Programming & Development Certifications */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Programming & Development</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Microsoft Certified: Azure Developer Associate</h3>
                <p className="text-gray-600 text-sm mb-3">Microsoft</p>
                <p className="text-gray-500 text-sm mb-3">Issued: September 2023</p>
                <div className="flex flex-wrap gap-1">
                  {['Azure', 'C#', 'REST APIs', 'DevOps'].map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Oracle Certified Java Programmer</h3>
                <p className="text-gray-600 text-sm mb-3">Oracle</p>
                <p className="text-gray-500 text-sm mb-3">Issued: June 2023</p>
                <div className="flex flex-wrap gap-1">
                  {['Java', 'OOP', 'Collections', 'Multithreading'].map((skill) => (
                    <span key={skill} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">MongoDB Certified Developer</h3>
                <p className="text-gray-600 text-sm mb-3">MongoDB University</p>
                <p className="text-gray-500 text-sm mb-3">Issued: April 2023</p>
                <div className="flex flex-wrap gap-1">
                  {['MongoDB', 'NoSQL', 'Data Modeling', 'Aggregation'].map((skill) => (
                    <span key={skill} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">React Developer Certification</h3>
                <p className="text-gray-600 text-sm mb-3">Meta (Facebook)</p>
                <p className="text-gray-500 text-sm mb-3">Issued: February 2023</p>
                <div className="flex flex-wrap gap-1">
                  {['React', 'JavaScript', 'JSX', 'Hooks'].map((skill) => (
                    <span key={skill} className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Security Certifications */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Security & Compliance</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">CompTIA Security+</h3>
                    <p className="text-gray-600 text-sm">CompTIA</p>
                    <p className="text-gray-500 text-sm">Issued: August 2023 | Expires: August 2026</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Active
                  </span>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Certified Information Systems Security Professional (CISSP)</h3>
                    <p className="text-gray-600 text-sm">(ISC)²</p>
                    <p className="text-gray-500 text-sm">Issued: December 2023 | Expires: December 2026</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Development */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Professional Development</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Agile Project Management</h3>
                  <p className="text-gray-600">Scrum Alliance</p>
                  <p className="text-sm text-gray-500">Completed: March 2024</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Data Science Specialization</h3>
                  <p className="text-gray-600">Coursera - Johns Hopkins University</p>
                  <p className="text-sm text-gray-500">Completed: January 2024</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Machine Learning Engineer</h3>
                  <p className="text-gray-600">Google Cloud</p>
                  <p className="text-sm text-gray-500">Completed: December 2023</p>
                </div>
              </div>
            </div>
          </section>

          {/* Certification Statistics */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Certification Overview</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                <p className="text-gray-600">Total Certifications</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">8</div>
                <p className="text-gray-600">Currently Active</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                <p className="text-gray-600">Cloud Platforms</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                <p className="text-gray-600">Security Focused</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
