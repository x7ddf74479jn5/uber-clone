import tw from "tailwind-styled-components";

export const UserProfile = () => {
  return (
    <Wrapper>
      <Name>name</Name>
      <Image src="/image/pandashark_icon.webp" alt="" />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex items-center
`;

const Name = tw.div`
  mr-4 w-20 text-sm
`;

const Image = tw.img`
  h-12 w-12 rounded-full border border-green-200 p-3
`;
