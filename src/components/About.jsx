
function About() {
  return (
    <div className="min-h-screen container mx-auto px-4 py-16">
      <h2 className="section-title">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src="/images/profile.jpg" 
            alt="About" 
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <p className="text-gray-700 mb-4">
            Hello! I am a passionate web developer with expertise in creating 
            dynamic and responsive web applications. I love turning complex 
            problems into simple, beautiful interfaces.
          </p>
          <p className="text-gray-700 mb-4">
            With a strong background in React, JavaScript, and modern web technologies, 
            I am dedicated to crafting high-quality, user-friendly digital experiences.
          </p>
          <div className="mt-6">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About