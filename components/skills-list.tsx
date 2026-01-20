'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SkillsListProps {
  category: string
  skills: string[]
  delayOffset?: number
}

export function SkillsList({
  category,
  skills,
  delayOffset = 0,
}: SkillsListProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delayOffset,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div ref={ref}>
      <h4 className='text-sm font-medium mb-3 text-muted-foreground'>
        {category}
      </h4>
      <motion.div
        variants={container}
        initial='hidden'
        animate={isInView ? 'show' : 'hidden'}
        className='flex flex-wrap gap-2'
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            variants={item}
            className='text-sm px-3 py-1.5 rounded bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default'
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
