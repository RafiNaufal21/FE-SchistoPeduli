import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polygon, Popup, Marker } from 'react-leaflet';

const PolygonMap = () => {
    const [polygons, setPolygons] = useState([]);

    useEffect(() => {
        const fetchPolygons = async () => {
            try {
                const response = await fetch('http://localhost:2004/poligon');
                const data = await response.json();
                setPolygons(data);
            } catch (error) {
                console.error('Error fetching polygons:', error);
            }
        };

        fetchPolygons();
    }, []);

    return (
        
        <MapContainer center={[-1.389216, 120.322075]} zoom={13} style={{ height: '80vh', width: '80%', margin: "20px auto" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {polygons.map((polygon, index) => {
                // Mengonversi string WKT menjadi array koordinat
                const coords = polygon.coordinates
                    .replace('POLYGON((', '')
                    .replace('))', '')
                    .split(',')
                    .map(coord => {
                        const [lng, lat] = coord.trim().split(' ').map(Number);
                        return [lat, lng]; // Leaflet menggunakan format [lat, lng]
                    });

                // Menampilkan polygon di peta
                return (
                    <Polygon key={index} positions={coords} color="blue">
                        <Popup>
                            <strong>Polygon {index + 1}</strong>
                        </Popup>
                    </Polygon>
                );
            })}

            {polygons.map((polygon, index) => {
                const coords = polygon.coordinates
                    .replace('POLYGON((', '')
                    .replace('))', '')
                    .split(',')
                    .map(coord => {
                        const [lng, lat] = coord.trim().split(' ').map(Number);
                        return [lat, lng]; // Leaflet menggunakan format [lat, lng]
                    });

                // Menambahkan marker untuk setiap koordinat
                return coords.map((coord, i) => (
                    <Marker key={`${index}-${i}`} position={coord}>
                        <Popup>
                            <strong>Koordinat: {coord.join(', ')}</strong>
                        </Popup>
                    </Marker>
                ));
            })}
        </MapContainer>
    );
};

export default PolygonMap;