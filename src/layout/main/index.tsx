import { Container } from '@chakra-ui/react'

const Main = ({ children, maxW }: { children: React.ReactNode; maxW: string }) => {
  return (
    <>
      <Container as="div" className="main-wrap" maxW={`${maxW}px`} p="4">
        {children}
      </Container>
    </>
  )
}

export default Main
