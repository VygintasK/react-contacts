import './Map.css';

const Map = ({mapSrc}) => {
  return (
    <div className="map-wrapper">
      <iframe 
        title='Maps-Frame'
        src={mapSrc}
        width="600" 
        height="450" 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;