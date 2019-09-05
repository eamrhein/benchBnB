/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 11,
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarker(this.props.benches);
    console.log(this.MarkerManager.markers);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarker(this.props.benches);
  }
  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}>
      </div>
    );
  }
}

export default BenchMap;
