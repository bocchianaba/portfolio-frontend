import { NextPage } from "next";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <div className="flex justify-center bottom-0 fixed left-1/2 transform -translate-x-1/2 py-4">
      Copyright © 2024, Adrien Jean Bocchi NOA ANABA, V1.O
    </div>
  );
};

export default Footer;
