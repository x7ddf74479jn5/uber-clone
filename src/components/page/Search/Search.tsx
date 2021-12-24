import Link from "next/link";
import tw from "tailwind-styled-components";

export const Search = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/" passHref>
          <BackButton src="/image/left.png" alt="" />
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle src="/image/filled-circle.png" />
          <Line src="/image/vertical-line.png" />
          <Square src="/image/square-full.png" />
        </FromToIcons>
        <InputBoxes>
          <Input placeholder="Enter pickup location" />
          <Input placeholder="Where to?" />
        </InputBoxes>
        <PlusIcon src="/image/plus-math.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="/image/star--v1.png" />
        Saved Places
      </SavedPlaces>
      <ConfirmButtonContainer>Confirm Locations</ConfirmButtonContainer>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  bg-gray-200 h-screen
`;

const ButtonContainer = tw.div`
  bg-white px-4
`;

const BackButton = tw.img`
  h-12 cursor-pointer
`;

const FromToIcons = tw.div`
  w-10 flex flex-col mr-2 items-center
`;

const InputContainer = tw.div`
  bg-white flex items-center px-4 mb-2
`;

const Circle = tw.img`
  h-2.5 
`;

const Line = tw.img`
  h-10
`;

const Square = tw.img`
  h-3
`;

const InputBoxes = tw.div`
  flex flex-col flex-1
`;

const Input = tw.input`
  h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`;

const PlusIcon = tw.img`
  w-10 h-10 bg-gray-200 rounded-full ml-3
`;

const SavedPlaces = tw.div`
  flex items-center bg-white px-4 py-2
`;

const StarIcon = tw.img`
  bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;

const ConfirmButtonContainer = tw.div`
bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer
`;
