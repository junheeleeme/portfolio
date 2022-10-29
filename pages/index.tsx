import dynamic from 'next/dynamic'
// import type { NextPage, NextPageContext, GetStaticProps } from 'next'
import Title from '../src/components/Title'

const Home = () => {
  return (
    <>
      <Title />
      <h1>Home</h1>
    </>
  )
}

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   return {
//     props: {

//     },
//   };
// };

export default Home
