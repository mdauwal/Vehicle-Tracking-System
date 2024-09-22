import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DoneIcon from '@mui/icons-material/Done';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Link } from 'react-router-dom';

function MapComponent({ onLocationSelected = () => {} }) {
  const mapRef = useRef(null);
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);
  const [copyIcon, setCopyIcon] = useState(<FileCopyIcon />);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!mapRef.current) {
      const mapElement = document.getElementById('map');

      if (mapElement && !mapElement._leaflet_id) {
        const mapInstance = L.map(mapElement).setView([9.060736, 7.487354], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
          mapInstance
        );

        mapInstance.on('click', (e) => {
          const coordinates = [e.latlng.lat, e.latlng.lng];
          onLocationSelected(coordinates);
          setSelectedCoordinates(coordinates);
          setIsCopied(false);
        });

        mapRef.current = mapInstance;
      }
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [onLocationSelected]);

  const handleCopyCoordinates = () => {
    if (selectedCoordinates) {
      const formattedCoordinates = formatCoordinates(selectedCoordinates);
      navigator.clipboard
        .writeText(formattedCoordinates)
        .then(() => {
          setCopyIcon(<DoneIcon />);
          setIsCopied(true);
        })
        .catch((error) => {
          console.error('Error copying coordinates:', error);
        });
    }
  };

  function formatCoordinates(coordinates) {
    const latitude = coordinates[0].toFixed(8);
    const longitude = coordinates[1].toFixed(8);
    return `${latitude},${longitude}`;
  }

  return (
    <div className="relative">
      <div id="map"></div>

      <Link
        to="/destination-tracking"
        className="absolute top-5 right-2 bg-white text-blue-600 py-2 px-4 rounded-full font-bold shadow-lg z-[1000]"
      >
        Back to Search Route
      </Link>
      {selectedCoordinates && (
        <div>
          <p style={{ color: 'white' }}>
            {formatCoordinates(selectedCoordinates)}
          </p>
          <Button
            variant="contained"
            color="success"
            onClick={handleCopyCoordinates}
            startIcon={copyIcon}
            disabled={isCopied}
          >
            {isCopied ? 'Copied' : 'Copy'}
          </Button>
        </div>
      )}
    </div>
  );
}

export default MapComponent;
