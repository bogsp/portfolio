'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
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
  imageSrc?: string // New optional prop
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
  imageSrc,
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
      <Card className='group overflow-hidden border border-border/40 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.04)]'>
        {/* Image Section */}
        {imageSrc && (
          <div className="w-full overflow-hidden border-b border-border/50">
            <Image 
              src={imageSrc} 
              alt={title}
              width={1200} // Logical base width (image will scale down)
              height={630} // Logical base height (maintains aspect ratio)
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}

        <div className='p-6 space-y-4'>
          <div className='space-y-2'>
            <h3 className='text-2xl font-semibold text-primary'>{title}</h3>
            <p className='text-muted-foreground'>{description}</p>
          </div>

          <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <span
                key={tag}
                className='text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground'
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
