import { Container } from '@chakra-ui/react'

const Main = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Container as="main" maxW="1080px" p="4" bg="#fff">
        {children}
      </Container>
    </>
  )
}

export default Main
