'use client'

import { useState } from 'react'

interface AddressPopupProps {
  theme?: 'light' | 'dark'
}

export function AddressPopup({ theme = 'dark' }: AddressPopupProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navigationLinks = [
    {
      name: 'Google Maps',
      href: 'https://www.google.com/maps/dir/?api=1&destination=7+rue+Bernard+93000+Bobigny+France',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
    },
    {
      name: 'Waze',
      href: 'https://waze.com/ul?q=7+rue+Bernard+93000+Bobigny+France&navigate=yes',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
    },
    {
      name: 'Apple Plans',
      href: 'https://maps.apple.com/?daddr=7+rue+Bernard+93000+Bobigny+France',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="relative">
      {/* Address - clickable */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group cursor-pointer text-left transition-colors ${
          theme === 'dark' ? 'hover:text-accent-light' : 'hover:text-primary-600'
        }`}
      >
        <p className="group-hover:underline">7, rue Bernard</p>
        <p className="group-hover:underline">93000 BOBIGNY</p>
      </button>

      {/* Popup */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-primary-950/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Popup content */}
          <div className="absolute bottom-full left-0 z-50 mb-2 w-44 rounded-sm border border-primary-200 bg-white p-3 shadow-xl">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-1 top-1 text-primary-700 transition-colors hover:text-primary-950"
              aria-label="Fermer"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="space-y-1.5">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-sm bg-neutral-beige px-3 py-2 text-xs font-medium text-primary-950 transition-all hover:bg-primary-950 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <span className="uppercase tracking-wider">{link.name}</span>
                  <svg
                    className="ml-auto h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

