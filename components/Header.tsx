'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Logo } from './Logo'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'À propos', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isPenthousePage = pathname === '/portfolio/penthouse-neuilly-sur-seine'
  const hasWhiteHeader = isHomePage || isPenthousePage
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/60 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="container-custom flex items-center justify-between py-3 md:justify-between"
        aria-label="Navigation principale"
      >
        {/* Mobile hamburger spacer (invisible, pour équilibrer) */}
        <div className="w-8 md:hidden"></div>

        {/* Logo - Centré sur mobile/tablette, gauche sur desktop */}
        <Link href="/" className="flex items-center md:order-first" aria-label="Accueil ECR">
          <Logo
            className={`transition-colors ${
              hasWhiteHeader && !isScrolled ? 'text-white' : 'text-primary-950'
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                hasWhiteHeader && !isScrolled
                  ? 'text-white hover:text-accent-light'
                  : 'text-primary-950 hover:text-primary-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex flex-col items-center justify-center space-y-1.5 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Menu de navigation"
        >
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              isMobileMenuOpen
                ? 'translate-y-2 rotate-45 bg-primary-950'
                : hasWhiteHeader && !isScrolled
                  ? 'bg-white'
                  : 'bg-primary-950'
            }`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              isMobileMenuOpen
                ? 'opacity-0 bg-primary-950'
                : hasWhiteHeader && !isScrolled
                  ? 'bg-white'
                  : 'bg-primary-950'
            }`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              isMobileMenuOpen
                ? '-translate-y-2 -rotate-45 bg-primary-950'
                : hasWhiteHeader && !isScrolled
                  ? 'bg-white'
                  : 'bg-primary-950'
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="container-custom border-t border-primary-200 bg-white/70 backdrop-blur-sm pb-6 pt-4">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium uppercase tracking-wider text-primary-950 transition-colors hover:text-primary-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

