import { Flex, Spacer, Heading } from '@chakra-ui/react'

const Footer = () => {
  const year: number = new Date().getFullYear()

  return (
    <Flex as="footer" pos="fixed" bottom="0" left="0" w="100%" h="32px" p="2">
      <Spacer />
      <Heading as="h3" fontSize="13px" fontWeight="normal">
        {year} juni-official All rights reserved
      </Heading>
    </Flex>
  )
}
export default Footer
