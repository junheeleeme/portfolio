import { motion } from 'framer-motion'
import { VStack, Center } from '@chakra-ui/react'

const IconWrap = ({ children, title }: { children: React.ReactNode; title: String }) => {
  return (
    <Center flexDirection="column" cursor="pointer">
      <motion.div className="container" whileHover={{ scale: 1.2, rotate: 90 }} whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}>
        {children}
      </motion.div>
      <Center>{title}</Center>
    </Center>
  )
}

export default IconWrap
