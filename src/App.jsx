import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="bg-neutral-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-neutral-900/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold text-white">
              Kshitij Pandey
            </h1>
            <div className="hidden md:flex space-x-4">
              <a href="#hero" className="text-gray-300 hover:text-white">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-white">
                About
              </a>
              <a href="#skills" className="text-gray-300 hover:text-white">
                Skills
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white">
                Projects
              </a>
              <a href="#experience" className="text-gray-300 hover:text-white">
                Experience
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </div>
            <button className="md:hidden text-gray-300 hover:text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-[70vh] flex items-center justify-center py-16 px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Full Stack Developer</h1>
          <p className="text-xl text-gray-400 mb-8">
            Crafting robust and scalable web solutions with modern technologies
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="bg-blue-500 px-8 py-3 rounded-full hover:bg-blue-600"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="border border-gray-500 px-8 py-3 rounded-full hover:border-white hover:text-white"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-neutral-800 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-400">
              I'm a passionate Full Stack Developer creating seamless user experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-neutral-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Who I Am</h3>
                <p className="text-gray-300">
                  I bridge the gap between frontend aesthetics and backend functionality.
                </p>
              </div>
              <div className="bg-neutral-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">What I Do</h3>
                <p className="text-gray-300">
                  Specializing in React, Node.js, and AWS to deliver performant solutions.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-neutral-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Experience Highlights</h3>
                <ul className="text-gray-300 list-disc ml-4">
                  <li>Full Stack Development</li>
                  <li>Cloud Architecture</li>
                  <li>Database Management</li>
                  <li>API Development</li>
                </ul>
              </div>
              <div className="bg-neutral-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Current Focus</h3>
                <p className="text-gray-300">
                  Building scalable applications with advanced cloud solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-neutral-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Junior Data Engineer Trainee</h3>
              <p className="text-gray-300 font-bold">64 Squares LLC  | July 2024 - Jan 2025</p><br></br>
              <ul className="text-gray-400 list-disc ml-4">
                <li>Built a data pipeline using Python, SQL, and Snowflake to retrieve JSON data 
                from Label Studio and load it into Snowflake.</li>
                <li>Designed and developed the landing page in React for the product <b>Data Zapp</b>.</li>
                <li>Led a team of 5 members in performing log analysis for an Android app using <b>Splunk</b>.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="bg-neutral-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <p className="text-gray-400">
              Proficient in modern technologies to create impactful solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <p className="text-gray-300">C++, Python, Java</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <p className="text-gray-300">React.js, JavaScript, HTML, CSS</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <p className="text-gray-300">Node.js, Express.js, Python</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Database</h3>
              <p className="text-gray-300">MongoDB, SQL, Firebase, Supabase</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Cloud Services</h3>
              <p className="text-gray-300">AWS, Firebase, Docker</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">UI / UX</h3>
              <p className="text-gray-300">Figma, Canva, v0</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-neutral-800 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
              <p className="text-gray-300">Built with React, Node.js, and MongoDB</p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Real-Time Chat App</h3>
              <p className="text-gray-300">Socket.io and Firebase integration</p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Contact Section */}
      <section id="contact" className="bg-neutral-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-gray-400">
              Interested in working together? Let's connect!
            </p>
          </div>
          <form className="max-w-lg mx-auto space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-neutral-700 text-white focus:ring focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-neutral-700 text-white focus:ring focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 rounded-lg bg-neutral-700 text-white focus:ring focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default App;
