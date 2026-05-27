import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

export default function LiveMap() {

  return (

    <div className="rounded-3xl overflow-hidden shadow-2xl">

      <MapContainer
        center={[22.5726, 88.3639]}
        zoom={12}
        style={{ height: "500px", width: "100%" }}
      >

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Restaurant */}

        <Marker position={[22.5726, 88.3639]}>

          <Popup>

            Restaurant Donor <br />
            Surplus Food Available

          </Popup>

        </Marker>

        {/* NGO */}

        <Marker position={[22.5850, 88.3900]}>

          <Popup>

            NGO Ready for Pickup

          </Popup>

        </Marker>

        {/* Volunteer */}

        <Marker position={[22.5600, 88.3500]}>

          <Popup>

            Volunteer En Route

          </Popup>

        </Marker>

      </MapContainer>

    </div>

  );
}