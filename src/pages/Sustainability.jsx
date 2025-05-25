import { FaTree, FaWater, FaRecycle } from 'react-icons/fa';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import SectionTitle from '../componentes/SectionTitle';

const stats = [
    { value: '95%', label: 'Agua Recirculada', icon: <FaWater /> },
    { value: '150ha', label: 'Terreno Rehabilitado', icon: <FaTree /> },
    { value: '0', label: 'Vertidos Contaminantes', icon: <FaRecycle /> }
];

export default function Sustainability() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-16">
                <SectionTitle
                    title="Gestión Sostenible"
                    subtitle="Compromiso Ambiental"
                    align="center"
                />

                {/* Estadísticas */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                            <div className="text-4xl text-amber-600 mb-4 mx-auto">
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
                
                {/* Procesos Ecológicos */}
                <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <FaRecycle className="text-3xl text-green-600" />
                                <h3 className="text-2xl font-semibold">Rehabilitación de Canteras</h3>
                            </div>
                            <ul className="space-y-4 list-disc pl-6">
                                <li>Restauración topográfica según RD 975/2009</li>
                                <li>Revegetación con especies autóctonas</li>
                                <li>Monitorización anual de suelos</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <FaWater className="text-3xl text-blue-600" />
                                <h3 className="text-2xl font-semibold">Gestión Hídrica</h3>
                            </div>
                            <ul className="space-y-4 list-disc pl-6">
                                <li>Sistema de circuito cerrado con decantadores</li>
                                <li>Recuperación del 95% del agua utilizada</li>
                                <li>Tratamiento de lodos certificado</li>
                            </ul>
                        </div>
                    </div>
                
                    {/* Imagen */}
                    <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                        <img 
                            src="https://cdn.pixabay.com/photo/2024/07/16/12/20/pipe-8899206_640.jpg" 
                            alt="Proceso sostenible"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 flex items-end p-8">
                            <p className="text-white text-lg">
                                Técnicas de extracción que garantizan la sostenibilidad a largo plazo
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
}