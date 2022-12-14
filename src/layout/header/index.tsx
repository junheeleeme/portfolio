import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Flex, Spacer, Heading, Tabs, TabList, Tab, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import { CgMenuGridR } from 'react-icons/cg'
import { AnimatePresence, motion } from 'framer-motion'
import { Link as ChakraLink } from '@chakra-ui/react'
import MenuLink from '../../components/MenuLink'
import Link from 'next/link'
import routes from '../../routes'

const Header = () => {
  const headerTransition: string = '0.8'
  const { pathname, route } = useRouter()
  const [loadEffect, setLoadEffect] = useState<boolean>(false)
  const [menuIdx, setMenuIdx] = useState<number>(0)

  useEffect(() => {
    // 헤더 효과
    setLoadEffect(true)
  }, [])

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
      <AnimatePresence exitBeforeEnter>
        <motion.header
          className="header"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit="false"
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1],
          }}
        >
          {/* 로고 */}
          <Heading as="h1">
            <Link href="/">🔥</Link>
          </Heading>
          <Spacer />

          {/* 네비게이션 메뉴 */}
          <Tabs as="nav" index={menuIdx} variant="unstyled" display="flex">
            <TabList as="ul" display={{ base: 'none', md: 'flex' }}>
              {routes.map((r) => {
                return (
                  <Tab
                    as="li"
                    key={r.id}
                    w={{ base: '40px', md: '80px', lg: '100px' }}
                    p="0"
                    _hover={{ transform: 'scale(1.1) rotate(-5deg)' }}
                    _selected={{ transform: 'translate(0px, 3px) scale(1.3) rotate(6deg)', fontWeight: 'bold' }}
                  >
                    <Link href={r.path} passHref>
                      <ChakraLink px="5" py="1" fontSize={{ base: '1rem', lg: '1.15rem' }} _hover={{ textDecoration: 'none' }}>
                        {r.title}
                      </ChakraLink>
                    </Link>
                  </Tab>
                )
              })}
            </TabList>
          </Tabs>
          <Spacer />
          {/* 깃허브/티스토리/인스타 링크 */}
          <MenuLink />
          <Flex as="nav" ml="2" py="2.5" gap="3">
            <Menu>
              <MenuButton as={IconButton} size="sm" aria-label="Options" display={{ base: 'flex', md: 'none' }} icon={<CgMenuGridR size="26" />} variant="ghost" />
              <MenuList as="ul">
                {routes.map((r) => (
                  <MenuItem as="li" key={r.id} p="0">
                    <Link href={r.path} passHref>
                      <ChakraLink w="100%" p="2" pl="4">
                        {r.title}
                      </ChakraLink>
                    </Link>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
          {/* </Flex> */}
        </motion.header>
      </AnimatePresence>
    </>
  )
}

const animate = {
  initial: {
    //none use
    transform: `translateY(-20px)`,
    opacity: 0,
  },
  animate: {
    transform: `translateY(0px)`,
    opacity: 1,
  },
  exit: {
    transform: `translateY(-20px)`,
    opacity: 0,
  },
}

export default Header
