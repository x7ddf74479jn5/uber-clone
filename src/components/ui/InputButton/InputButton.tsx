import tw from "tailwind-styled-components";

export const InputButton: React.VFC = ({}) => {
  return <Wrapper>Where to...</Wrapper>;
};

const Wrapper = tw.button`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 w-full
`;
