import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    const navbarHeight = 64
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/iconoemo.png" 
              alt="EMO Ingenieros Logo" 
              className="h-9 w-auto mr-2"
            />
            <h1 className="flex items-baseline whitespace-nowrap">
              <span className="text-2xl sm:text-3xl logo-emo text-emo-blue">EMO</span>
              <span className={`text-xl sm:text-2xl logo-ingenieros ${isScrolled ? 'text-emo-orange' : 'text-white'}`}>Ingenieros</span>
            </h1>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a 
              href="#inicio" 
              onClick={(e) => handleNavClick(e, 'inicio')}
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-emo-blue' : 'text-white hover:text-emo-blue'
              }`}
            >
              Inicio
            </a>
            <a 
              href="#servicios"
              onClick={(e) => handleNavClick(e, 'servicios')}
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-emo-blue' : 'text-white hover:text-emo-blue'
              }`}
            >
              Servicios
            </a>
            <a 
              href="#nosotros"
              onClick={(e) => handleNavClick(e, 'nosotros')}
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-emo-blue' : 'text-white hover:text-emo-blue'
              }`}
            >
              Nosotros
            </a>
            <a 
              href="#contacto"
              onClick={(e) => handleNavClick(e, 'contacto')}
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 ${isScrolled ? 'bg-white' : 'bg-black bg-opacity-75'}`}>
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, 'inicio')}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-emo-blue hover:bg-gray-50' 
                  : 'text-white hover:text-emo-blue hover:bg-black hover:bg-opacity-50'
              }`}
            >
              Inicio
            </a>
            <a
              href="#servicios"
              onClick={(e) => handleNavClick(e, 'servicios')}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-emo-blue hover:bg-gray-50' 
                  : 'text-white hover:text-emo-blue hover:bg-black hover:bg-opacity-50'
              }`}
            >
              Servicios
            </a>
            <a
              href="#nosotros"
              onClick={(e) => handleNavClick(e, 'nosotros')}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-emo-blue hover:bg-gray-50' 
                  : 'text-white hover:text-emo-blue hover:bg-black hover:bg-opacity-50'
              }`}
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, 'contacto')}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-emo-blue hover:bg-gray-50' 
                  : 'text-white hover:text-emo-blue hover:bg-black hover:bg-opacity-50'
              }`}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
