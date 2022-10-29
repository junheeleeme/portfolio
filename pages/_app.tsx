import '../styles/globals.css'
import Script from 'next/script'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Header from '../src/layout/header'
import Main from '../src/layout/main'
import Footer from '../src/layout/footer'

interface CustomAppProps extends AppProps {}

const breakpoints = {
  md: '30em',
}

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors, breakpoints })

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <Container position="relative" minW="100vw" minH="100vh" pt="70px" boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}>
          <Header />
          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer />
        </Container>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
