import { FaHardHat, FaMapMarked } from 'react-icons/fa';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import SectionTitle from '../componentes/SectionTitle';

const milestones = [
    {
        year: 1996,
        title: "Fundación",
        content: "Inicio de actividades en extracción de áridos para construcción local"
    },
    {
        year: 2005,
        title: "Expansión Logística",
        content: "Adquisición de primera flota de camiones volquete Scania"
    },
    {
        year: 2012,
        title: "Certificación CE",
        content: "Áridos certificados según norma UNE-EN 12620 para hormigón"
    },
    {
        year: 2020,
        title: "Modernización",
        content: "Inversión en maquinaria CAT de última generación"
    }
];

export default function About() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-16">
                <SectionTitle 
                    title="Nuestra Trayectoria" 
                    subtitle="Desde 1996" 
                    align="center"
                />

                {/* Timeline */}
                <div className="max-w-4xl mx-auto mt-12 space-y-12">
                    {milestones.map((item, index) => (
                        <div key={item.year} className="relative pl-24">
                            <div className="absolute left-0 top-0 w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                                {item.year}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.content}</p>
                        </div>
                    ))}
                </div>
                
                {/* Especialización Técnica */}
                <SectionTitle 
                    title="Núcleo Operativo" 
                    subtitle="Áreas de Dominio" 
                    className="mt-20"
                />

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex items-center gap-4 mb-6">
                            <FaHardHat className="text-4xl text-amber-600" />
                            <h3 className="text-2xl font-semibold">Procesos Productivos</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-amber-600">▸</span>
                                <div>
                                    <p className="font-medium">Extracción Mecanizada</p>
                                    <p className="text-gray-600">Capacidad diaria de 1.200 toneladas</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-amber-600">▸</span>
                                <div>
                                    <p className="font-medium">Clasificación Granulométrica</p>
                                    <p className="text-gray-600">Cribas vibrantes de 3 niveles</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-amber-600">▸</span>
                                <div>
                                    <p className="font-medium">Lavado de Áridos</p>
                                    <p className="text-gray-600">Sistema de recirculación de aguas</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex items-center gap-4 mb-6">
                            <FaMapMarked className="text-4xl text-amber-600" />
                            <h3 className="text-2xl font-semibold">Cobertura Logística</h3>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <p className="font-medium">Flota Propia</p>
                                <p className="text-gray-600">25 camiones articulados de 40Tn</p>
                            </div>
                            <div>
                                <p className="font-medium">Área de Servicio</p>
                                <p className="text-gray-600">Radio de 150km desde cantera principal</p>
                            </div>
                            <div>
                                <p className="font-medium">Capacidad Diaria</p>
                                <p className="text-gray-600">Hasta 30 viajes/día garantizados</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
              
            <Footer />
        </div>
    );
}