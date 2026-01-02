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
                <h2 className="text-2xl font-semibold text-gray-800">Risk Analytics Intern</h2>
                <p className="text-lg text-gray-600">DriveTime</p>
                <p className="text-gray-500">Dallas, Texas | May 2025 – Aug 2025</p>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Current
              </span>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Responsibilities:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Supported the Fraud and Loan Valuation teams within Bridgecrest, DriveTime's lending division, to enhance underwriting accuracy and improve customer profitability forecasting</li>
                <li>Designed an automated income calculation tool using Excel and Snowflake to analyze customer bank statements</li>
                <li>Developed and validated a payoff prediction model by building a customer segmentation and rank-ordering framework using SQL and JavaScript in Snowflake</li>
                <li>Collaborated with the Pricing Team to implement changes based on profitability insights</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Achievements:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Reduced manual processing time by <span className="font-semibold">95%</span> through automated income calculation tool</li>
                <li>Supported a <span className="font-semibold">3% increase in total sales</span> through improved underwriting accuracy</li>
                <li>Successfully developed and validated payoff prediction model for customer segmentation</li>
              </ul>
            </div>
          </section>

          {/* Previous Positions */}
          <section className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">Programming Instructor</h2>
                  <p className="text-lg text-gray-600">ICODE</p>
                  <p className="text-gray-500">Wylie, Texas | Mar 2024 – Mar 2025</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Previous
                </span>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Responsibilities:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Led and implemented group instruction for engaging students in lectures aged 7-15, teaching technical skills ranging from coding Python for drone control, website building with HTML and CSS, and Game Design</li>
                  <li>Guided students in advanced projects, such as customizing Minecraft, developing games in Roblox with Lua & C++, and designing objects for 3D printing</li>
                  <li>Created engaging and interactive learning environments to foster student interest in technology</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Achievements:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Achieved a <span className="font-semibold">95% increase in student engagement</span> and project completion rates</li>
                  <li>Achieved consistent learning outcomes, with <span className="font-semibold">90% of students</span> mastering core concepts and independently expanding their projects beyond classroom instruction</li>
                  <li>Demonstrated increased proficiency in teaching technical concepts to diverse age groups</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">IT Systems Intern</h2>
                  <p className="text-lg text-gray-600">TekLayer Consulting</p>
                  <p className="text-gray-500">Richardson, Texas | May 2023 – Jul 2023</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Previous
                </span>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Responsibilities:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Configured, deployed, and maintained desktops, laptops, servers, and networking equipment, ensuring seamless IT operations using Intune</li>
                  <li>Diagnosed and resolved network connectivity issues, software glitches, and hardware malfunctions, enhancing system reliability using TCP/IP models</li>
                  <li>Delivered comprehensive training and technical support for IT applications and equipment, streamlining user workflows</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Achievements:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Reduced downtime by <span className="font-semibold">10%</span> through efficient IT operations management</li>
                  <li>Increased user efficiency and satisfaction through comprehensive training and technical support</li>
                  <li>Successfully maintained and improved system reliability across multiple client environments</li>
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
                  {['SQL', 'Python', 'JavaScript', 'Snowflake', 'Excel', 'AWS', 'MySQL', 'TensorFlow', 'Flutter', 'Intune', 'TCP/IP'].map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Professional Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['Data Analytics', 'Risk Analysis', 'Teaching', 'Mentoring', 'Problem Solving', 'Communication', 'IT Support', 'System Configuration'].map((skill) => (
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
