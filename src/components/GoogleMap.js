import React, {useEffect, useState, Component} from 'react';
import DataBox from '../components/DataBox';

import { 
    Marker, 
    InfoWindow,
    GoogleMap, 
    withScriptjs, 
    withGoogleMap 
} from 'react-google-maps';
import axios from 'axios';
/*
"withScriptsjs" will be responsible for making sure our API script is rendered to the head of webpage 
"withGoogleMap" initializes the map that will be wrapped with required outer div elements 
*/

/* Styles that changes the theme of the map */
const styles = 

[
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#c4c4c4"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#707070"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#be2026"
            },
            {
                "lightness": "0"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "hue": "#ff000a"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#575757"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#2c2c2c"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#999999"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": "-52"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
];

function MapView()
{
    const [covidData, setCovidData] = useState([]);

    useEffect(() => {
        axios
        .get('https://covid-api.mmediagroup.fr/v1/cases')
        .then(res => {
            setCovidData([res.data])
        })
        .catch(err => console.log(err))
    },[])


    if(covidData.length) {
        var confirmedCases = covidData[0].US.All.confirmed;
        var deaths = covidData[0].US.All.deaths;
        var location =  covidData[0].US.All.abbreviation;
        var lifeSpan = covidData[0].US.All.life_expectancy
        
        // getting markers for each state in America
        var mapMarkers = [];
        var i = 0

        for(var property in covidData[0].US){
            i += 1

            var marker = <Marker  
                key={i} 
                name={property} 
                position ={{lat:Number(covidData[0].US[property].lat), lng: Number(covidData[0].US[property].long)}} 
            />;

            mapMarkers.push(marker)
        }
    }
    
    return (
        <>
            <GoogleMap 
                options={{styles}}
                defaultZoom={10}
                defaultCenter={{lat:42, lng: -83}}
            >  
            {mapMarkers}
            </GoogleMap>
            {
                covidData &&
                <div className="data-box p-10">
                    <div> 
                        <h5>location</h5>
                        <h2>{location}</h2> 
                    </div>
                    <div> 
                        <h5>active cases</h5>
                        <h2>{confirmedCases}</h2> 
                    </div>
                    <div> 
                        <h5>life span</h5>
                        <h2>{lifeSpan}</h2> 
                    </div>
                    <div> 
                        <h5>deaths</h5>
                        <h2>{deaths}</h2> 
                    </div>
                </div>
            }
        </>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(MapView));

export default class Map extends Component
{
    constructor(){
        super();
    }

    render()
    {
        return (
            <>
                <div style={{width:'100vw', height:'100vh', float:'left'}}>
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
            </>
        )
    }
}