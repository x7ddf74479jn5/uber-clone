import type { TMapProps } from "src/hooks/useMap";
import { useMap } from "src/hooks/useMap";
import type { TCoordinates } from "src/types";
import tw from "tailwind-styled-components";

type MapProps = {
  pickupCoordinates?: TCoordinates | undefined;
  dropOffCoordinates?: TCoordinates | undefined;
};
export const Map: React.VFC<MapProps> = ({ pickupCoordinates, dropOffCoordinates }) => {
  const useMapProps: TMapProps = {
    center: [-99.29011, 39.39172],
    zoom: 3,
    pickupCoordinates,
    dropOffCoordinates,
  };

  const { mapContainerRef } = useMap(useMapProps);

  return <Wrapper id="map" ref={mapContainerRef} />;
};

const Wrapper = tw.div`
  flex-1
`;
