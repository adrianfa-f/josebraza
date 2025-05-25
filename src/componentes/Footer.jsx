import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                {/* Contact Info */}
                <div className="grid md:grid-cols-3 gap-8 border-t border-gray-700 pt-12">
                    {/* Locations */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Sedes Operativas</h4>
                        <ul className="space-y-3">
                            {[
                                'Carretera Ca-3110, S/N, 11595 Jerez de la Frontera, Cádiz',
                                'Calle Cruz De La Palma, 1, 11403 Jerez de la Frontera, Cádiz',
                            ].map((address, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <FaMapMarker className="text-amber-500 mt-1" />
                                    {address}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Contacts */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contacto Directo</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://wa.me/34956237910" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-amber-500">
                                    <FaPhone/>
                                    +34 956237910
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@geomateriales.com" className="flex items-center gap-3 hover:text-amber-500">
                                    <FaEnvelope />
                                    info@geomateriales.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Legal */}
                    <div>
                        <h5 className="font-semibold mb-4">Legal</h5>
                        <ul className="space-y-3">
                            <li>
                                <Link 
                                    to="/legal#privacidad" 
                                    className="hover:text-amber-500 transition-colors"
                                >
                                    Política de Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/legal#condiciones" 
                                    className="hover:text-amber-500 transition-colors"
                                >
                                    Condiciones de Servicio
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/legal#aviso" 
                                    className="hover:text-amber-500 transition-colors"
                                >
                                    Aviso Legal
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                    
                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-700 text-center">
                    <p>© 2023 GeoMateriales S.L. Todos los derechos reservados</p>
                    <p className="mt-2 text-sm text-gray-500">CIF: B12345678 - Registro Mercantil de Barcelona</p>
                </div>
            </div>
        </footer>
    );
}