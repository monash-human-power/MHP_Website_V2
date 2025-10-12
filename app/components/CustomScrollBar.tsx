import { motion, useScroll, useTransform } from 'motion/react'

/**
 * @documentation
 * Custom scroll bar to be (maybe) used site-wide
 * Scroll bar that increases in opacity as you scroll
 * Uses the custom 'green' colour from tailwind.config.js
 */
const ScrollProgressBar = () => {
     // Actively tracks scroll position (from Framer Motion)
    const { scrollYProgress } = useScroll()

    // When 20% scrolled, assign opacity of 1 (max)
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    
    return (
        <motion.div
            style={{ scaleY: scrollYProgress, opacity }}
            className="origin-top fixed top-0 right-0 h-full w-2 bg-green origin-left z-[9999]"
        />
    )
}

export default ScrollProgressBar