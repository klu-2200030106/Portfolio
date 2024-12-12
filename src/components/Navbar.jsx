import { Link } from 'react-router-dom'

function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex-shrink-0 text-2xl font-bold text-gray-800 
                hover:text-blue-600 transition-colors duration-300 
                tracking-wider"
              >
                Your Name
              </Link>
            </div>
            <div className="hidden md:flex space-x-4">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 
                  px-3 py-2 rounded-md text-sm font-medium 
                  transition-all duration-300 ease-in-out 
                  hover:bg-blue-50 hover:scale-105"
                >
                  {item}
                </Link>
              ))}
            </div>
            {/* Mobile menu button */}
            <div className="-mr-2 flex md:hidden">
              <button 
                type="button"
                className="bg-gray-100 inline-flex items-center justify-center 
                p-2 rounded-md text-gray-400 hover:text-blue-600 
                hover:bg-gray-200 focus:outline-none focus:ring-2 
                focus:ring-offset-2 focus:ring-blue-500"
              >
                {/* Menu icon */}
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
  }

export default Navbar