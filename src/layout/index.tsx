import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '@chakra-ui/react'
import Header from './header'
import Main from './main'
import Footer from './footer'

const Layout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter()
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <motion.main
          key={router.route}
          transition={{ ease: 'easeInOut', duration: 0.6 }}
          initial={animate.initial}
          animate={animate.animate}
          exit={animate.exit}
          className="px-3 pt-0 sm:pt-1.5 pb-4 md:px-2 md:pb-2 overflow-hidden"
        >
          <Container position="relative" minW="100vw" minH="100vh" p="70px 0 32px" boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}>
            <Main>{children}</Main>
            <Footer />
          </Container>
        </motion.main>
      </AnimatePresence>
    </>
  )
}

const animate = {
  initial: {
    //none use
    transform: `translateY(30px)`,
    opacity: 0,
  },
  animate: {
    transform: `translateY(0px)`,
    opacity: 1,
  },
  exit: {
    transform: `translateY(30px)`,
    opacity: 0,
  },
}

export default Layout
