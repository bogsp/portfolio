'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface TimelineItemProps {
  year: string
  title: string // Renamed from 'role' to 'title' to avoid ARIA conflict
  company: string
  index: number
  isLast?: boolean
}

export function TimelineItem({
  year,
  title, // Updated here
  company,
  index,
  isLast = false,
}: TimelineItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='flex gap-4'
    >
      <div className='flex flex-col items-center'>
        <div className='w-3 h-3 rounded-full bg-secondary mt-1.5' />
        {!isLast && <div className='w-0.5 h-full bg-secondary mt-2' />}
      </div>
      <div className={`flex-1 ${!isLast ? 'pb-8' : ''}`}>
        <div className='text-sm text-muted-foreground'>{year}</div>
        <h4 className='font-semibold text-primary'>{title}</h4>
        <p className='text-sm text-muted-foreground mt-1'>{company}</p>
      </div>
    </motion.div>
  )
}