import type { NextPage, NextPageContext, GetStaticProps } from "next";
import Link from "next/link";
import Title from "../src/components/Title";

const Home = () => {
  return (
    <>
      <Title />
      Home!
    </>
  );
};

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   return {
//     props: {

//     },
//   };
// };

export default Home;
