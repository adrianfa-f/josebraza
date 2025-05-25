import { FaBuilding, FaRoad, FaHardHat, FaCalendarAlt, FaPaperPlane, FaBalanceScale } from 'react-icons/fa';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import SectionTitle from '../componentes/SectionTitle';
import { useState } from 'react';

const projects = [
    {
        title: "Autovía del Mediterráneo - Tramo Murcia",
        client: "Acciona Infraestructuras",
        location: "Murcia, España",
        material: "Grava 20-40 mm",
        volume: "85,000 Tn",
        duration: "8 meses",
        image: "https://cdn.pixabay.com/photo/2022/10/18/17/00/night-7530755_640.jpg",
        sector: "infraestructura"
    },
    {
        title: "Edificio Multifuncional Barcelona",
        client: "FCC Construcción",
        location: "Barcelona, España",
        material: "Arena Lavada 0-4 mm",
        volume: "32,000 Tn",
        duration: "14 meses",
        image: "https://cdn.pixabay.com/photo/2023/02/03/14/32/building-7765288_640.jpg",
        sector: "edificacion"
    },
    {
        title: "Planta de Hormigón Armado",
        client: "Hormicemento S.A.",
        location: "Valencia, España",
        material: "Grava 5-20 mm",
        volume: "45,000 Tn",
        duration: "6 meses",
        image: "https://cdn.pixabay.com/photo/2021/12/24/20/22/arches-6891727_640.jpg",
        sector: "industrial"
    }
];

const sectors = [
    { id: 'todos', name: 'Todos los Proyectos' },
    { id: 'infraestructura', name: 'Infraestructura' },
    { id: 'edificacion', name: 'Edificación' },
    { id: 'industrial', name: 'Industrial' }
];

export default function Proyectos() {
    const [selectedSector, setSelectedSector] = useState('todos');
    
    const filteredProjects = selectedSector === 'todos' 
        ? projects 
        : projects.filter(project => project.sector === selectedSector);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-16">
                <SectionTitle
                    title="Proyectos Destacados"
                    subtitle="Casos de Éxito"
                    align="center"
                />

                {/* Filtros por Sector */}
                <div className="flex flex-wrap gap-4 justify-center mt-12 mb-16">
                    {sectors.map(sector => (
                        <button
                            key={sector.id}
                            onClick={() => setSelectedSector(sector.id)}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                                selectedSector === sector.id
                                    ? 'bg-amber-600 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {sector.name}
                        </button>
                    ))}
                </div>
                
                {/* Grid de Proyectos */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="relative h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 p-4">
                                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <FaBuilding className="text-amber-600" />
                                    <span className="font-medium">{project.client}</span>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <FaRoad className="text-gray-400" />
                                        <span>{project.location}</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FaHardHat className="text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-600">Material principal</p>
                                            <p className="font-medium">{project.material}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="flex items-center gap-2">
                                            <FaCalendarAlt className="text-gray-400" />
                                            <span>{project.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaBalanceScale className="text-gray-400" />
                                            <span>{project.volume}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* CTA Presupuesto */}
                <div className="mt-16 text-center bg-amber-50 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4">¿Necesita materiales para su próximo proyecto?</h3>
                    <p className="text-gray-600 mb-6">Nuestros expertos en áridos están listos para asesorarle</p>
                    <button className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition">
                        Solicitar Presupuesto <FaPaperPlane className="inline ml-2" />
                    </button>
                </div>
            </main>
              
            <Footer />
        </div>
    );
}