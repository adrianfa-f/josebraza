import { FaBoxOpen, FaCommentDots } from "react-icons/fa";
import Button from "./Button";

export default function HeroSection() {
    return (
        <section className="relative h-[calc(100vh-5rem)] bg-gray-900">
            {/* Background Image */}
            <img
                src="https://cdn.pixabay.com/photo/2025/03/31/21/18/tiber-river-9505401_640.jpg"
                alt="Operación minera"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            />

            {/* Content */}
            <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Extracción y Suministro de Áridos <span className="text-amber-500">desde 1996</span>
                    </h1>
                    <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                        Especialistas en gravas y arenas para construcción | Transporte integral | Movimiento de tierras
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary">
                            Ver Productos <FaBoxOpen className="ml-2" />
                        </Button>
                        <Button variant="outline">
                            Contactar <FaCommentDots className="ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}