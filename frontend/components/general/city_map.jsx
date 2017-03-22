import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

let _mapOptions = {
  center: {lat: 37.773972, lng: -122.431297}, // San Francisco coords
  zoom: 13
};

class CityMap extends Component {

  componentDidMount() {
    console.log(this.props);
    let _myMapOptions = {
      center: {lat: this.props.lat, lng: this.props.lng}, // San Francisco coords
      zoom: 13
    };
    // if (this.props.lat) {

      const map = this.refs.map;
      this.map = new google.maps.Map(map, _myMapOptions);
      this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
      // if (this.props.singleHost) {
      //   this.props.fetchHost(this.props.hostId);
      // } else {
      // debugger;
      this._registerListeners();
      this.MarkerManager.updateMarkers(this.props.hosts);
      // }
    // }
  }

  componentDidUpdate() {
    // if (this.props.lat)
    // if(this.props.singleHost){
    //   this.MarkerManager.updateMarkers([this.props.hosts[Object.keys(this.props.hosts)[0]]]); //grabs only that one host
    // } else {
      this.MarkerManager.updateMarkers(this.props.hosts);
    // }
  }

  _registerListeners() {
  //   google.maps.event.addListener(this.map, 'idle', () => {
  //     const { north, south, east, west } = this.map.getBounds().toJSON();
  //     const bounds = {
  //       northEast: { lat:north, lng: east },
  //       southWest: { lat: south, lng: west } };
  //     // this.props.updateFilter('bounds', bounds);
  //   });
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = _getCoordsObj(event.latLng);
      this._handleClick(coords);
    });
  }

  _handleMarkerClick(host) {
    console.log(`${host.id}`);
    // this.props.router.push(`hosts/${host.id}`);
  }

  _handleClick(coords) {
    console.log(coords);
    // this.props.router.push({
    //   pathname: "hosts/new",
    //   query: coords
    // });
  }

  render() {
    return <div id='map' className="map" ref='map'>Map</div>;
  }
}

export default withRouter(CityMap);
