import type { TMapProps } from "src/hooks/useMap";
import { useMap } from "src/hooks/useMap";
import tw from "tailwind-styled-components";

export const Map = () => {
  const useMapProps: TMapProps = {
    center: [-99.29011, 39.39172],
    zoom: 3,
  };

  const { mapContainerRef } = useMap(useMapProps);

  return (
    <Wrapper id="map" ref={mapContainerRef}>
      Map
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex-1
`;
