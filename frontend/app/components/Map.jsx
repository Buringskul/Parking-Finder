import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

const libraries = ['places']; // Needed for Places API to search nearby locations

export function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Add your API key here
    libraries,
  });

  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  // Set default location to New York City
  const defaultLocation = { lat: 40.7128, lng: -74.0060 };
  const [currentLocation, setCurrentLocation] = useState(defaultLocation);

  // Fetch nearby parking spots
  const fetchNearbyParking = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
        searchNearbyParking(latitude, longitude);
      });
    }
  };

  const searchNearbyParking = (lat, lng) => {
    if (map) {
      const service = new window.google.maps.places.PlacesService(map);
      const request = {
        location: { lat, lng },
        radius: 5000, // Adjust the radius as needed
        type: ['parking'],
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setMarkers(results.map(place => ({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            title: place.name,
          })));
        }
      });
    }
  };

  useEffect(() => {
    fetchNearbyParking(); // Call on component mount to set up map and fetch parking spots
  }, [map]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={12}
      center={currentLocation}
      mapContainerStyle={{ width: '100%', height: '400px' }}
      onLoad={map => setMap(map)}
    >
      {markers.map((marker, index) => (
        <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} title={marker.title} />
      ))}
    </GoogleMap>
  );
}
