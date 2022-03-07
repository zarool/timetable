import { Helmet } from "react-helmet-async";

const Title = ({ TITLE }) => {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Plan zajęć</title>
      </Helmet>
    </>
  );
};

export default Title;
