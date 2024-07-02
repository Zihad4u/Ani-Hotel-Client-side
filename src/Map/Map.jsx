// import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
const Map = () => {
    const position = [23.95544140061605, 90.37669542201193];
    return (
        <div  className="sm:mt-24 mt-8" >
            <div data-aos="fade-up" className="flex justify-center text-[12px] font-semibold sm:text-[42px]" >
                Our Location
            </div>
            <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="w-full mt-16 h-80 md:w-3/4 md:mx-auto border-4 border-indigo-500/100 rounded-lg">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;