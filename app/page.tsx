import { HeroSection } from '@/components/hero-section'
import { WorkCard } from '@/components/work-card'

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* Work Section */}
      <section id='work'>
        <div className='container mx-auto px-4 py-18 max-w-3xl'>
          <h2 className='text-3xl font-bold mb-8 text-primary'>Recent Work</h2>
          <div className='space-y-8'>
            <WorkCard
              title="PM Dashboard"
              description="A project management dashboard for small teams. Built with Next.js, React, TypeScript, and Tailwind CSS. Demonstrates clean component architecture, responsive design, and understanding of team workflows."
              tags={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
              demoUrl="https://bogs-pmd.vercel.app/"
              demoLabel="View Live Demo"
              secondaryUrl="https://bogs-pmd.vercel.app/dashboard"
              secondaryLabel="See Dashboard"
              index={0}
            />
            
            <WorkCard
              title="Developer Documentation Site"
              description="Complete technical documentation for the PM Dashboard. Features dynamic file-based routing, MDX content, syntax highlighting, and auto-generated navigation. Shows I can build and document."
              tags={["Next.js", "MDX", "TypeScript", "Shadcn UI"]}
              demoUrl="https://bogs-pmd-docs.vercel.app/"
              demoLabel="View Documentation"
              secondaryUrl="https://github.com/bogsp/pm-dashboard-docs"
              secondaryLabel="View Code"
              index={1}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about'>
        <div className='container mx-auto px-4 py-18 max-w-3xl'>
          <h2 className='text-3xl font-bold mb-8 text-primary'>About</h2>
          <div className='space-y-8'>
            <div className='space-y-4'>
              <p className='text-lg'>
                I'm a <em>Scanner</em> — someone with multiple genuine interests
                and the ability to connect ideas across domains. Where
                specialists go deep, I go wide, finding solutions others miss by
                drawing from design, development, product management, and
                strategy.
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
                <div>
                  <h4 className='text-sm font-medium mb-3 text-muted-foreground'>
                    Primary Skills
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    <span className='text-sm px-3 py-1.5 rounded bg-secondary text-secondary-foreground'>
                      React
                    </span>
                    <span className='text-sm px-3 py-1.5 rounded bg-secondary text-secondary-foreground'>
                      TypeScript
                    </span>
                    <span className='text-sm px-3 py-1.5 rounded bg-secondary text-secondary-foreground'>
                      Next.js
                    </span>
                    <span className='text-sm px-3 py-1.5 rounded bg-secondary text-secondary-foreground'>
                      Node.js
                    </span>
                    <span className='text-sm px-3 py-1.5 rounded bg-secondary text-secondary-foreground'>
                      Figma
                    </span>
                    <span className='text-sm px-3 py-1.5 rounded bg-secondary text-secondary-foreground'>
                      Product Management
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className='text-sm font-medium mb-3 text-muted-foreground'>
                    Supporting Skills
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    <span className='text-sm px-3 py-1.5 rounded bg-secondary text-secondary-foreground'>
                      UX/UI Design
                    </span>
                    <span className='text-sm px-3 py-1.5 rounded bg-secondary text-secondary-foreground'>
                      Technical Documentation
                    </span>
                    <span className='text-sm px-3 py-1.5 rounded bg-secondary text-secondary-foreground'>
                      System Architecture
                    </span>
                    <span className='text-sm px-3 py-1.5 rounded bg-secondary text-secondary-foreground'>
                      Strategy & Planning
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold text-primary'>
                Experience Timeline
              </h3>
              <div className='space-y-6'>
                {/* Timeline Item */}
                <div className='flex gap-4'>
                  <div className='flex flex-col items-center'>
                    <div className='w-3 h-3 rounded-full bg-secondary mt-1.5' />
                    <div className='w-0.5 h-full bg-secondary mt-2' />
                  </div>
                  <div className='flex-1 pb-8'>
                    <div className='text-sm text-muted-foreground'>
                      2020 - Present
                    </div>
                    <h4 className='font-semibold text-primary'>
                      Product Manager & Full-Stack Developer
                    </h4>
                    <p className='text-sm text-muted-foreground mt-1'>
                      Raket.ph (part-time) + freelance projects. Building with
                      React, TypeScript, Next.js.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div className='flex flex-col items-center'>
                    <div className='w-3 h-3 rounded-full bg-secondary mt-1.5' />
                    <div className='w-0.5 h-full bg-secondary mt-2' />
                  </div>
                  <div className='flex-1 pb-8'>
                    <div className='text-sm text-muted-foreground'>
                      2016 - 2020
                    </div>
                    <h4 className='font-semibold text-primary'>
                      Career Pause & Family Focus
                    </h4>
                    <p className='text-sm text-muted-foreground mt-1'>
                      Moved temporarily to Las Vegas, NV. Limited freelance work
                      during this period.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div className='flex flex-col items-center'>
                    <div className='w-3 h-3 rounded-full bg-secondary mt-1.5' />
                    <div className='w-0.5 h-full bg-secondary mt-2' />
                  </div>
                  <div className='flex-1 pb-8'>
                    <div className='text-sm text-muted-foreground'>
                      2008 - 2016
                    </div>
                    <h4 className='font-semibold text-primary'>
                      Freelance Designer & Developer
                    </h4>
                    <p className='text-sm text-muted-foreground mt-1'>
                      Peak earning years. Web design, development, branding.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div className='flex flex-col items-center'>
                    <div className='w-3 h-3 rounded-full bg-secondary mt-1.5' />
                  </div>
                  <div className='flex-1'>
                    <div className='text-sm text-muted-foreground'>
                      1998 - 2008
                    </div>
                    <h4 className='font-semibold text-primary'>
                      Agency Work & Early Career
                    </h4>
                    <p className='text-sm text-muted-foreground mt-1'>
                      Various agencies and studios. Graphic design, web
                      development, multimedia production.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact'>
        <div className='container mx-auto px-4 py-18 max-w-3xl'>
          <h2 className='text-3xl font-bold mb-8 text-primary'>Get In Touch</h2>
          <div className='space-y-6'>
            <p className='text-lg text-muted-foreground'>
              Looking for someone who can bridge design, development, and
              product thinking? Let's talk about your project.
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
        </div>
      </section>
    </main>
  )
}
