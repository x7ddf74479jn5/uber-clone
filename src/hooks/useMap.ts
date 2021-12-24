import mapbox from "mapbox-gl";
import { useCallback, useEffect, useRef, useState } from "react";
import { ACCESS_TOKEN } from "src/lib/mapbox";
import type { TCoordinates } from "src/types";

mapbox.accessToken = ACCESS_TOKEN;

export type TMapProps = {
  center: [number, number];
  zoom: number | 5;
  pickupCoordinates?: TCoordinates | undefined;
  dropOffCoordinates?: TCoordinates | undefined;
};

export const useMap = ({ center, zoom, pickupCoordinates, dropOffCoordinates }: TMapProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [map, setMap] = useState<mapbox.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    setIsMounted(true);
    setMap(
      new mapbox.Map({
        container: "map",
        style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
        center: center,
        zoom: zoom,
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  useEffect(() => {
    if (isMounted && map) {
      map.setCenter(center);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [center]);

  const addToMap = useCallback((map, coordinates) => {
    if (map) {
      new mapbox.Marker().setLngLat(coordinates).addTo(map);
    }
  }, []);

  useEffect(() => {
    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }

    if (dropOffCoordinates) {
      addToMap(map, dropOffCoordinates);
    }

    if (pickupCoordinates && dropOffCoordinates) {
      map?.fitBounds([dropOffCoordinates, pickupCoordinates], {
        padding: 60,
      });
    }
  }, [addToMap, map, pickupCoordinates, dropOffCoordinates]);

  return { mapContainerRef, addToMap } as const;
};
