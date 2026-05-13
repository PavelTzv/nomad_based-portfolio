import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-black/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
        >
          Kalina Stamenova
        </Link>

        <nav className="flex items-center gap-6 text-sm">

          <Link href="/branding-project">
            Branding Project
          </Link>

          <Link href="/marketing-materials">
            Marketing Materials
          </Link>

          <Link href="/photographs">
            Photographs
          </Link>

          <Link href="/about-me">
            About Me
          </Link>
        </nav>

      </div>
    </header>
  );
}