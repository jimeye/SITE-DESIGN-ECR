import { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { ServiceCard } from '@/components/ServiceCard'
import { AnimatedCard } from '@/components/AnimatedSection'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Menuiserie sur-mesure, Rénovation d\'intérieur haut de gamme et Agencement d\'exception. Découvrez nos services pour créer des intérieurs prestigieux.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Nos services"
        subtitle="Notre expertise"
        description="Menuiserie, Rénovation d'intérieur et Agencement. Des solutions haut de gamme pour des intérieurs d'exception."
        variant="minimal"
      />

      {/* Services Grid */}
      <section className="bg-neutral-beige pb-16 pt-2 md:pb-24 md:pt-4 lg:pb-32 lg:pt-6">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedCard
                key={service.id}
                delay={index * 0.15}
                className={index === 2 ? 'col-span-2 lg:col-span-1' : ''}
              >
                <ServiceCard
                  title={service.title}
                  excerpt={service.excerpt}
                  tagline={service.tagline}
                  icon={service.icon}
                  href={`/services/${service.slug}`}
                />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail Summary */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`flex flex-col justify-center ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <p className="subheading mb-4">{service.title}</p>
                  <h2 className="heading-md mb-6">{service.excerpt}</h2>
                  <p className="mb-6 text-lg leading-relaxed text-primary-800">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <p className="font-serif text-2xl font-light italic text-accent-dark">
                      {service.tagline}
                    </p>
                  </div>
                  <div className="flex justify-center sm:justify-start">
                    <Link
                      href={`/services/${service.slug}`}
                      className="btn-primary min-w-[240px]"
                    >
                      En savoir plus
                    </Link>
                  </div>
                </div>

                <div
                  className={`bg-neutral-beige p-8 ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <h3 className="mb-6 text-xl font-medium">
                    Nos prestations incluent :
                  </h3>
                  <ul className="space-y-3">
                    {service.deliverables.slice(0, 5).map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent-dark"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-primary-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-primary-700">
                    <strong>Délai :</strong> {service.timeline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-neutral-beige">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Discutons de votre projet</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-800">
            Chaque projet est unique. Contactez-nous pour obtenir un devis
            personnalisé adapté à vos besoins.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary min-w-[240px]">
              Demander un devis
            </Link>
            <Link href="/portfolio" className="btn-secondary min-w-[240px]">
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

