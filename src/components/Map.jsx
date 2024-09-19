import GoogleMapReact from "google-map-react";

const Map = () => {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
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
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        
      >
        <AnyReactComponent
          lat={23.822350}
          lng={90.365417}
          text="Dhaka"
        />
      </GoogleMapReact>
    </div>
    </div>

    );
};

export default Map;