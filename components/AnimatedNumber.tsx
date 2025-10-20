'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface AnimatedNumberProps {
  value: number
  delay?: number
}

export function AnimatedNumber({ value, delay = 0 }: AnimatedNumberProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let start = 0
        const duration = 800
        const increment = value / (duration / 16)

        const counter = setInterval(() => {
          start += increment
          if (start >= value) {
            setCount(value)
            clearInterval(counter)
          } else {
            setCount(Math.floor(start))
          }
        }, 16)

        return () => clearInterval(counter)
      }, delay * 1000)

      return () => clearTimeout(timer)
    }
  }, [isInView, value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0, rotate: -180 }}
      animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className="relative"
    >
      <span className="font-serif text-5xl font-light tracking-tight text-accent-dark md:text-6xl">
        {String(count).padStart(2, '0')}
      </span>
    </motion.div>
  )
}

