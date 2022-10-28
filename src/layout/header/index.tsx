import Script from 'next/script'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Flex, Spacer, Box, Icon, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, Switch } from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { SiGithub } from 'react-icons/si'
import { BsInstagram } from 'react-icons/bs'
import { RiMoonLine, RiSunFill } from 'react-icons/ri'

import Link from 'next/link'
import Image from 'next/image'
import routes from '../../routes'

const Header = () => {
  //
  const tistoryUrl = process.env.NEXT_PUBLIC_TISTORY ? process.env.NEXT_PUBLIC_TISTORY : '/'
  const instaUrl = process.env.NEXT_PUBLIC_INSTAGRAM ? process.env.NEXT_PUBLIC_INSTAGRAM : '/'
  const { pathname } = useRouter()
  const [menuIdx, setMenuIdx] = useState<number>(0)

  useEffect(() => {
    const idx = routes.findIndex((r, idx) => {
      if (pathname === '/') return true // root 경로일 경우
      if (idx !== 0 && pathname.includes(r.path)) return true
      return false
    })
    setMenuIdx(idx)
  }, [pathname])

  return (
    <>
      <Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" />
      <Flex as="header" py="2">
        <Heading as="h1">
          <Link href="/">&#60;🔥/&#62;</Link>
        </Heading>
        <Spacer />
        <Tabs as="nav" index={menuIdx} variant="unstyled" display="flex">
          <TabList as="ul">
            {routes.map((r) => {
              return (
                <Tab as="li" key={r.id} w="100px" p="0" _selected={{ transform: 'translate(0px, 5px) scale(1.2)', fontWeight: 'bold' }}>
                  <Link href={r.path} passHref>
                    <ChakraLink px="5" py="1" fontSize="1.15rem" _hover={{ textDecoration: 'none' }}>
                      {r.title}
                    </ChakraLink>
                  </Link>
                </Tab>
              )
            })}
          </TabList>
        </Tabs>
        <Spacer />
        <Flex py="2.5" gap="3">
          <ChakraLink href={tistoryUrl} isExternal>
            <SiGithub size="28" />
          </ChakraLink>
          <ChakraLink href={tistoryUrl} isExternal>
            <Image src="/image/tistory-logo.svg" alt="Tistory Logo" width="28" height="28" />
          </ChakraLink>
          <ChakraLink href={instaUrl} isExternal>
            <BsInstagram size="28" />
          </ChakraLink>
          <Box>
            <RiMoonLine size="28" color="#C47AFF" />
            <RiSunFill size="28" color="#F0FF42" />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default Header
