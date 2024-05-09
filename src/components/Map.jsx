import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import styles from "./Map.module.css";
import { useEffect, useState } from "react"; 
import {useCities} from "../contexts/CitiesProvider"
import { useGeolocation } from "../../hooks/useGeolocation";
import Button from "./Button";
import { useUrlPosition } from "../../hooks/useUrlPosition";

/* eslint-disable */
function Map() {
  const {cities} = useCities();
  //   const [mapPosition, setMapPosition] = useState([40.37435, 49.96515]);
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const { isLoading : isLoadingPosition, position : geolocationPosition, getPosition } = useGeolocation();
  
  // ! We this codes into hooks/useUrlPosition
  // const [searchParams] = useSearchParams();
  // const mapLat= searchParams.get("lat");
  // const mapLng = searchParams.get("lng");
  // console.log(geolocationPosition);
  // console.log(mapLat, mapLng);
  const [lat, lng] = useUrlPosition();

  useEffect(function() {
    if(lat && lng) setMapPosition(()=>[lat, lng]);
  }, [lat, lng]);

  useEffect(function(){
     if(geolocationPosition) setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
     setMapPosition([...mapPosition])
  }, [geolocationPosition]);

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && <Button type='position' onClick={getPosition} >{isLoadingPosition ? "Loading..." : "Use your position"}</Button>}
      <MapContainer className={styles.map} center={mapPosition} /* center={[mapLat, mapLng]} */ zoom={5} scrollWheelZoom={true} >
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
        {cities.map((city) => (
          <Marker position={[city.position.lat, city.position.lng]} key={city.id}> 
            <Popup><span>{city.emoji}</span> <span>{city.cityName}</span></Popup>
          </Marker>
        ))}
        <ChangeCenter  position={mapPosition} /* position={[mapLat || 40.37435,  mapLng || 49.96515]} */ />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

// ! All Component below Derived from LeafLet
function ChangeCenter({position}){
  const map = useMap();             
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click : e => {
      // console.log(e);     {originalEvent: PointerEvent, containerPoint: Point, layerPoint: Point, latlng: LatLng, type: 'click', …}
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    }
  })
}

export default Map;


