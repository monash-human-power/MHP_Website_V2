import { motion, useScroll } from 'motion/react'

const ScrollProgressBar = () => {
     // Actively tracks scroll position (from Framer Motion)
    const { scrollYProgress } = useScroll()
    
    return (
    <>
        <motion.div
            style={{ scaleX: scrollYProgress }}
            className="fixed top-0 left-0 right-0 h-2 bg-blue-500 origin-left z-[9999] opacity-100"
        />
    </>

    )
}

export default ScrollProgressBar