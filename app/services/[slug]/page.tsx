import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Hero } from '@/components/Hero'
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: 'Service non trouvé',
    }
  }

  return {
    title: service.title,
    description: service.description,
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <Hero
        title={service.title}
        subtitle="Notre service"
        description={service.excerpt}
        variant="minimal"
      />

      {/* Service Details */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {/* Description */}
            <div className="mb-12">
              <h2 className="heading-md mb-6">À propos de ce service</h2>
              <p className="text-lg leading-relaxed text-primary-800">
                {service.description}
              </p>
            </div>

            {/* Pricing & Timeline */}
            <div className="mb-12 grid gap-8 md:grid-cols-2">
              <div className="bg-neutral-beige p-8">
                <p className="subheading mb-2">Investissement</p>
                <p className="font-serif text-[1.69rem] font-light italic text-primary-950">
                  Tarif sur devis
                </p>
                <p className="mt-2 text-sm text-primary-700">Devis personnalisé gratuit</p>
              </div>

              <div className="bg-neutral-beige p-8">
                <p className="subheading mb-2">Délai</p>
                <p className="text-xl font-light text-primary-950">
                  {service.timeline}
                </p>
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-12">
              <h2 className="heading-md mb-6">Ce qui est inclus</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {service.deliverables.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-accent-dark"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg text-primary-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-primary-200 pt-12 text-center">
              <h3 className="heading-sm mb-6">
                Prêt à démarrer votre projet ?
              </h3>
              <p className="mb-8 text-lg text-primary-800">
                Contactez-nous pour obtenir un devis personnalisé et discuter
                de vos besoins spécifiques.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="btn-primary"
                >
                  Demander un devis
                </Link>
                <Link href="/portfolio" className="btn-secondary">
                  Voir nos réalisations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section bg-neutral-beige">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="subheading mb-4">Nos autres services</p>
            <h2 className="heading-lg">Découvrez également</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/menuiserie" className="btn-secondary">
              Menuiserie
            </Link>
            <Link
              href="/services/renovation-interieur"
              className="btn-secondary"
            >
              Rénovation d'intérieur
            </Link>
            <Link href="/services/agencement" className="btn-secondary">
              Agencement
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

