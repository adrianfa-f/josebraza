import { FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';
import SectionTitle from '../componentes/SectionTitle';
import Footer from '../componentes/Footer';
import Header from '../componentes/Header';
import InteractiveMap from '../componentes/InteractiveMap';

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-16">
                <SectionTitle
                    title="Contacto"
                    subtitle="Estamos para ayudarte"
                    align="center"
                />

                <div className="grid lg:grid-cols-[1fr_600px] gap-12 mt-12">
                    {/* Formulario */}
                    <div className="bg-white p-8 rounded-xl shadow-lg order-2 lg:order-1">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-700 mb-2">Nombre completo</label>
                                <input 
                                    type="text" 
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Correo electrónico</label>
                                <input 
                                    type="email" 
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Mensaje</label>
                                <textarea 
                                    rows="4"
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            <button className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                    {/* Información y Mapa */}
                    <div className="space-y-8 order-1 lg:order-2">
                        {/* Bloque de Información */}
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>

                            <div className="space-y-6">
                                {/* Sucursales */}
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
                                        <FaMapMarker className="text-amber-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium mb-2">Planta Principal</p>
                                            <p className="text-gray-600">
                                                Carretera Ca-3110, S/N<br/>
                                                11595 Jerez de la Frontera, Cádiz
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                        <FaMapMarker className="text-amber-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium mb-2">Oficinas Centrales</p>
                                            <p className="text-gray-600">
                                                Calle Cruz De La Palma, 1<br/>
                                                11403 Jerez de la Frontera, Cádiz
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Contactos */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <FaPhone className="text-amber-600 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium">Teléfono 24h</p>
                                            <a href="tel:+34956237910" className="text-gray-600 hover:text-amber-700">
                                                +34 956 237 910
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <FaEnvelope className="text-amber-600 flex-shrink-0" />
                                        <div>
                                            <p className="font-medium">Correo Electrónico</p>
                                            <a href="mailto:info@minerales.com" className="text-gray-600 hover:text-amber-700">
                                                info@minerales.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="rounded-xl mt-10 overflow-hidden shadow-lg">
                    <InteractiveMap />
                </div>
            </main>

            <Footer />
        </div>
    );
}