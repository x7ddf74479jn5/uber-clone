import tw from "tailwind-styled-components";

import { ActionButton } from "./ActionButton";

const actions = [
  {
    name: "Ride",
    image: "/image/uberx.png",
  },
  {
    name: "Wheels",
    image: "/image/bike.png",
  },
  {
    name: "Reserve",
    image: "/image/uberschedule.png",
  },
];

export const ActionButtons = () => {
  return (
    <Wrapper>
      {actions.map((action) => (
        <ActionButton key={action.name} image={action.image}>
          {action.name}
        </ActionButton>
      ))}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex
`;
