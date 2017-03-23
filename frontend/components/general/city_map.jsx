import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter, hashHistory} from 'react-router';
import MarkerManager from '../../util/marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});



class CityMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lng: 0
    }
    this._handleInfoClick = this._handleInfoClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.lat !== nextProps.lat || this.props.lat !== 0) {
      this.setState({lat: nextProps.lat, lng: nextProps.lng})

      let _myMapOptions = {
        center: {lat: nextProps.lat, lng: nextProps.lng},
        zoom: 9
      };

      const map = this.refs.map;
      this.map = new google.maps.Map(map, _myMapOptions);
      this.map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true});
      this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));

      this.infowindow = new google.maps.InfoWindow({
        content: `<div> Hello </div>`
      });

      this._registerListeners();
      this.MarkerManager.updateMarkers(this.props.hosts);
    }
  }

  componentDidMount() {

  }

  componentDidUpdate() {
      this.MarkerManager.updateMarkers(this.props.hosts);
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

  _handleMarkerClick(host, marker) {
    console.log(`${host.id}`);
    let div = document.createElement('div');
    const content =
      `<div class='info-card'>
        <div class='info-box-content'>
          <header class='info-box-header'>
            ${host.name}
          </header>
          <div class='info-wrapper'>
            <div class='info-image-wrapper'>
              <img class='info-image' src=${host.image_url} />
              <ul class='info-list'>

                <li className='info-list-item'>${host.location}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>`
    div.innerHTML = content
    div.onclick = this._handleInfoClick(host.id);

    this.infowindow.setContent(div)
    this.infowindow.open(this.map, marker);
    // this.props.router.push(`hosts/${host.id}`);
  }

  _handleInfoClick(id) {
    return () => hashHistory.push(`/hosts/${id}`)
  }

  _handleClick(coords) {
    console.log(coords);
    this.infowindow.close();
    // this.infowindow.open(this.map);
    // this.props.router.push({
    //   pathname: "hosts/new",
    //   query: coords
    // });
  }

  render() {
    return (
      <div>
        <div id='map' className="map" ref='map'>Map</div>;
      </div>
    )
  }
}

export default withRouter(CityMap);
