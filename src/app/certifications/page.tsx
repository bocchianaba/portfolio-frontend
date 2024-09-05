import { NextPage } from "next";

interface Props {}

const CertificationPage: NextPage<Props> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center pb-8">
      <h1 className="page_title px-20">All My Certifications</h1>
      <div className="mx-20 px-20 flex flex-col gap-4"></div>
    </div>
  );
};

export default CertificationPage;
