interface Step {
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'Rencontre initiale pour comprendre vos besoins, vos goûts et votre budget. Visite des lieux et prise de mesures.',
  },
  {
    number: '02',
    title: 'Conception',
    description:
      'Élaboration de plans détaillés et de visuels 3D. Sélection des matériaux nobles et présentation du projet.',
  },
  {
    number: '03',
    title: 'Réalisation',
    description:
      'Fabrication sur-mesure et mise en œuvre par nos artisans. Suivi rigoureux du chantier et respect des délais.',
  },
  {
    number: '04',
    title: 'Livraison',
    description:
      'Installation finale, vérification de chaque détail et présentation de votre projet achevé. Garantie et suivi.',
  },
]

'use client'

import { AnimatedNumber } from './AnimatedNumber'

export function ProcessSteps() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="subheading mb-4">Notre approche</p>
          <h2 className="heading-lg">Un processus maîtrisé</h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connector Line (hidden on mobile, shown on desktop) */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-accent-light lg:block" />
              )}

              {/* Step Content */}
              <div className="relative">
                {/* Number Circle */}
                <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center bg-accent-light">
                  <span className="font-serif text-2xl font-light text-primary-950">
                    {step.number}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mb-3 text-xl font-medium">{step.title}</h3>
                <p className="mx-auto max-w-xs text-sm leading-relaxed text-primary-700 md:max-w-none">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

