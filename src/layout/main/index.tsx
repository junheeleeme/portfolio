import { Container } from '@chakra-ui/react'

const Main = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Container as="div" className="main-wrap" maxW="1080px" p="4">
        {children}
      </Container>
    </>
  )
}

export default Main
