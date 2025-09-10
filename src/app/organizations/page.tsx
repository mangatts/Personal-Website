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
                  <h3 className="text-xl font-semibold text-gray-800">President</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Current
                  </span>
                </div>
                <p className="text-lg text-gray-600 font-medium">Student Technology Association</p>
                <p className="text-gray-500 mb-3">2023 - Present</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Lead a team of 15+ executive board members and 200+ active members</li>
                  <li>Organize monthly tech talks, workshops, and networking events</li>
                  <li>Manage annual budget of $50,000+ for events and initiatives</li>
                  <li>Collaborate with industry partners to secure sponsorships and internships</li>
                  <li>Represent the organization at university-wide meetings and conferences</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">Mentor</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Current
                  </span>
                </div>
                <p className="text-lg text-gray-600 font-medium">First-Year Student Mentorship Program</p>
                <p className="text-gray-500 mb-3">2023 - Present</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Mentor 8 first-year students in academic and career development</li>
                  <li>Conduct weekly one-on-one meetings and group activities</li>
                  <li>Provide guidance on course selection, study strategies, and career planning</li>
                  <li>Organize social events to build community among mentees</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Previous Leadership Roles */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Previous Leadership Roles</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Vice President of Events</h3>
                <p className="text-lg text-gray-600 font-medium">Computer Science Society</p>
                <p className="text-gray-500 mb-3">2022 - 2023</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Planned and executed 12+ major events including hackathons and career fairs</li>
                  <li>Coordinated with 20+ industry professionals for guest speaker series</li>
                  <li>Managed event logistics, venue booking, and catering arrangements</li>
                  <li>Increased event attendance by 40% through improved marketing strategies</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Treasurer</h3>
                <p className="text-lg text-gray-600 font-medium">Volunteer Service Organization</p>
                <p className="text-gray-500 mb-3">2021 - 2022</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Managed organization budget of $25,000+ for community service projects</li>
                  <li>Tracked expenses and prepared monthly financial reports</li>
                  <li>Coordinated fundraising events that raised $15,000+ for local charities</li>
                  <li>Maintained relationships with donors and sponsors</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Team Lead</h3>
                <p className="text-lg text-gray-600 font-medium">Community Outreach Program</p>
                <p className="text-gray-500 mb-3">2020 - 2021</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Led a team of 10 volunteers in weekly community service activities</li>
                  <li>Organized food drives, clothing donations, and educational workshops</li>
                  <li>Coordinated with local shelters and community centers</li>
                  <li>Developed volunteer training programs and orientation materials</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Volunteer Experience */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Volunteer Experience</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Local Food Bank</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Weekly volunteer helping with food sorting, distribution, and community outreach.
                </p>
                <p className="text-sm text-gray-500">2020 - Present | 200+ hours</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">STEM Education Initiative</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Teaching coding and computer science concepts to underprivileged youth.
                </p>
                <p className="text-sm text-gray-500">2021 - Present | 150+ hours</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Environmental Cleanup</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Monthly beach and park cleanup events with local environmental groups.
                </p>
                <p className="text-sm text-gray-500">2019 - Present | 100+ hours</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Senior Center Activities</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Organizing technology workshops and social activities for elderly residents.
                </p>
                <p className="text-sm text-gray-500">2022 - Present | 80+ hours</p>
              </div>
            </div>
          </section>

          {/* Awards & Recognition */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Awards & Recognition</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Outstanding Student Leader Award</h3>
                  <p className="text-gray-600">University Student Government Association</p>
                  <p className="text-sm text-gray-500">2023</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Volunteer of the Year</h3>
                  <p className="text-gray-600">Local Community Service Center</p>
                  <p className="text-sm text-gray-500">2022</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Excellence in Mentorship</h3>
                  <p className="text-gray-600">Student Affairs Office</p>
                  <p className="text-sm text-gray-500">2023</p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Developed */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Leadership Skills Developed</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Management & Organization</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Team Leadership & Management
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Event Planning & Coordination
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Budget Management
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Project Management
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Communication & Interpersonal</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Public Speaking
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Mentoring & Coaching
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Conflict Resolution
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Community Building
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
