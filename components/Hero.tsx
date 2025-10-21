import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  title: string
  subtitle?: string
  tagline?: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  image?: string
  imagePriority?: boolean
  variant?: 'default' | 'minimal'
}

export function Hero({
  title,
  subtitle,
  tagline,
  description,
  primaryCTA,
  secondaryCTA,
  image,
  imagePriority = false,
  variant = 'default',
}: HeroProps) {
  if (variant === 'minimal') {
    return (
      <section className="relative bg-neutral-beige py-24 md:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            {subtitle && <p className="subheading mb-4">{subtitle}</p>}
            <h1 className="heading-xl mb-6">{title}</h1>
            {description && (
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-primary-800">
                {description}
              </p>
            )}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-neutral-beige">
      {/* Image de fond pleine largeur */}
      {image && (
        <>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority={imagePriority}
            sizes="100vw"
          />
          {/* Overlay léger pour lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/40 via-primary-950/20 to-transparent" />
        </>
      )}

      {/* Contenu par-dessus l'image */}
      <div className="container-custom relative z-10">
        <div className="flex min-h-screen items-center">
          <div className="max-w-3xl py-16 md:py-32 -mt-8 md:mt-0">
            {subtitle && (
              <p className="subheading mb-6 text-accent-light">{subtitle}</p>
            )}
            <h1 className="heading-xl mb-6 text-balance text-white">
              {title}
            </h1>
            {tagline && (
              <p className="mb-8 text-3xl font-light leading-relaxed text-accent-light md:text-4xl">
                {tagline}
              </p>
            )}
            {description && (
              <p className="mb-10 max-w-2xl text-xl leading-relaxed text-neutral-beige">
                {description}
              </p>
            )}

            {/* CTAs */}
            <div className="flex flex-col items-center gap-4 sm:items-start sm:flex-row -mt-8 md:mt-0">
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="btn-primary min-w-[240px] bg-accent text-primary-950 hover:bg-accent-dark"
                >
                  {primaryCTA.text}
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="btn-secondary min-w-[240px] border-white text-white hover:bg-white hover:text-primary-950"
                >
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

