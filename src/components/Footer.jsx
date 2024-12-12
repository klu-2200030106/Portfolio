
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            GitHub
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            Twitter
          </a>
        </div>
        <p className="text-gray-400">
          © 2024 Your Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer