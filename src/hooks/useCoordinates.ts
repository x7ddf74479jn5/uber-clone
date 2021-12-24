import { useCallback, useEffect, useState } from "react";
import { ACCESS_TOKEN } from "src/lib/mapbox";

export const useCoordinates = () => {
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropOffCoordinates, setDropOffCoordinates] = useState();

  const fetchCoordinates = async (place: string) => {
    const data = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?` +
        new URLSearchParams({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          access_token: ACCESS_TOKEN,
          limit: "1",
        })
    ).then((res) => res.json());

    return data;
  };

  const getPickupCoordinates = useCallback(async () => {
    const pickup = "Santa Monica";
    const data = await fetchCoordinates(pickup);
    setPickupCoordinates(data.features[0].center);
  }, []);

  const getDropOffCoordinates = useCallback(async () => {
    const dropOff = "Los Angeles";
    const data = await fetchCoordinates(dropOff);
    setDropOffCoordinates(data.features[0].center);
  }, []);

  useEffect(() => {
    getPickupCoordinates();
    getDropOffCoordinates();
  }, [getDropOffCoordinates, getPickupCoordinates]);

  return { pickupCoordinates, dropOffCoordinates } as const;
};
