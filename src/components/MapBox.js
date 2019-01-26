import React from 'react';
import mapboxgl from 'mapbox-gl';

export default class MapBox extends React.Component {
  map = null;

  flyTo = () => {
    const coords = this.props.order.coordinates;
    this.map.flyTo({
      center: coords[coords.length - 1],
      zoom: 12,
      speed: 1,
      curve: 1
    });
  };

  addLayer = coords => {
    this.map.addLayer({
      id: 'route-taxi',
      type: 'line',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'LineString',
                coordinates: coords
              }
            }
          ]
        }
      },
      layout: {
        'line-cap': 'round',
        'line-join': 'round'
      },
      paint: {
        'line-color': 'red',
        'line-width': 8,
        'line-opacity': 0.8
      }
    });
  };

  deleteLayer = () => {
    this.map.removeLayer('route-taxi');
  };

  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoidGltdXJ5dW1hZCIsImEiOiJjanJidXcwZngxM2VtNDRvYzAwM3VpbWN4In0.INkzRrxIY57eeBOnrjeWRg';
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.348308, 59.932573],
      zoom: 11
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const coords = this.props.order.coordinates;
    const routeIsBuilt = this.props.order.routeIsBuilt;

    if (coords.length > 0) {
      this.flyTo();
      this.addLayer(coords);
    }
    if (routeIsBuilt) {
      this.deleteLayer();
    }

    return <div ref={this.mapContainer} {...this.props} />;
  }
}
