import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const locations = {
  sucursal1: {
    name: "Planta Principal",
    address: "Carretera Ca-3110, S/N, 11595 Jerez de la Frontera, Cádiz",
    coords: [36.7218, -6.1157]
  },
  sucursal2: {
    name: "Oficinas Centrales",
    address: "Calle Cruz De La Palma, 1, 11403 Jerez de la Frontera, Cádiz",
    coords: [36.6874, -6.1412]
  }
};

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function InteractiveMap() {
    const [selectedLocation, setSelectedLocation] = useState('sucursal1');

    return (
        <div className="grid md:grid-cols-[300px_1fr] gap-6 h-[600px]">
            {/* Panel lateral */}
            <div className="bg-white p-4 rounded-xl shadow-lg overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">Nuestras Instalaciones</h2>

                <div className="space-y-4">
                    {Object.entries(locations).map(([key, location]) => (
                        <div
                            key={key}
                            onClick={() => setSelectedLocation(key)}
                            className={`p-4 rounded-lg cursor-pointer transition-all ${
                                selectedLocation === key
                                    ? 'bg-amber-50 border-2 border-amber-500'
                                    : 'bg-gray-50 hover:bg-gray-100'
                            }`}
                        >
                            <h3 className="font-semibold text-gray-900">{location.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{location.address}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Mapa */}
            <div className="rounded-xl overflow-hidden shadow-lg h-full">
                <MapContainer
                    key={selectedLocation}
                    center={locations[selectedLocation].coords}
                    zoom={15}
                    scrollWheelZoom={true}
                    className="h-full"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={locations[selectedLocation].coords}>
                        <Popup className="leaflet-popup-content-wrapper">
                            <div className="leaflet-popup-content">
                                <h3 className="font-bold text-lg mb-2">{locations[selectedLocation].name}</h3>
                                <p className="text-sm">{locations[selectedLocation].address}</p>
                            </div>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}