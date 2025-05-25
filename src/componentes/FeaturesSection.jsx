import { FaBuilding, FaDumpster, FaTruckMoving } from "react-icons/fa";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";


const features = [
    {
        icon: FaDumpster,
        title: "Extracción Precisa",
        text: "Clasificación granulométrica según normativa UNE-EN 933-1"
    },
    {
        icon: FaTruckMoving,
        title: "Flota Propia",
        text: "25 camiones articulados para transporte garantizado"
    },
    {
        icon: FaBuilding,
        title: "Suministro a Obra",
        text: "Servicio integral desde cantera hasta ubicación final"
    }
];

export default function FeaturesSection() {
    return (
        <Section className="py-20 bg-gray-50">
            <RevealOnScroll delay={100}>
                <SectionTitle
                    title="Nuestra Garantía"
                    subtitle="Por qué elegirnos"
                    className="text-center mb-16"
                />
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <RevealOnScroll delay={100}>
                        <div 
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <feature.icon className="text-4xl text-amber-600 mb-6" />
                            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.text}</p>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </Section>
    );
}