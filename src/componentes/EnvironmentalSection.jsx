import { FaLeaf } from "react-icons/fa";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

export default function EnvironmentalSection() {
    return (
        <Section className="py-20 bg-green-50">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                    <SectionTitle
                        title="Compromiso Ecológico"
                        subtitle="Sostenibilidad"
                        className="mb-8"
                    />

                    <p className="text-gray-600 mb-6">
                        Implementamos técnicas de rehabilitación de terrenos y sistemas de 
                        producción circular que reducen nuestro impacto ambiental en un 65%.
                    </p>

                    <ul className="space-y-4">
                        {['Reutilización del 95% del agua', '0 vertidos químicos', 'Restauración de canteras'].map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <FaLeaf className="text-green-600 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Image */}
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                    <img 
                        src="https://cdn.pixabay.com/photo/2022/05/06/20/19/forest-7179046_640.jpg" 
                        alt="Proceso ecológico" 
                        className="w-full h-96 object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-800/60" />
                </div>
            </div>
        </Section>
    );
}