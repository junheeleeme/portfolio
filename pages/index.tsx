import dynamic from 'next/dynamic'
import type { NextPage, NextPageContext, GetStaticProps } from 'next'
import Title from '../src/components/Title'

const NoSsrVoxel = dynamic(import('../src/components/voxel'), {
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
