import { useState, useEffect } from 'react'

const Hero = () => {
  const slides = [
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Ingeniería y topografía'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Estudios hidrológicos'
    },
    {
      type: 'video',
      url: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=164&oauth2_token_id=57447761',
      alt: 'Drone survey'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Planificación de proyectos'
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[50vh]">
      {/* Slider */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.type === 'image' ? (
              <img
                src={slide.url}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              >
                <source src={slide.url} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            )}
          </div>
        ))}
      </div>

      {/* Overlay con contenido */}
      <div className="relative z-10 h-full bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <div className="mb-8">
              <img 
                src="/LOGOEMO.png" 
                alt="EMO Ingenieros Logo" 
                className="w-auto h-24 sm:h-32 md:h-40 object-contain"
              />
            </div>
            <p className="mt-3 text-xl sm:text-2xl text-gray-100 mb-8">
              Expertos en estudios hidrológicos, hidráulicos, topografía y aerofotogrametría. 
              Transformamos desafíos en soluciones precisas y sostenibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emo-blue hover:bg-blue-700 md:text-lg transition duration-300"
              >
                Contáctanos
              </a>
              <a
                href="#servicios"
                className="inline-block px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 md:text-lg transition duration-300"
              >
                Nuestros Servicios
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores de slides */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero
