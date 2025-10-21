import { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { ContactForm } from '@/components/ContactForm'
import { AnimatedSection } from '@/components/AnimatedSection'
import { AddressPopup } from '@/components/AddressPopup'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez ECR pour votre projet de menuiserie, rénovation ou agencement. Devis personnalisé et conseil expert à Paris et région parisienne.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Contactez-nous"
        subtitle="Démarrons votre projet"
        description="Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais pour discuter de votre projet."
        variant="minimal"
      />

      {/* Contact Section */}
      <AnimatedSection>
        <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="heading-md mb-8">Nos coordonnées</h2>

              <div className="space-y-8">
                {/* Address */}
                <div>
                  <h3 className="subheading mb-3">Adresse</h3>
                  <AddressPopup theme="light" />
                </div>

                {/* Phone */}
                <div>
                  <h3 className="subheading mb-3">Téléphone</h3>
                  <a
                    href="tel:+33148430509"
                    className="text-lg text-primary-800 transition-colors hover:text-primary-600"
                  >
                    01 48 43 05 09
                  </a>
                </div>

                {/* Email */}
                <div>
                  <h3 className="subheading mb-3">Email</h3>
                  <a
                    href="mailto:ecr@club-internet.fr"
                    className="text-lg text-primary-800 transition-colors hover:text-primary-600"
                  >
                    ecr@club-internet.fr
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="subheading mb-3">Horaires</h3>
                  <div className="space-y-1 text-lg text-primary-800">
                    <p>Lundi - Vendredi : 9h00 - 18h00</p>
                    <p>Samedi : Sur rendez-vous</p>
                    <p>Dimanche : Fermé</p>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h3 className="subheading mb-3">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a
                      href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center bg-primary-950 text-white transition-colors hover:bg-primary-800"
                      aria-label="Instagram"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href={process.env.NEXT_PUBLIC_FACEBOOK_URL || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center bg-primary-950 text-white transition-colors hover:bg-primary-800"
                      aria-label="Facebook"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-neutral-beige p-8 lg:p-12">
              <h2 className="heading-md mb-8">Envoyez-nous un message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>
    </>
  )
}

