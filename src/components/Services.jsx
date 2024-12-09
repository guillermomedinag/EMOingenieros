import { useState } from 'react'

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const services = [
    {
      title: "Estudios Hidrológicos",
      description: "Análisis detallado de recursos hídricos, cuencas y sistemas de drenaje para proyectos de infraestructura. Implementamos soluciones sostenibles para la gestión del agua.",
      icon: "💧",
      bgImage: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Estudios Hidráulicos",
      description: "Diseño y evaluación de sistemas hidráulicos, canales y estructuras de control de agua. Optimizamos el flujo y la distribución del agua en proyectos de ingeniería.",
      icon: "🌊",
      bgImage: "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Topografía",
      description: "Levantamientos topográficos precisos utilizando tecnología de última generación para mapeo y planificación. Generamos datos exactos para la toma de decisiones.",
      icon: "📏",
      bgImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Aerofotogrametría",
      description: "Mapeo aéreo detallado y modelado 3D mediante drones y tecnología fotogramétrica avanzada. Capturamos datos precisos desde perspectivas únicas.",
      icon: "🛩️",
      bgImage: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Gestión Ambiental",
      description: "Estudios de impacto ambiental y desarrollo de soluciones sostenibles para proyectos de ingeniería. Garantizamos el cumplimiento de normativas ambientales.",
      icon: "🌿",
      bgImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Consultoría Técnica",
      description: "Asesoramiento experto en proyectos de ingeniería civil e hidráulica. Brindamos soluciones personalizadas basadas en años de experiencia.",
      icon: "📋",
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ]

  return (
    <div id="servicios" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Soluciones integrales en ingeniería con los más altos estándares de calidad
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-96">
                {/* Imagen de fondo */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
                
                {/* Contenido */}
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <div className="mb-4">
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className={`text-gray-300 transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    {service.description}
                  </p>
                  <div className={`absolute bottom-8 right-8 text-white transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
