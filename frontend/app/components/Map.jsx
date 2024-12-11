import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet for marker handling
import 'leaflet/dist/leaflet.css'; // Leaflet CSS for styling

export function Map() {
  const [currentLocation, setCurrentLocation] = useState({ lat: 40.7128, lng: -74.0060 }); // Default to NYC
  const [markers, setMarkers] = useState([]);

  // Fetch user's current location and update map center
  const fetchNearbyParking = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
        searchNearbyParking(latitude, longitude); // Fetch nearby parking spots
      });
    }
  };

  // Placeholder function for fetching nearby parking
  const searchNearbyParking = (lat, lng) => {
    // In a real application, use an API to get nearby parking data
    // Example of mock data for parking spots
    const mockParkingData = [
      { lat: lat + 0.01, lng: lng + 0.01, title: 'Parking Spot 1' },
      { lat: lat - 0.01, lng: lng - 0.01, title: 'Parking Spot 2' },
    ];
    setMarkers(mockParkingData); // Set parking markers based on fetched data
  };

  useEffect(() => {
    fetchNearbyParking(); // Fetch parking on component mount
  }, []);

  return (
    <MapContainer
      center={currentLocation}
      zoom={13}
      style={{ width: '100%', height: '100vh' }} // Set map height to full viewport height
    >
      {/* Use OpenStreetMap tiles */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {/* Add markers for nearby parking spots */}
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={{ lat: marker.lat, lng: marker.lng }}
          icon={new L.Icon({ iconUrl: 'https://example.com/marker-icon.png' })} // Custom marker icon (optional)
        >
          <Popup>{marker.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
