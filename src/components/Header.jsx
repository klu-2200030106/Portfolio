import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="text-center">
        <img 
          src="/images/profile.jpg" 
          alt="Profile" 
          className="mx-auto w-48 h-48 rounded-full object-cover mb-6 shadow-lg"
        />
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Your Name
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Web Developer | Designer | Creative Thinker
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/projects" 
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
          >
            View Projects
          </Link>
          <Link 
            to="/contact" 
            className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header