import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class ApiMaps extends React.Component{
render(){

    return(
        <Map google={this.props.google} 
             initialCenter={{ 
               //Parque Biologico de Gaia
               lat: 41.09,
               lng: -8.55
              }}
        >
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>

    );
};
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCVs8AYD1f7RA7OK3ileWOjRZSv2eAS54E')
})(ApiMaps)

