import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
export class MapContainer extends Component {

    constructor(){
        super()
    }
    
   render() {
      return (
         <Map google={this.props.google} zoom={14}>
             <Marker 
                  onClick={this.onMarkerClick}
                  name={'Current location'} 
             />
             <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
          </Map>
      );
   }
}
export default GoogleApiWrapper({
       apiKey: ('AIzaSyCN43bnRTA_fddds2x98_JUG32vr-C8Jws')
})(MapContainer)