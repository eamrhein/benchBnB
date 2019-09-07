/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class BenchMap extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 11,
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.map.addListener('idle', () => {
      const gBounds = this.map.getBounds();
      const bounds = {
        bounds: {
          northEast: gBounds.getNorthEast().toJSON(),
          southWest: gBounds.getSouthWest().toJSON(),
        },
      };
      this.props.updateFilter('bounds', bounds);
    });
    this.map.addListener('click', (e) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      this._handleClick(lat, lng);
    });
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarker(this.props.benches);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarker(this.props.benches);
  }


  _handleClick(lat, lng) {
    this.props.history.push({
      pathname: '/benches/new',
      search: `lat=${lat}&lng=${lng}`,
    });
  }

  render() {
    return (
      // eslint-disable-next-line no-return-assign
      <div id="map-container" ref={(map) => this.mapNode = map} />
    );
  }
}

export default withRouter(BenchMap);
