/* global google:false */

export default class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];
    //permanently bind instance methods
    this._createMarkerFromHost = this._createMarkerFromHost.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(hosts){
    // debugger;
    this.hosts = hosts;
    this.hosts.forEach(this._createMarkerFromHost);
    // this._hostsToAdd().forEach(this._createMarkerFromHost);
    // this._markersToRemove().forEach(this._removeMarker);
  }

  _hostsToAdd() {
    const currentHosts = this.markers.map( marker => marker.hostId );
    if (this.hosts) {
      return this.hosts.filter( host => !currentHosts.includes(host.id) );
    }
  }

  _markersToRemove(){
    const hostIds = this.hosts.map( host => host.id );
    return this.markers.filter( marker => !hostIds.includes(marker.hostId) );
  }

  _createMarkerFromHost(host) {
    const pos = new google.maps.LatLng(host.lat, host.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      hostId: host.id
    });
    marker.addListener('click', () => this.handleClick(host));
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
