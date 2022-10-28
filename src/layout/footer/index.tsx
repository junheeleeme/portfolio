import { Flex, Box, Spacer, Heading } from '@chakra-ui/react'

const Footer = () => {
  const year = new Date().getFullYear

  return (
    <Flex as="footer" pos="absolute" bottom="0" left="0" w="100%" py="2">
      <Spacer />
      <Heading as="h3" fontSize="14px" fontWeight="normal">
        juni-official All rights reserved
      </Heading>
      <Spacer />
    </Flex>
  )
}
export default Footer
