import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export const MapPage = () => {
  return (
    <div className="">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} className="h-[calc(100vh-68px)]">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
