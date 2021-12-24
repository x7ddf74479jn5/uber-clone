import { Map } from "src/components/model/Map";
import { useCoordinates } from "src/hooks/useCoordinates";
import tw from "tailwind-styled-components";

export const Confirm = () => {
  const { pickupCoordinates, dropOffCoordinates } = useCoordinates();

  return (
    <Wrapper>
      <Map pickupCoordinates={pickupCoordinates} dropOffCoordinates={dropOffCoordinates} />
      <RideContainer></RideContainer>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex h-screen flex-col
`;

const RideContainer = tw.div`
  flex-1
`;
