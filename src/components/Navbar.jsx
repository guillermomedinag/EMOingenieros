import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <img 
              src="/iconoemo.png" 
              alt="EMO Ingenieros Logo" 
              className="h-8 w-auto"
            />
            <h1 className="text-2xl flex items-center space-x-2">
              <span className="text-emo-blue logo-emo">EMO</span>
              <span className={`logo-ingenieros ${isScrolled ? 'text-emo-orange' : 'text-white'}`}>INGENIEROS</span>
            </h1>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a 
              href="#inicio" 
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-emo-blue' : 'text-white hover:text-emo-blue'
              }`}
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-emo-blue' : 'text-white hover:text-emo-blue'
              }`}
            >
              Servicios
            </a>
            <a 
              href="#nosotros" 
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-emo-blue' : 'text-white hover:text-emo-blue'
              }`}
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-emo-blue' : 'text-white hover:text-emo-blue'
              }`}
            >
              Contacto
            </a>
          </div>

          {/* Botón de menú móvil */}
          <div className="sm:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-gray-700 hover:text-emo-blue' : 'text-white hover:text-emo-blue'
              }`}
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
