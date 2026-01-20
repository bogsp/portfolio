'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface WorkCardProps {
  title: string
  description: string
  tags: string[]
  demoUrl: string
  demoLabel: string
  secondaryUrl: string
  secondaryLabel: string
  index: number
}

export function WorkCard({
  title,
  description,
  tags,
  demoUrl,
  demoLabel,
  secondaryUrl,
  secondaryLabel,
  index,
}: WorkCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className='border-0 shadow-none bg-muted/30 transition-all duration-300 hover:bg-muted/50 hover:scale-[1.02]'>
        <div className='p-6 space-y-4'>
          <div className='space-y-2'>
            <h3 className='text-2xl font-semibold text-primary'>{title}</h3>
            <p className='text-muted-foreground'>{description}</p>
          </div>
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <span
                key={tag}
                className='text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground'
              >
                {tag}
              </span>
            ))}
          </div>
          <div className='flex gap-3 pt-2'>
            <Button asChild size='sm'>
              <a href={demoUrl} target='_blank' rel='noopener noreferrer'>
                {demoLabel}
              </a>
            </Button>
            <Button asChild variant='outline' size='sm'>
              <a href={secondaryUrl} target='_blank' rel='noopener noreferrer'>
                {secondaryLabel}
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
