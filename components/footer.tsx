export function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 William Paulino. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="mailto:bogs.paulino@gmail.com" className="hover:underline">
              Email
            </a>
            <a href="https://linkedin.com/in/williampaulino/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
            <a href="https://github.com/bogsp" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}