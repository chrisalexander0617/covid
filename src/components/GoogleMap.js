import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function MapView(){
    return (
        <GoogleMap 
            defaultZoom={10}
            defaultCenter={{lat:42, lng: -83}}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(MapView));

export default function Map(){
    return (
        <div style={{width:'50vw', height:'100vh'}}>
            <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCN43bnRTA_fddds2x98_JUG32vr-C8Jws&callback=initMap&libraries=&v=weekly`}
                loadingElement={ <div style={{ height:'100%' }} /> }
                containerElement={ <div style={{ height:'100%' }} /> }
                mapElement={ <div style={{ height:'100%' }} /> }
            />
        </div>
    )
}