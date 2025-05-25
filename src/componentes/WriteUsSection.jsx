import { FaEnvelopeOpenText, FaPenAlt, FaPhone } from "react-icons/fa";
import Section from "./Section";
import Button from "./Button";

export default function WriteUsSection() {
    return (
        <Section className="py-20 bg-gray-900">
            <div className="max-w-4xl mx-auto text-center">
                <FaEnvelopeOpenText className="text-5xl text-amber-500 mb-8 mx-auto" />

                <h2 className="text-4xl font-bold text-white mb-6">
                    ¿Necesita Asesoramiento Especializado?
                </h2>

                <p className="text-xl text-gray-300 mb-8">
                    Nuestros ingenieros están listos para resolver sus consultas técnicas 
                    y ofrecer soluciones a medida.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="primary" onClick={() => window.location.href = "https://wa.me/34956237910?text=Hola%2C%20quiero%20hacer%20una%20consulta"} className="bg-amber-500 hover:bg-amber-600">
                        Escríbanos <FaPenAlt className="ml-2" />
                    </Button>
                    <Button variant="outline" onClick={() => window.location.href = "tel:+34956237910"} className="text-white border-white">
                        Llamar Ahora <FaPhone className="ml-2" />
                    </Button>
                </div>
            </div>
        </Section>
    );
}