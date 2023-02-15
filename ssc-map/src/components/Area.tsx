import { Polygon, Tooltip } from 'react-leaflet';
import React, { useState } from 'react';
import { LatLngExpression, LeafletMouseEvent } from 'leaflet';

const colors = ['ff0000', 'ff8700', 'ffd300', 'deff0a', 'a1ff0a', '0aff99', '0aefff', '147df5', '580aff', 'be0aff'];

interface AreaProps {
  position: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][];
  type: number;
  label?: string;
}

export const Area = ({ position, type, label }: AreaProps) => {
  const [fillOpacity, setFillOpacity] = useState(0.3);
  const pathOptions = { color: '#' + colors[colors.length % type], fillOpacity };
  const eventHandlers = {
    mouseover: (event: LeafletMouseEvent) => {
      setFillOpacity(0.6);
      console.log(pathOptions.color);
    },
    mouseout: (event: LeafletMouseEvent) => {
      setFillOpacity(0.3);
    },
  };
  return (
    <Polygon pathOptions={pathOptions} positions={position} eventHandlers={eventHandlers}>
      {label && (<Tooltip sticky>{label}</Tooltip>)}
    </Polygon>
  );
};
