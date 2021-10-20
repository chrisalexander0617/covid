import React, {Component} from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
/*
"withScriptsjs" will be responsible for making sure our API script is rendered to the head of webpage 
"withGoogleMap" initializes the map that will be wrapped with required outer div elements
*/

/* Styles that changes the theme of the map */
const styles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 13
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#144b53"
            },
            {
                "lightness": 14
            },
            {
                "weight": 1.4
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#08304b"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0c4152"
            },
            {
                "lightness": 5
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b434f"
            },
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b3d51"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "color": "#146474"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#021019"
            }
        ]
    }
]

function MapView(){
    return (
        <GoogleMap 
            options={{
                styles
            }}
            defaultZoom={10}
            defaultCenter={{lat:42, lng: -83}}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(MapView));

export default class Map extends Component
{
    render()
    {
        return (
            <div style={{width:'50vw', height:'100vh'}}>
                <WrappedMap 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&callback=initMap&libraries=&v=weekly`}
                    /* ? */
                    loadingElement={ <div style={{ height:'100%' }} /> }
                     /* the container that the map goes in  */
                    containerElement={ <div style={{ height:'100%' }} /> }
                     /* The actual map */
                    mapElement={ <div style={{ height:'100%' }} /> }
                />
            </div>
        )
    }
}