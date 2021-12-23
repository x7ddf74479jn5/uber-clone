import mapbox from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

mapbox.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

export type TMapProps = {
  center: [number, number];
  zoom: number | 5;
};

export const useMap = ({ center, zoom }: TMapProps) => {
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

  return { mapContainerRef };
};
