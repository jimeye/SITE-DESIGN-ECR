import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { AnimatedSection } from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'ECR réalise des intérieurs prestigieux avec exigence et passion. Découvrez notre histoire, nos valeurs et notre approche du luxe sur-mesure.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="À propos d'ECR"
        subtitle="Notre histoire"
        description="Exigence, qualité et prestige au service de votre bien-être"
        variant="minimal"
      />

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative h-[500px] lg:h-[700px]">
              <Image
                src="/about-image.jpg"
                alt="ECR - Atelier de menuiserie"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h2 className="heading-md mb-6">
                  Une vision du luxe pour l'agencement d'intérieur
                </h2>
                <div className="space-y-4 text-lg leading-relaxed text-primary-800">
                  <p>
                    ECR met tout son professionnalisme au service de votre
                    bien-être et de votre confort. Depuis notre création, nous
                    réalisons des pièces de menuiserie pour que votre intérieur
                    soit unique, à votre image.
                  </p>
                  <p>
                    Nos chantiers sont réalisés sur mesure avec une grande
                    rigueur et beaucoup de passion. Nous apportons un service
                    personnalisé et des solutions haut de gamme adaptées à votre
                    projet de rénovation d'appartement, maison, bureau et
                    boutique.
                  </p>
                  <p>
                    ECR c'est avant tout une expertise dans les métiers de la
                    menuiserie, de la rénovation d'intérieur et l'agencement
                    d'intérieur. Nous réalisons des intérieurs prestigieux,
                    confortables, élégants, de standing et uniques.
                  </p>
                </div>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <p className="font-serif text-2xl font-light italic leading-relaxed text-primary-900">
                  "Notre mission est de donner vie à tous vos rêves avec
                  excellence et raffinement"
                </p>
              </div>
            </div>
          </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection>
        <section className="section bg-neutral-beige">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <p className="subheading mb-4">Nos valeurs</p>
            <h2 className="heading-lg">Ce qui nous guide</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8">
              <h3 className="heading-sm mb-4">Excellence</h3>
              <p className="leading-relaxed text-primary-700">
                Nous visons l'excellence dans chaque détail, de la conception à
                la réalisation. Nos finitions haut de gamme reflètent notre
                engagement envers la qualité.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="heading-sm mb-4">Sur-mesure</h3>
              <p className="leading-relaxed text-primary-700">
                Chaque projet est unique. Nous créons des solutions
                personnalisées qui s'adaptent parfaitement à vos besoins, vos
                goûts et votre espace.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="heading-sm mb-4">Prestige</h3>
              <p className="leading-relaxed text-primary-700">
                Notre positionnement haut de gamme se traduit par le choix de
                matériaux nobles et un savoir-faire artisanal d'exception.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="heading-sm mb-4">Rigueur</h3>
              <p className="leading-relaxed text-primary-700">
                Respect des délais, suivi méticuleux des chantiers et
                coordination parfaite de tous les corps d'état pour votre
                tranquillité.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="heading-sm mb-4">Innovation</h3>
              <p className="leading-relaxed text-primary-700">
                Nos innovations techniques et esthétiques nous permettent de
                répondre aux attentes les plus exigeantes tout en anticipant les
                tendances.
              </p>
            </div>

            <div className="bg-white p-8">
              <h3 className="heading-sm mb-4">Passion</h3>
              <p className="leading-relaxed text-primary-700">
                Notre passion pour les métiers de la menuiserie et de
                l'agencement se ressent dans chaque projet que nous réalisons.
              </p>
            </div>
          </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="section bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Travaillons ensemble</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-800">
            Vous avez un projet d'aménagement, de rénovation ou de menuiserie ?
            Contactez-nous pour en discuter.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Nous contacter
            </Link>
            <Link href="/services" className="btn-secondary">
              Découvrir nos services
            </Link>
          </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  )
}

