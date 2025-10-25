import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import ParcelComponent from "./parcel.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: ParcelComponent,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});
export const parcelConfig = lifecycles

export const { bootstrap, mount, unmount } = lifecycles;
