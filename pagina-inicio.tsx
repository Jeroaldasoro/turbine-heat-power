import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Globe, Search } from "lucide-react"

export default function PaginaInicio() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      title: "Somos Turbine Heat and Power",
      subtitle: "una empresa de tecnología energética",
      description: "Llevamos la energía hacia adelante - haciéndola más segura, limpia y eficiente para las personas y el planeta.",
      image: "/placeholder.svg?height=600&width=1200&text=Slide+1"
    },
    {
      title: "Soluciones Innovadoras",
      subtitle: "para un futuro sostenible",
      description: "Nuestras turbinas de última generación están diseñadas para maximizar la eficiencia y minimizar el impacto ambiental.",
      image: "/placeholder.svg?height=600&width=1200&text=Slide+2"
    },
    {
      title: "Experiencia Global",
      subtitle: "con impacto local",
      description: "Con presencia en más de 50 países, ofrecemos soluciones adaptadas a las necesidades energéticas locales.",
      image: "/placeholder.svg?height=600&width=1200&text=Slide+3"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:underline">Contáctenos</a>
            <a href="#" className="text-sm hover:underline">Carreras</a>
            <a href="#" className="text-sm hover:underline">Inversores</a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">THP $36.45</span>
            <button className="flex items-center text-sm">
              <Globe className="h-4 w-4 mr-1" />
              Español
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src="/placeholder.svg?height=40&width=200&text=Turbine+Heat+and+Power" alt="Turbine Heat and Power Logo" className="h-10" />
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Soluciones Destacadas</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Productos y Servicios</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Compañía</a>
          </div>
          <button>
            <Search className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </nav>

      <main className="flex-grow">
        <section className="relative h-[600px] bg-cover bg-center" style={{backgroundImage: `url(${slides[currentSlide].image})`}}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-5xl font-bold mb-2">{slides[currentSlide].title}</h1>
              <h2 className="text-3xl mb-4">{slides[currentSlide].subtitle}</h2>
              <p className="text-xl mb-8">{slides[currentSlide].description}</p>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                EXPLORAR
              </Button>
            </div>
          </div>
          <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
            <ChevronLeft className="h-6 w-6 text-black" />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
            <ChevronRight className="h-6 w-6 text-black" />
          </button>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Comunicado de Prensa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">15 de octubre, 2024</p>
                  <h3 className="text-lg font-semibold mb-2">Turbine Heat and Power recibe pedido de tecnología de compresores de baja emisión para proyecto en aguas profundas</h3>
                  <Button variant="outline" className="mt-4">Leer más</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Comunicado de Prensa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">14 de octubre, 2024</p>
                  <h3 className="text-lg font-semibold mb-2">Turbine Heat and Power y Energía Verde desarrollarán capacidades digitales de próxima generación</h3>
                  <Button variant="outline" className="mt-4">Leer más</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Comunicado de Prensa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">8 de octubre, 2024</p>
                  <h3 className="text-lg font-semibold mb-2">Turbine Heat and Power obtiene el pedido más grande de línea de compresores integrados en la historia de la compañía</h3>
                  <Button variant="outline" className="mt-4">Leer más</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sobre Nosotros</h3>
              <p className="text-sm">Turbine Heat and Power es un proveedor líder de soluciones energéticas innovadoras, representando las mejores marcas de la industria.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:underline">Inicio</a></li>
                <li><a href="#" className="hover:underline">Productos</a></li>
                <li><a href="#" className="hover:underline">Servicios</a></li>
                <li><a href="#" className="hover:underline">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contáctenos</h3>
              <p className="text-sm">Calle Energía 123<br />Ciudad Potencia, CP 12345<br />Teléfono: (123) 456-7890<br />Email: info@turbineheatpower.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398  1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2024 Turbine Heat and Power. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
