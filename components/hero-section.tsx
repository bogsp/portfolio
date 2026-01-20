'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className='container mx-auto px-4 py-18 max-w-3xl'>
      <motion.div
        className='space-y-6'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className='text-5xl font-bold tracking-tight text-primary'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I solve problems across design, code, and strategy.
        </motion.h1>
        <motion.p
          className='text-xl text-muted-foreground'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          26 years of experience turning complex challenges into elegant
          solutions. Not a specialist—a Scanner who connects dots others miss.
        </motion.p>
        <motion.div
          className='flex gap-4 pt-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button asChild>
            <Link href='#work'>View Work</Link>
          </Button>
          <Button variant='outline' asChild>
            <Link href='#contact'>Get In Touch</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
