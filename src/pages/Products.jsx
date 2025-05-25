import { useState } from 'react';
import { FaBalanceScale, FaRuler } from 'react-icons/fa';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import SectionTitle from '../componentes/SectionTitle';

const products = {
    gravas: {
        tipos: [
            {
                nombre: "Grava 20-40 mm",
                aplicacion: "Hormigón estructural",
                norma: "UNE-EN 12620",
                densidad: "1.65 t/m³ ± 0.10",
                absorcion: "<1.5%"
            },
            {
                nombre: "Grava 5-20 mm",
                aplicacion: "Prefabricados",
                norma: "UNE-EN 13043",
                densidad: "1.60 t/m³ ± 0.15",
                absorcion: "<2.0%"
            }
        ]
    },
    arenas: {
        tipos: [
            {
                nombre: "Arena 0-4 mm",
                aplicacion: "Morteros",
                norma: "UNE-EN 13139",
                densidad: "1.50 t/m³ ± 0.10",
                equivalenteArena: ">75%"
            },
            {
                nombre: "Arena Lavada",
                aplicacion: "Hormigón armado",
                norma: "UNE-EN 12620",
                densidad: "1.55 t/m³ ± 0.08",
                equivalenteArena: ">85%"
            }
        ]
    }
};

export default function Products() {
  const [activeProduct, setActiveProduct] = useState('gravas');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <SectionTitle
          title="Catálogo Técnico"
          subtitle="Materiales Certificados"
          align="center"
        />

        {/* Selector de Productos */}
        <div className="flex justify-center gap-4 mt-12">
          {Object.keys(products).map((product) => (
            <button
              key={product}
              onClick={() => setActiveProduct(product)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeProduct === product
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {product.charAt(0).toUpperCase() + product.slice(1)}
            </button>
          ))}
        </div>

        {/* Especificaciones Técnicas */}
        <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
          {products[activeProduct].tipos.map((tipo, index) => (
            <div key={index} className="p-8 border-b last:border-b-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-amber-100 p-3 rounded-lg">
                  {activeProduct === 'gravas' ? (
                    <FaBalanceScale className="text-2xl text-amber-600" />
                  ) : (
                    <FaRuler className="text-2xl text-amber-600" />
                  )}
                </div>
                <h3 className="text-2xl font-semibold">{tipo.nombre}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Especificaciones */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Características</h4>
                  <dl className="space-y-3">
                    <div>
                      <dt className="font-medium">Aplicación Principal</dt>
                      <dd className="text-gray-600">{tipo.aplicacion}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Normativa</dt>
                      <dd className="text-gray-600">{tipo.norma}</dd>
                    </div>
                  </dl>
                </div>

                {/* Parámetros Técnicos */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Parámetros Físicos</h4>
                  <dl className="space-y-3">
                    {Object.entries(tipo).map(([key, value]) => {
                      if (key === 'nombre' || key === 'aplicacion' || key === 'norma') return null;
                      return (
                        <div key={key} className="flex justify-between border-b border-gray-100 pb-2">
                          <dt className="font-medium capitalize">{key}</dt>
                          <dd className="text-gray-600 font-mono">{value}</dd>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}