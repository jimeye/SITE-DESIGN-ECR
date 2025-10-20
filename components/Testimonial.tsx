import Image from 'next/image'

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company?: string
  avatar?: string
}

export function Testimonial({
  quote,
  author,
  role,
  company,
  avatar,
}: TestimonialProps) {
  return (
    <blockquote className="relative bg-white p-8 md:p-10">
      {/* Quote Icon */}
      <svg
        className="mb-6 h-10 w-10 text-accent-light"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Quote */}
      <p className="mb-8 font-serif text-xl font-light leading-relaxed text-primary-900">
        {quote}
      </p>

      {/* Author */}
      <footer className="flex items-center">
        {avatar && (
          <div className="relative mr-4 h-14 w-14 overflow-hidden rounded-full">
            <Image
              src={avatar}
              alt={author}
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
        )}
        <div>
          <cite className="not-italic font-medium text-primary-950">
            {author}
          </cite>
          <p className="text-sm text-primary-700">
            {role}
            {company && ` - ${company}`}
          </p>
        </div>
      </footer>
    </blockquote>
  )
}

