import Link from "next/link";
import tw from "tailwind-styled-components";

type ActionButtonProps = {
  children?: React.ReactNode | undefined;
  label?: string | undefined;
  image: string;
  href: string;
};

export const ActionButton: React.VFC<ActionButtonProps> = ({ label, image, href, children }) => {
  return (
    <Link href={href} passHref>
      <Wrapper>
        <Image src={image} alt="" />
        {label || children}
      </Wrapper>
    </Link>
  );
};

const Wrapper = tw.div`
  flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`;

const Image = tw.img`
  h-3/5
`;
