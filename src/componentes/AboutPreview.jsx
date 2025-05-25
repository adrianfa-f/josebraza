import { FaHistory } from "react-icons/fa";
import Section from "../componentes/Section";
import SectionTitle from "../componentes/SectionTitle";
import ButtonLink from "../componentes/ButtonLink";

export default function AboutPreview() {
    return (
        <Section className="py-20">
            <div className="max-w-4xl mx-auto text-center">
                <SectionTitle
                    title="40 Años Excavando Calidad"
                    subtitle="Nuestra trayectoria"
                />

                <p className="text-lg text-gray-600 mb-8">
                    Desde 1982 suministrando materiales minerales para los principales proyectos 
                    de infraestructura del país, manteniendo nuestro compromiso con la excelencia.
                </p>

                <ButtonLink to="/nosotros" variant="link" className="text-amber-600">
                    Conoce nuestra historia <FaHistory className="ml-2" />
                </ButtonLink>
            </div>
        </Section>
    );
}