import Link from 'next/link'
import { AddressPopup } from './AddressPopup'

const footerLinks = {
  navigation: [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Menuiserie', href: '/services/menuiserie' },
    { name: "Rénovation d'intérieur", href: '/services/renovation-interieur' },
    { name: 'Agencement', href: '/services/agencement' },
  ],
}

const socialLinks = [
  {
    name: 'Instagram',
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: process.env.NEXT_PUBLIC_FACEBOOK_URL || '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-950 text-neutral-cream">
      {/* Main Footer Content */}
      <div className="container-custom py-4">
        <div className="grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-4">
          {/* About Column */}
          <div className="col-span-2 lg:col-span-2">
            <h3 className="mb-4">
              <div className="font-sans text-2xl font-bold tracking-[0.15em] leading-none mb-0.5">
                ECR
              </div>
              <div className="font-sans text-sm font-bold uppercase tracking-widest leading-none text-accent-light">
                Étude Conception Réalisations
              </div>
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-neutral-beige/80">
              Menuiserie, Rénovation d&apos;intérieur et Agencement haut de gamme.
              ECR réalise des intérieurs prestigieux, confortables et élégants
              à Paris et région parisienne.
            </p>
            <div className="space-y-2 text-sm text-neutral-beige/80">
              <AddressPopup />
              <p className="pt-2">
                <a
                  href="tel:+33148430509"
                  className="transition-colors hover:text-accent-light"
                >
                  01 48 43 05 09
                </a>
              </p>
              <p>
                <a
                  href="mailto:ecr@club-internet.fr"
                  className="transition-colors hover:text-accent-light"
                >
                  ecr@club-internet.fr
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-beige/80 transition-colors hover:text-accent-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-beige/80 transition-colors hover:text-accent-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-beige/10">
        <div className="container-custom flex flex-col items-center justify-center gap-4 py-2">
          <div className="text-center">
            <p className="text-sm text-neutral-beige/60">
              © {currentYear} ECR - Étude Conception Réalisations. Tous droits
              réservés.
            </p>
            <p className="mt-1 text-sm text-neutral-beige/60">
              Website design by{' '}
              <a
                href="https://josephstudiocreative.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase tracking-wider transition-colors hover:text-accent-light"
              >
                JOSEPH STUDIO CREATIVE
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-neutral-beige/60 transition-colors hover:text-accent-light"
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

