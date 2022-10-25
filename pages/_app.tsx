import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Header from '../src/layout/header'
import Main from '../src/layout/main'
import Footer from '../src/layout/footer'

interface CustomAppProps extends AppProps {}

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
