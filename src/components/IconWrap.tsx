import { motion } from 'framer-motion'

const IconWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <motion.div className="container" whileHover={{ scale: 1.2, rotate: 90 }} whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}>
        {children}
      </motion.div>
    </>
  )
}

export default IconWrap
