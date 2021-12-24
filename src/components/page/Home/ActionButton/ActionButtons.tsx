import tw from "tailwind-styled-components";

import { ActionButton } from "./ActionButton";

const actions = [
  {
    name: "Ride",
    image: "/image/uberx.png",
    href: "/search",
  },
  {
    name: "Wheels",
    image: "/image/bike.png",
    href: "/search",
  },
  {
    name: "Reserve",
    image: "/image/uberschedule.png",
    href: "/search",
  },
];

export const ActionButtons = () => {
  return (
    <Wrapper>
      {actions.map((action) => (
        <ActionButton key={action.name} image={action.image} href={action.href}>
          {action.name}
        </ActionButton>
      ))}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex
`;
