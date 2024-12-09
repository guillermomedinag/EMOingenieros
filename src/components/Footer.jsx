const Footer = () => {
  const currentYear = new Date().getFullYear()

  const logoSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='10' fill='%23004AAD'/%3E%3Cpath d='M20 30h60v10H30v10h50v10H30v10h50v10H20z' fill='white'/%3E%3C/svg%3E`

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black" id="contacto">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Logo y descripción */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold flex items-center">
              <img src={logoSvg} alt="EMO Logo" className="w-8 h-8 mr-2" />
              <span className="text-emo-blue">EMO</span>
              <span className="text-emo-orange">Ingenieros</span>
            </h3>
            <p className="text-gray-300 max-w-md">
              Soluciones de ingeniería innovadoras y sostenibles para los desafíos más complejos. Comprometidos con la excelencia y la precisión en cada proyecto.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a href="tel:+51123456789">+51 123 456 789</a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:contacto@emoingenieros.com">contacto@emoingenieros.com</a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>Lima, Perú</span>
              </li>
            </ul>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Proyectos
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria con gradiente */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-800"></div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} EMO Ingenieros. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
