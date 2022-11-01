// import type { NextPage, NextPageContext, GetStaticProps } from 'next'
import Title from '../src/components/Title'
import dynamic from 'next/dynamic'
const NoSsrVoxel = dynamic(import('../src/components/Voxel'), {
  ssr: false,
})
const Home = () => {
  return (
    <>
      <Title />
      <NoSsrVoxel />
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
