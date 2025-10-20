import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServiceCard } from '@/components/ServiceCard'

describe('ServiceCard', () => {
  const mockProps = {
    title: 'Menuiserie',
    excerpt: 'Création sur-mesure de mobilier',
    tagline: 'Excellence artisanale',
    icon: 'menuiserie',
    href: '/services/menuiserie',
  }

  it('renders service title', () => {
    render(<ServiceCard {...mockProps} />)
    expect(screen.getByText('Menuiserie')).toBeInTheDocument()
  })

  it('renders service excerpt', () => {
    render(<ServiceCard {...mockProps} />)
    expect(
      screen.getByText('Création sur-mesure de mobilier')
    ).toBeInTheDocument()
  })

  it('renders tagline', () => {
    render(<ServiceCard {...mockProps} />)
    expect(screen.getByText('Excellence artisanale')).toBeInTheDocument()
  })

  it('renders CTA link with correct href', () => {
    render(<ServiceCard {...mockProps} />)
    const link = screen.getByRole('link', { name: /découvrir/i })
    expect(link).toHaveAttribute('href', '/services/menuiserie')
  })

  it('renders as an article element', () => {
    const { container } = render(<ServiceCard {...mockProps} />)
    expect(container.querySelector('article')).toBeInTheDocument()
  })

  it('displays icon', () => {
    const { container } = render(<ServiceCard {...mockProps} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})

