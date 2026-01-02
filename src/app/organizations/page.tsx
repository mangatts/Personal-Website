export default function Organizations() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Organizations & Leadership Experience</h1>
          
          {/* Overview */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Leadership & Volunteer Experience</h2>
            <p className="text-gray-600 leading-relaxed">
              Throughout my journey, I have been actively involved in various organizations and 
              leadership roles that have helped me develop strong interpersonal skills, 
              organizational abilities, and a commitment to community service. These experiences 
              have shaped my character and provided valuable opportunities to make a positive impact.
            </p>
          </section>

          {/* Current Leadership Roles */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Current Leadership Roles</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">Workshop Committee Member</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Current
                  </span>
                </div>
                <p className="text-lg text-gray-600 font-medium">CIS Tech Leadership Council</p>
                <p className="text-gray-500 mb-3">September 2025 – Present</p>
                <p className="text-gray-600">
                  Active member of the Workshop Committee, contributing to the planning and execution of technical 
                  workshops and educational events for the Computer Information Systems community.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">Volunteer</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Current
                  </span>
                </div>
                <p className="text-lg text-gray-600 font-medium">Professional Program in Computer Information Systems & Technology</p>
                <p className="text-gray-500 mb-3">August 2025 – Present</p>
                <p className="text-gray-600">
                  Volunteering with the professional program to support students and contribute to program initiatives 
                  and community building within the Computer Information Systems & Technology department.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">Education Officer</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Current
                  </span>
                </div>
                <p className="text-lg text-gray-600 font-medium">Helping Kids Succeed through the Texas Rangers</p>
                <p className="text-gray-500 mb-3">January 2025 – Present</p>
                <p className="text-gray-600">
                  Serving as Education Officer, focusing on educational initiatives and programs that help children 
                  succeed through various educational and mentorship activities.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">Member</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Previous
                  </span>
                </div>
                <p className="text-lg text-gray-600 font-medium">Association for Informational Systems</p>
                <p className="text-gray-500 mb-3">January 2025 – September 2025</p>
                <p className="text-gray-600">
                  Active member of the Association for Informational Systems, participating in professional development 
                  activities, networking events, and staying current with industry trends and best practices.
                </p>
              </div>
            </div>
          </section>


          {/* Skills Developed */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Skills Developed Through Involvement</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Leadership & Organization</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Workshop Planning & Coordination
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Educational Program Development
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Community Engagement
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Professional Networking
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Communication & Service</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Educational Leadership
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Volunteer Coordination
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Youth Mentorship
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Community Service
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
