import { useRouter } from 'next/router'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Box, useColorModeValue } from '@chakra-ui/react'
import Header from './header'
import Main from './main'
import Footer from './footer'
// import dynamic from 'next/dynamic'
// const NoSsrVoxel = dynamic(import('../components/Voxel'), {
//   ssr: false,
// })

const Layout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter()
  // 상단 스크롤 훅
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  })
  const bg = useColorModeValue('cyan.100', 'Blue.900')

  return (
    <Box bg={bg} pos="relative" minW="100vw" minH="100vh" p="0 0 32px">
      {/* 스크롤 프로그레스바 */}
      <motion.div className="progress-bar" style={{ scaleX }} />
      {/* ---------------- 헤더 ---------------- */}
      <Header />
      {/* ------ 메인 섹션 페이지 이동 효과 ------ */}
      <AnimatePresence exitBeforeEnter>
        <motion.main {...motionProp} key={router.route}>
          {/* ---------------- 메인 ---------------- */}
          <Main maxW="1280">{children}</Main>
        </motion.main>
      </AnimatePresence>
      {/* ---------------- 푸터 ---------------- */}
      <Footer />
    </Box>
  )
}

// const animate = {
//   initial: {
//     //none use
//     transform: `translateY(20px)`,
//     opacity: 0,
//   },
//   animate: {
//     transform: `translateY(0px)`,
//     opacity: 1,
//   },
//   exit: {
//     transform: `translateY(20px)`,
//     opacity: 0,
//   },
// }

const motionProp = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.5,
  },
  transition: {
    duration: 0.3,
    ease: [0, 0.71, 0.5, 1],
  },
}

export default Layout
