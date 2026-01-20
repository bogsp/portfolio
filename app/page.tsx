import { AnimatedSection } from '@/components/animated-section'
import { HeroBackground } from '@/components/hero-background'
import { HeroSection } from '@/components/hero-section'
import { SkillsList } from '@/components/skills-list'
import { TimelineItem } from '@/components/timeline-item'
import { WorkCard } from '@/components/work-card'

export default function Home() {
  return (
    <main className='relative min-h-screen'>
      {/* Futuristic Background - Restricted to top area */}
      <div className='absolute top-0 w-full h-[80vh]'>
        <HeroBackground />
      </div>

      <HeroSection />

      {/* Work Section */}
      <AnimatedSection
        id='work'
        className='container mx-auto px-4 py-18 max-w-3xl'
      >
        <h2 className='text-3xl font-bold mb-8 text-primary'>Recent Work</h2>
        <div className='space-y-12'>
          <WorkCard
            title='PM Dashboard'
            description='A project management dashboard for small teams. Built with Next.js, React, TypeScript, and Tailwind CSS. Demonstrates clean component architecture, responsive design, and understanding of team workflows.'
            tags={['Next.js', 'React', 'TypeScript', 'Tailwind CSS']}
            demoUrl='https://bogs-pmd.vercel.app/'
            demoLabel='View Live Demo'
            secondaryUrl='https://bogs-pmd.vercel.app/dashboard'
            secondaryLabel='See Dashboard'
            imageSrc='/projects/pm-dashboard.png'
            index={0}
          />

          <WorkCard
            title='Developer Documentation Site'
            description='Complete technical documentation for the PM Dashboard. Features dynamic file-based routing, MDX content, syntax highlighting, and auto-generated navigation. Shows I can build and document.'
            tags={['Next.js', 'MDX', 'TypeScript', 'Shadcn UI']}
            demoUrl='https://bogs-pmd-docs.vercel.app/'
            demoLabel='View Documentation'
            secondaryUrl='https://github.com/bogsp/pm-dashboard-docs'
            secondaryLabel='View Code'
            imageSrc='/projects/docs-site.png'
            index={1}
          />
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection
        id='about'
        className='container mx-auto px-4 py-18 max-w-3xl'
      >
        <h2 className='text-3xl font-bold mb-8 text-primary'>About</h2>
        <div className='space-y-8'>
          <div className='space-y-4'>
            <p className='text-lg'>
              I'm a <em>Scanner</em> — someone with multiple genuine interests
              and the ability to connect ideas across domains. Where specialists
              go deep, I go wide, finding solutions others miss by drawing from
              design, development, product management, and strategy.
            </p>
            <p className='text-lg text-muted-foreground'>
              26 years of experience across agencies, startups, and freelance
              work. I've built products, led teams, designed systems, and
              written code. Currently focusing on full-stack development and
              product management.
            </p>
          </div>

          {/* Skills */}
          <div className='space-y-6'>
            <h3 className='text-xl font-semibold text-primary'>
              Current Toolkit
            </h3>
            <div className='space-y-6'>
              <SkillsList
                category='Primary Skills'
                skills={[
                  'React',
                  'TypeScript',
                  'Next.js',
                  'Node.js',
                  'Figma',
                  'Product Management',
                ]}
              />
              <SkillsList
                category='Supporting Skills'
                skills={[
                  'UX/UI Design',
                  'Technical Documentation',
                  'System Architecture',
                  'Strategy & Planning',
                ]}
                delayOffset={0.4}
              />
            </div>
          </div>

          {/* Timeline */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-primary'>
              Experience Timeline
            </h3>
            <div className='space-y-6'>
              <TimelineItem
                year='2020 - Present'
                title='Product Manager & Full-Stack Developer'
                company='Raket.ph (part-time) + freelance projects. Building with React, TypeScript, Next.js.'
                index={0}
              />
              <TimelineItem
                year='2016 - 2020'
                title='Career Pause & Family Focus'
                company='Moved temporarily to Las Vegas, NV. Limited freelance work during this period.'
                index={1}
              />
              <TimelineItem
                year='2008 - 2016'
                title='Freelance Designer & Developer'
                company='Peak earning years. Web design, development, branding.'
                index={2}
              />
              <TimelineItem
                year='1998 - 2008'
                title='Agency Work & Early Career'
                company='Various agencies and studios. Graphic design, web development, multimedia production.'
                index={3}
                isLast={true}
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection
        id='contact'
        className='container mx-auto px-4 py-18 max-w-3xl'
      >
        <h2 className='text-3xl font-bold mb-8 text-primary'>Get In Touch</h2>
        <div className='space-y-6'>
          <p className='text-lg text-muted-foreground'>
            Looking for someone who can bridge design, development, and product
            thinking? Let's talk about your project.
          </p>
          <div className='space-y-4'>
            <div className='flex items-center gap-3'>
              <span className='text-muted-foreground'>Email:</span>
              <a
                href='mailto:bogs.paulino@gmail.com'
                className='hover:underline'
              >
                bogs.paulino@gmail.com
              </a>
            </div>
            <div className='flex items-center gap-3'>
              <span className='text-muted-foreground'>LinkedIn:</span>
              <a
                href='https://linkedin.com/in/williampaulino/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                linkedin.com/in/williampaulino/
              </a>
            </div>
            <div className='flex items-center gap-3'>
              <span className='text-muted-foreground'>GitHub:</span>
              <a
                href='https://github.com/bogsp'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                github.com/bogsp
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
