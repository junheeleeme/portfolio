import { Flex, Box, Center, Menu, MenuButton, MenuList, MenuItem, IconButton, useColorMode } from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { SiGithub } from 'react-icons/si'
import { IoMdMoon } from 'react-icons/io'
import { FcOpenedFolder } from 'react-icons/fc'
import { BsInstagram } from 'react-icons/bs'
import { RiSunFill } from 'react-icons/ri'
import { Image } from '@chakra-ui/react'

const MenuLink = () => {
  // 컬러모드: light : dark
  const { colorMode, toggleColorMode } = useColorMode()
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB ? process.env.NEXT_PUBLIC_GITHUB : '/'
  const tistoryUrl = process.env.NEXT_PUBLIC_TISTORY ? process.env.NEXT_PUBLIC_TISTORY : '/'
  const instaUrl = process.env.NEXT_PUBLIC_INSTAGRAM ? process.env.NEXT_PUBLIC_INSTAGRAM : '/'

  return (
    <>
      {/* 헤더 우측 아이콘 - PC Ver */}
      <Flex py="2.5" gap="3">
        {/* 깃허브 링크 */}
        <ChakraLink href={tistoryUrl} isExternal display={{ base: 'none', lg: 'block' }}>
          <SiGithub size="28" />
        </ChakraLink>
        {/* 티스토리 링크 */}
        <ChakraLink href={tistoryUrl} isExternal display={{ base: 'none', lg: 'block' }}>
          {colorMode === 'light' ? <Image src="/image/tistory-logo-light.svg" alt="Tistory Logo" boxSize="28px" /> : <Image src="/image/tistory-logo-dark.svg" alt="Tistory Logo" boxSize="28px" />}
        </ChakraLink>
        {/* 인스타 링크 */}
        <ChakraLink href={instaUrl} isExternal display={{ base: 'none', lg: 'block' }}>
          <BsInstagram size="28" color="#C13584" />
        </ChakraLink>
        {/* Color Toggle 버튼 */}
        {colorMode === 'dark' ? (
          <Center as="button" w="28px" h="28px" onClick={toggleColorMode}>
            <RiSunFill size="28" color="#F0FF42" />
          </Center>
        ) : (
          <Center as="button" w="28px" h="28px" onClick={toggleColorMode}>
            <IoMdMoon size="26" color="#C47AFF" />
          </Center>
        )}

        <Menu>
          <MenuButton
            as={IconButton}
            display={{ base: 'flex', lg: 'none' }}
            borderColor="gray.500"
            aria-label="Search database"
            variant="ghost"
            size="sm"
            icon={<FcOpenedFolder color="#F0FF42" size="22" />}
          />
          <MenuList as="div">
            <MenuItem as="a" href={githubUrl} target="_blank" icon={<SiGithub size="28" />} command="New Tab">
              Github
            </MenuItem>
            <MenuItem
              as="a"
              href={tistoryUrl}
              target="_blank"
              icon={
                colorMode === 'light' ? <Image src="/image/tistory-logo-light.svg" alt="Tistory Logo" boxSize="28px" /> : <Image src="/image/tistory-logo-dark.svg" alt="Tistory Logo" boxSize="28px" />
              }
              command="New Tab"
            >
              Blog
            </MenuItem>
            <MenuItem as="a" href={instaUrl} target="_blank" icon={<BsInstagram size="28" color="#C13584" />} command="New Tab">
              Instagram
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  )
}

export default MenuLink
