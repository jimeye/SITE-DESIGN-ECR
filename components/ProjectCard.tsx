import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  excerpt: string
  image: string
  tags: string[]
  slug: string
}

export function ProjectCard({
  title,
  excerpt,
  image,
  tags,
  slug,
}: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden bg-white">
      {/* Image */}
      <Link href={`/portfolio/${slug}`} className="block">
        <div className="overlay relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:p-8">
            <h3 className="heading-sm mb-2 text-white">{title}</h3>
            <p className="mb-4 line-clamp-2 text-sm text-neutral-beige/90">
              {excerpt}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider text-white backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>

      {/* Content Below Image */}
      <div className="flex flex-col p-6">
        <h3 className="mb-2 flex min-h-[3rem] items-center font-serif text-xl font-light">{title}</h3>
        <p className="mb-3 min-h-[3rem] text-sm text-primary-700 line-clamp-2">{excerpt}</p>
        <Link
          href={`/portfolio/${slug}`}
          className="mt-auto inline-flex items-center text-sm font-medium uppercase tracking-wider text-primary-950 transition-colors hover:text-primary-700"
        >
          Voir le projet
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

