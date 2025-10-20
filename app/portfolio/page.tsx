'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { ProjectCard } from '@/components/ProjectCard'
import { projects, getAllTags } from '@/data/projects'

export default function PortfolioPage() {
  const [selectedTag, setSelectedTag] = useState<string>('Tous')
  const allTags = ['Tous', ...getAllTags()]

  const filteredProjects =
    selectedTag === 'Tous'
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag))

  return (
    <>
      {/* Hero */}
      <Hero
        title="Notre portfolio"
        subtitle="Nos réalisations"
        description="Découvrez nos projets d'intérieurs prestigieux, réalisés avec exigence et passion pour nos clients."
        variant="minimal"
      />

      {/* Filter Tags */}
      <section className="section-sm bg-neutral-beige">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`rounded-none px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all ${
                  selectedTag === tag
                    ? 'bg-primary-950 text-neutral-cream'
                    : 'bg-white text-primary-950 hover:bg-primary-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          {filteredProjects.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  excerpt={project.excerpt}
                  image={project.image}
                  tags={project.tags}
                  slug={project.slug}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-primary-700">
                Aucun projet trouvé pour cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-950 text-neutral-cream">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Votre projet mérite l&apos;excellence</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-neutral-beige/80">
            Laissez-nous créer un intérieur unique qui reflète votre
            personnalité et vos aspirations.
          </p>
          <Link
            href="/contact"
            className="btn-primary bg-accent text-primary-950 hover:bg-accent-dark"
          >
            Démarrer votre projet
          </Link>
        </div>
      </section>
    </>
  )
}

