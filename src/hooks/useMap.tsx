import { NaverMap } from "@/types/map";
import { Coordinates } from "@/types/store";
import { useCallback } from "react";
import useSWR, { mutate } from "swr";

export const INITIAL_CENTER: Coordinates = [37.5262411, 126.99289439];
export const INITIAL_ZOOM = 10;

export const MAP_KEY = "/map";

const useMap = () => {
  const initializeMap = useCallback((map: NaverMap) => {
    mutate(MAP_KEY, map);
  }, []);

  const { data: map } = useSWR<NaverMap>(MAP_KEY);

  const resetMapOptions = useCallback(() => {
    if (!map) return;
    /** https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Map.html#morph__anchor */
    map.morph(new naver.maps.LatLng(...INITIAL_CENTER), INITIAL_ZOOM);
  }, [map]);

  const getMapOptions = useCallback(() => {
    if (!map) return;
    const mapCenter: any = map.getCenter();
    const center: Coordinates = [mapCenter.lat(), mapCenter.lng()];
    const zoom = map.getZoom();

    return { center, zoom };
  }, [map]);

  return {
    initializeMap,
    resetMapOptions,
    getMapOptions,
    map,
  };
};
export default useMap;
