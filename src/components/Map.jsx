import GoogleMapReact from "google-map-react";
import { MdLocationOn } from "react-icons/md";
import { GoogleApiKey } from "./MapApiKey";

const Map = () => {
    const AnyReactComponent = ({ text }) => <div style={{color: 'red'}}>     <MdLocationOn className="text-3xl"/></div>;
    const defaultProps = {
        center: {
          lat: 23.822350,
          lng: 90.365417
        },
        zoom: 11
      };

return (
    <div className="text-center justify-center items-center flex flex-col">
        <h1 className="my-5 text-2xl text-center">The location is</h1>

    <div  style={{ height: '450px', width: '450px' }} className="my-5">
      <GoogleMapReact
        bootstrapURLKeys={{ key: GoogleApiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="Dhaka"
          
        />
        <div className="text-4xl">
   
        </div>
 
      </GoogleMapReact>
    </div>
    </div>

    );
};

export default Map;