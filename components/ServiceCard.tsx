import Link from 'next/link'

interface ServiceCardProps {
  title: string
  excerpt: string
  tagline: string
  icon: string
  href: string
}

const iconPaths: Record<string, JSX.Element> = {
  menuiserie: (
    <svg
      className="h-12 w-12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  ),
  renovation: (
    <svg
      className="h-12 w-12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  ),
  agencement: (
    <svg
      className="h-12 w-12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
      />
    </svg>
  ),
}

export function ServiceCard({
  title,
  excerpt,
  tagline,
  icon,
  href,
}: ServiceCardProps) {
  return (
    <article className="group relative flex flex-col bg-white p-4 text-center transition-all duration-300 hover:shadow-lg md:p-8 lg:p-10">
      {/* Icon - hauteur fixe */}
      <div className="mb-4 flex h-10 items-center justify-center text-accent-dark transition-colors duration-300 group-hover:text-primary-950 md:mb-6 md:h-12">
        {iconPaths[icon] || iconPaths.menuiserie}
      </div>

      {/* Title - hauteur minimale fixe */}
      <h3 className="mb-3 flex min-h-[4.5rem] items-center justify-center font-serif text-xl font-light tracking-tight md:mb-4 md:min-h-[5rem] md:text-3xl">{title}</h3>

      {/* Excerpt - hauteur minimale fixe */}
      <p className="mx-auto mb-4 flex min-h-[6rem] max-w-sm items-start text-sm leading-relaxed text-primary-700 md:mb-6 md:min-h-[7rem] md:text-base md:max-w-md">
        {excerpt}
      </p>

      {/* Tagline & CTA - alignés en bas ensemble */}
      <div className="mt-auto">
        {/* Tagline */}
        <p className="mb-4 font-serif text-lg font-light italic text-accent-dark md:mb-6 md:text-xl">
          {tagline}
        </p>

        {/* CTA */}
        <Link
          href={href}
          className="inline-flex items-center justify-center text-xs font-medium uppercase tracking-wider text-primary-950 transition-colors hover:text-primary-700 md:text-sm"
        >
          Découvrir
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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
        </Link>
      </div>
    </article>
  )
}

