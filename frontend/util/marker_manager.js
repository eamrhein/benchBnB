export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarker(benches) {
    Object.values(benches).forEach((bench) => {
      if (!this.markers[bench.id]) {
        this.markers[bench.id] = this.createMarkerFromBench(bench);
      }
    });
    Object.keys(this.markers).forEach((key)=>{
      if (!benches[key]) {
        this.removeMarker(key);
      }
    });
  }

  removeMarker(key) {
    this.markers[key].setMap(null);
    delete this.markers[key];
  }

  createMarkerFromBench(bench) {
    const latlng = {
      lat: bench.lat,
      lng: bench.lng,
    }
    return new google.maps.Marker({
      position: latlng,
      map: this.map,
      title: bench.description,
    });
  };
}
