import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function Nav() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-5xl">
        <Link href="/" className="font-semibold text-lg">
          Bogs
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/#work" className="text-sm hover:underline">
            Work
          </Link>
          <Link href="/#about" className="text-sm hover:underline">
            About
          </Link>
          <Link href="/#contact" className="text-sm hover:underline">
            Contact
          </Link>
          <Link href="/blog" className="text-sm hover:underline">
            Blog
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}