import { FeatureGroup, MapContainer, Marker, Polygon, Popup, TileLayer } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import React, { useCallback, useEffect, useState } from 'react';
import * as L from 'leaflet';
import { a2, konotopa, s2, ursus } from '../geometry/roads';
import { Area } from '../components/Area';
import { LatLngExpression, Map } from 'leaflet';
import { useStickyState } from '../hooks/useStickyState';

export const MapPage = () => {
  const [center, setCenter] = useStickyState([52.2, 20.85], 'ssc-map-center-point');
  const [zoom, setZoom] = useStickyState(13, 'ssc-map-zoom');
  const [mapRef, setMapRef] = useState<Map | null>(null);
  const onMoveOrZoom = useCallback(() => {
    if (mapRef) {
      setCenter(mapRef.getCenter());
      setZoom(mapRef.getZoom());
    }
  }, [mapRef]);

  useEffect(() => {
    mapRef?.on('move', onMoveOrZoom);
    mapRef?.on('zoomend', onMoveOrZoom);
    return () => {
      mapRef?.off('move', onMoveOrZoom);
      mapRef?.off('zoomend', onMoveOrZoom);
    };
  }, [mapRef, onMoveOrZoom]);

  // const ref = React.useRef<L.FeatureGroup>(null);
  // const handleChange = () => {
  //   const geo = ref.current?.toGeoJSON();
  //   console.log(geo);
  //   // if (geo?.type === 'FeatureCollection') {
  //   //   setGeojson(geo);
  //   // }
  // };
  return (
    <div className="">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} className="h-[calc(100vh-68px)]" ref={setMapRef}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Area type={1} position={a2 as unknown as LatLngExpression[][]} label="Autostrada A2 Stryków - Konotopa" />
        <Area type={3} position={s2 as unknown as LatLngExpression[][]} label="Droga ekspresowa S2 Konotopa - Opacz" />
        <Area type={6} position={konotopa as unknown as LatLngExpression[][]} label="Węzeł Konotopa (A2 / S2 / S8)" />
        <Area type={8} position={ursus as unknown as LatLngExpression[][]} label="Sumienie Ursusa" />

        {/*<FeatureGroup ref={ref}>*/}
        {/*  <EditControl*/}
        {/*    position="topright"*/}
        {/*    onEdited={handleChange}*/}
        {/*    onCreated={handleChange}*/}
        {/*    onDeleted={handleChange}*/}
        {/*    draw={{*/}
        {/*      rectangle: false,*/}
        {/*      circle: true,*/}
        {/*      polyline: true,*/}
        {/*      polygon: true,*/}
        {/*      marker: false,*/}
        {/*      circlemarker: false,*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</FeatureGroup>*/}
      </MapContainer>
    </div>
  );
};
