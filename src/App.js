import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import "bootstrap/dist/css/bootstrap.min.css";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 30.7333, lng: 76.7794 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 30.7333, lng: 76.7794 }} />
      )}
    </GoogleMap>
  ))
);

