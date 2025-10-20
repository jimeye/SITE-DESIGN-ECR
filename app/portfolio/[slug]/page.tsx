import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects'
import { ProjectGallery } from '@/components/ProjectGallery'
import { AnimatedSection } from '@/components/AnimatedSection'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Projet non trouvé',
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      images: [project.image],
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[500px] bg-primary-950 pt-24">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-80"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 to-transparent" />

        <div className="container-custom relative flex h-full items-end pb-12">
          <div className="max-w-3xl text-white">
            <p className="subheading mb-4 text-accent-light">
              {project.category}
            </p>
            <h1 className="heading-xl mb-4">{project.title}</h1>
            <p className="text-xl text-neutral-beige/90">{project.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            {/* Meta Information */}
            <div className="mb-12 grid gap-6 border-b border-primary-200 pb-12 md:grid-cols-3">
              <div>
                <p className="subheading mb-2">Client</p>
                <p className="text-xl text-primary-950">{project.client}</p>
              </div>
              <div>
                <p className="subheading mb-2">Année</p>
                <p className="text-xl text-primary-950">{project.year}</p>
              </div>
              <div>
                <p className="subheading mb-2">Durée</p>
                <p className="text-xl text-primary-950">{project.duration}</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-12">
              <h2 className="heading-md mb-6">Le projet</h2>
              <p className="whitespace-pre-line text-lg leading-relaxed text-primary-800">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="mb-12">
              <p className="subheading mb-4">Catégories</p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-neutral-beige px-4 py-2 text-sm uppercase tracking-wider text-primary-950"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery with Lightbox */}
      <section className="section bg-neutral-beige">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Galerie photos</h2>
          <ProjectGallery images={project.images} projectTitle={project.title} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Intéressé par un projet similaire ?</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-800">
            Contactez-nous pour discuter de votre projet et découvrir comment
            nous pouvons créer un intérieur d'exception pour vous.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Demander un devis
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              Voir tous les projets
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

