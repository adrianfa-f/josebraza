import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionTitle from '../componentes/SectionTitle';
import { NavLink } from 'react-router-dom';

export default function LegalPage() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow container mx-auto px-4 py-16 max-w-4xl">
                <SectionTitle
                    title="Documentos Legales"
                    subtitle="Información importante"
                    align="center"
                />

                {/* Índice */}
                <div className="bg-white p-6 rounded-xl shadow-lg mb-12">
                    <h3 className="text-lg font-semibold mb-4">Navegación Rápida:</h3>
                    <ul className="space-y-2">
                        <li>
                            <NavLink to={'/'} className="text-amber-600 hover:underline">
                                Inicio
                            </NavLink>
                        </li>
                        <li><a href="#privacidad" className="text-amber-600 hover:underline">Política de Privacidad</a></li>
                        <li><a href="#condiciones" className="text-amber-600 hover:underline">Condiciones de Servicio</a></li>
                        <li><a href="#aviso" className="text-amber-600 hover:underline">Aviso Legal</a></li>
                    </ul>
                </div>

                {/* Política de Privacidad */}
                <section id="privacidad" className="mb-16 scroll-mt-20">
                    <h2 className="text-2xl font-bold mb-6">Política de Privacidad</h2>
                    <div className="space-y-4 text-gray-600">
                        <p><strong>Última actualización:</strong> 1 de Enero de 2024</p>

                        <p>En <strong>MineralExtract S.L.</strong>, nos comprometemos a proteger y respetar su privacidad. Esta política explica cómo recopilamos, usamos y protegemos su información personal.</p>

                        <h3 className="text-lg font-semibold mt-6">1. Información que recopilamos</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Datos de contacto (nombre, email, teléfono)</li>
                            <li>Información de transacciones comerciales</li>
                            <li>Datos técnicos (dirección IP, tipo de navegador)</li>
                            <li>Registros de comunicación</li>
                        </ul>

                        <h3 className="text-lg font-semibold mt-6">2. Uso de sus datos</h3>
                        <p>Utilizamos su información para:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Procesar solicitudes y proporcionar servicios</li>
                            <li>Mejorar nuestra web y servicios</li>
                            <li>Cumplir con obligaciones legales</li>
                            <li>Enviar comunicaciones comerciales (solo con consentimiento)</li>
                        </ul>

                        <h3 className="text-lg font-semibold mt-6">3. Bases legales</h3>
                        <p>El tratamiento se basa en:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Ejecución de contratos</li>
                            <li>Consentimiento explícito</li>
                            <li>Intereses legítimos</li>
                        </ul>

                        <h3 className="text-lg font-semibold mt-6">4. Derechos ARCO</h3>
                        <p>Usted tiene derecho a:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Acceder a sus datos personales</li>
                            <li>Solicitar rectificación o eliminación</li>
                            <li>Oponerse al tratamiento</li>
                            <li>Solicitar limitación del tratamiento</li>
                            <li>Portabilidad de datos</li>
                        </ul>
                        <p className="mt-4">Para ejercer estos derechos, contacte en <a href="mailto:privacidad@mineralextract.com" className="text-amber-600 hover:underline">privacidad@mineralextract.com</a></p>
                    </div>
                </section>

                {/* Condiciones de Servicio */}
                <section id="condiciones" className="mb-16 scroll-mt-20">
                    <h2 className="text-2xl font-bold mb-6">Condiciones de Servicio</h2>
                    <div className="space-y-4 text-gray-600">
                        <p><strong>Vigencia:</strong> 1 de Enero de 2024</p>

                        <h3 className="text-lg font-semibold mt-6">1. Aceptación de términos</h3>
                        <p>El acceso y uso de este sitio web implica la aceptación plena de estas condiciones.</p>

                        <h3 className="text-lg font-semibold mt-6">2. Servicios ofrecidos</h3>
                        <p>MineralExtract ofrece:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Información sobre productos y servicios</li>
                            <li>Formularios de contacto comercial</li>
                            <li>Documentación técnica descargable</li>
                        </ul>

                        <h3 className="text-lg font-semibold mt-6">3. Obligaciones del usuario</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Proporcionar información veraz</li>
                            <li>No usar la web para fines ilegales</li>
                            <li>Respetar propiedad intelectual</li>
                        </ul>

                        <h3 className="text-lg font-semibold mt-6">4. Limitación de responsabilidad</h3>
                        <p>MineralExtract no se responsabiliza por:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Errores u omisiones en el contenido</li>
                            <li>Daños por uso incorrecto del sitio</li>
                            <li>Contenido de enlaces externos</li>
                        </ul>
                    </div>
                </section>

                {/* Aviso Legal */}
                <section id="aviso" className="mb-16 scroll-mt-20">
                    <h2 className="text-2xl font-bold mb-6">Aviso Legal</h2>
                    <div className="space-y-4 text-gray-600">
                        <h3 className="text-lg font-semibold">Identificación social</h3>
                        <ul className="space-y-2">
                            <li><strong>Denominación:</strong> MineralExtract S.L.</li>
                            <li><strong>CIF:</strong> B12345678</li>
                            <li><strong>Domicilio:</strong> Carretera Ca-3110, S/N, 11595 Jerez de la Frontera, Cádiz</li>
                            <li><strong>Registro Mercantil:</strong> Tomo 1234, Folio 56, Hoja CA-123456</li>
                        </ul>

                        <h3 className="text-lg font-semibold mt-6">Propiedad intelectual</h3>
                        <p>Todos los contenidos de esta web (textos, imágenes, logotipos) son propiedad de MineralExtract S.L. o están usados bajo licencia. Queda prohibida su reproducción sin autorización expresa.</p>

                        <h3 className="text-lg font-semibold mt-6">Protección de datos</h3>
                        <p>Los datos personales se tratan según el Reglamento (UE) 2016/679 (GDPR) y la LOPDGDD 3/2018. Para más información, consulte nuestra Política de Privacidad.</p>

                        <h3 className="text-lg font-semibold mt-6">Ley aplicable</h3>
                        <p>Este sitio se rige por la legislación española. Para cualquier controversia, se someterán a los Juzgados y Tribunales de Jerez de la Frontera.</p>

                        <h3 className="text-lg font-semibold mt-6">Contacto</h3>
                        <p>Para cuestiones legales:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Email: <a href="mailto:legal@mineralextract.com" className="text-amber-600 hover:underline">legal@mineralextract.com</a></li>
                            <li>Teléfono: <a href="tel:+34956237910" className="text-amber-600 hover:underline">+34 956 237 910</a></li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}