import '../styles/globals.css'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Layout from '../src/layout'

interface CustomAppProps extends AppProps {}

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '60em',
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
        {/* Layout */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
