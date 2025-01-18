import React from "react";
import "./App.css";
import resume from './assets/Kshitij_Pandey_resume.pdf'; 
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
              <a href="#experience" className="text-gray-300 hover:text-white">
                Experience
              </a>
              <a href="#skills" className="text-gray-300 hover:text-white">
                Skills
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white">
                Projects
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
      <section id="hero" className="min-h-[50vh] flex items-center justify-center py-16 px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 mt-20">Hi, I'm Kshitij Pandey</h1>
          <p className="text-3xl text-gray-400 mb-8">
            Full Stack Developer
          </p>
          <div className="flex justify-center gap-4">
            <a
              href={resume}download    
              className="bg-blue-500 px-8 py-3 rounded-full hover:bg-blue-600"
            >
              Download CV
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            <div className="space-y-6">
              <div className="bg-neutral-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Who I Am</h3>
                <p className="text-gray-300">
                  I bridge the gap between frontend aesthetics and backend functionality.
                </p>
              </div>
              
            </div>
            <div className="space-y-6">
            <div className="bg-neutral-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Current Focus</h3>
                <p className="text-gray-300">
                  Building scalable applications to solve real life problems around me.
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
          <div className="space-y-8 text-xl">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center ">
          <div className="bg-neutral-800 p-6 rounded-lg hover:scale-110">
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <p className="text-gray-300">C++, Python, Java</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-lg hover:scale-110">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <p className="text-gray-300">React.js, JavaScript, HTML, CSS</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-lg hover:scale-110">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <p className="text-gray-300">Node.js, Express.js, Python</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-lg hover:scale-110">
              <h3 className="text-xl font-bold mb-4">Database</h3>
              <p className="text-gray-300">MongoDB, SQL, Firebase, Supabase</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-lg hover:scale-110">
              <h3 className="text-xl font-bold mb-4">Cloud Services</h3>
              <p className="text-gray-300">AWS, Snowflake, Docker</p>
            </div>
            <div className="bg-neutral-800 p-6 rounded-lg hover:scale-110">
              <h3 className="text-xl font-bold mb-4">UI / UX</h3>
              <p className="text-gray-300">Figma, Canva, v0</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-neutral-800 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">CUHP APP</h3>
              <p className="text-gray-300 text-center font-bold mb-6">Tech Stack : Java, Firebase and XML</p>
              <p className="text-gray-300 text-center">An Android CMS app built for Central University of Himachal Pradesh</p>
              <i className="fa-solid fa-link text-xl text-gray-300 hover:text-white mt-5 "></i>
              <a href="https://github.com/pandey22/CUHP-APP-v1.0" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-xl text-gray-300 hover:text-white ml-4"></i>
              </a>

            </div>
            <div className="bg-neutral-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Real-Time Chat App</h3>
              <p className="text-gray-300">Socket.io and Firebase integration</p>
              <i className="fa-solid fa-link text-xl text-gray-300 hover:text-white mt-5 "></i>
              <a href="https://github.com/pandey22/CUHP-APP-v1.0" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-xl text-gray-300 hover:text-white ml-4"></i>
              </a>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Real-Time Chat App</h3>
              <p className="text-gray-300">Socket.io and Firebase integration</p>
              <i className="fa-solid fa-link text-xl text-gray-300 hover:text-white mt-5 "></i>
              <i className="fab fa-github text-xl text-gray-300 hover:text-white ml-4"></i>
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
          Connect with me on these platforms:
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
        <a href="https://github.com/pandey22" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github text-4xl text-gray-300 hover:text-white"></i>
        </a>
        <a href="https://twitter.com/kshitij_peace" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter text-4xl text-gray-300 hover:text-white"></i>
        </a>
        <a href="https://linkedin.com/in/kp250400" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-4xl text-gray-300 hover:text-white"></i>
        </a>
        <a href="mailto:kshitijpandey25@gmail.com">
          <i className="fas fa-envelope text-4xl text-gray-300 hover:text-white"></i>
        </a>
      </div>
    </div>
  </section>
    </div>
  );
};

export default App;
