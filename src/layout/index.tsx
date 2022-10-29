import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
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
  const bg = useColorModeValue('cyan.100', 'Blue.900')

  return (
    <Box bg={bg} minW="100vw" minH="100vh" p="70px 0 32px">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <motion.main
          key={router.route}
          transition={{ ease: 'easeInOut', duration: 0.33 }}
          initial={animate.initial}
          animate={animate.animate}
          exit={animate.exit}
          className="px-3 pt-0 sm:pt-1.5 pb-4 md:px-2 md:pb-2 overflow-hidden"
        >
          <Main>{children}</Main>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </Box>
  )
}

const animate = {
  initial: {
    //none use
    // transform: `translateY(30px)`,
    opacity: 0,
  },
  animate: {
    // transform: `translateY(0px)`,
    opacity: 1,
  },
  exit: {
    // transform: `translateY(30px)`,
    opacity: 0,
  },
}

export default Layout
