import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { ServiceCard } from '@/components/ServiceCard'
import { ProcessSteps } from '@/components/ProcessSteps'
import { ProjectCard } from '@/components/ProjectCard'
import { Testimonial } from '@/components/Testimonial'
import { AnimatedCard, AnimatedSection } from '@/components/AnimatedSection'
import { services } from '@/data/services'
import { getFeaturedProjects } from '@/data/projects'
import { getFeaturedTestimonials } from '@/data/testimonials'

export default function Home() {
  const featuredProjects = getFeaturedProjects()
  const testimonials = getFeaturedTestimonials(3)

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Exigence, qualité et prestige"
        tagline="Menuiserie, agencement et rénovation intérieur"
        description="ECR met tout son professionnalisme au service de votre bien-être et de votre confort. Nous réalisons des intérieurs prestigieux, confortables, élégants et uniques."
        primaryCTA={{
          text: 'Découvrir nos services',
          href: '/services',
        }}
        secondaryCTA={{
          text: 'Voir nos réalisations',
          href: '/portfolio',
        }}
        image="/hero-home.jpg"
        imagePriority={true}
      />

      {/* Services Section */}
      <section className="section bg-neutral-beige">
        <div className="container-custom">
          <div className="mb-6 text-center">
            <p className="subheading mb-4">Notre expertise</p>
            <h2 className="heading-lg mb-6">Nos services</h2>
            <p className="mx-auto max-w-2xl text-lg text-primary-800">
              ECR c&apos;est avant tout une expertise dans les métiers de la
              menuiserie, de la rénovation d&apos;intérieur et l&apos;agencement
              d&apos;intérieur
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedCard
                key={service.id}
                delay={index * 0.15}
                className=""
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

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-secondary min-w-[240px]">
              Tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <AnimatedSection>
        <ProcessSteps />
      </AnimatedSection>

      {/* Featured Projects */}
      <section className="section bg-neutral-beige">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <p className="subheading mb-4">Portfolio</p>
            <h2 className="heading-lg mb-6">Nos réalisations récentes</h2>
            <p className="mx-auto max-w-2xl text-lg text-primary-800">
              Découvrez quelques-uns de nos projets les plus emblématiques
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <AnimatedCard key={project.id} delay={index * 0.15}>
                <ProjectCard
                  title={project.title}
                  excerpt={project.excerpt}
                  image={project.image}
                  tags={project.tags}
                  slug={project.slug}
                />
              </AnimatedCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/portfolio" className="btn-secondary min-w-[240px]">
              Voir tous les projets
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <p className="subheading mb-4">Témoignages</p>
            <h2 className="heading-lg">Ce que disent nos clients</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard key={testimonial.id} delay={index * 0.15}>
                <Testimonial
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                  avatar={testimonial.avatar}
                />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-neutral-beige">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-800">
            Contactez-nous pour discuter de votre projet et obtenir un devis
            personnalisé. Notre équipe se fera un plaisir de vous accompagner.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary min-w-[240px]"
            >
              Demander un devis
            </Link>
            <Link
              href="/portfolio"
              className="btn-secondary min-w-[240px]"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

