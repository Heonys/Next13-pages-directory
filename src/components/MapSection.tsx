import React from "react";
import Map from "./Map";
import useMap from "@/hooks/useMap";
import { NaverMap } from "@/types/map";
import Markers from "./Markers";

const MapSection = () => {
  const { initializeMap } = useMap();

  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    // naver.maps.Event.addListener(map, 'click', clearCurrentStore);
  };

  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};

export default MapSection;
