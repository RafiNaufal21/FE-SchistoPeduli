import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';

const PolygonMap = () => {
    const [polygons, setPolygons] = useState([]);

    useEffect(() => {
        const fetchPolygons = async () => {
            try {
                const response = await fetch('http://localhost:1945/poligon');
                const data = await response.json();
                setPolygons(data);
            } catch (error) {
                console.error('Error fetching polygons:', error);
            }
        };

        fetchPolygons();
    }, []);

    return (
        <div style={{ height: '80vh', width: '100%', margin: '0 auto' }}>
            <MapContainer center={[-1.3980, 120.3267]} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {polygons.map((polygon) => {
                    // Mengonversi string WKT menjadi array koordinat
                    const coords = polygon.kordinat.replace('POLYGON((', '').replace('))', '').split(',').map(coord => {
                        const [lng, lat] = coord.trim().split(' ').map(Number);
                        return [lat, lng]; // Leaflet menggunakan format [lat, lng]
                    });
                    return (
                        <Polygon key={polygon.id} positions={coords} color="blue">
                            <Popup>
                                <strong>{polygon.nama}</strong><br />
                                <h1>titik kordinat : {polygon.kordinat}</h1>
                            </Popup>
                        </Polygon>
                    );
                })}
            </MapContainer>
        </div>
    );
};

export default PolygonMap;