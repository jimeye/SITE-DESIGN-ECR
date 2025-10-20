import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ContactForm } from '@/components/ContactForm'

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)

    expect(screen.getByLabelText(/nom complet/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/téléphone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/budget/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<ContactForm />)
    expect(
      screen.getByRole('button', { name: /envoyer le message/i })
    ).toBeInTheDocument()
  })

  it('shows validation error for empty name', async () => {
    render(<ContactForm />)

    const submitButton = screen.getByRole('button', {
      name: /envoyer le message/i,
    })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(
        screen.getByText(/le nom doit contenir au moins 2 caractères/i)
      ).toBeInTheDocument()
    })
  })

  it('shows validation error for invalid email', async () => {
    render(<ContactForm />)

    const emailInput = screen.getByLabelText(/email/i)
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })

    const submitButton = screen.getByRole('button', {
      name: /envoyer le message/i,
    })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/email invalide/i)).toBeInTheDocument()
    })
  })

  it('shows validation error for short message', async () => {
    render(<ContactForm />)

    const messageInput = screen.getByLabelText(/message/i)
    fireEvent.change(messageInput, { target: { value: 'Short' } })

    const submitButton = screen.getByRole('button', {
      name: /envoyer le message/i,
    })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(
        screen.getByText(/le message doit contenir au moins 10 caractères/i)
      ).toBeInTheDocument()
    })
  })

  it('accepts valid form data', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: 'Success' }),
      } as Response)
    )

    render(<ContactForm />)

    fireEvent.change(screen.getByLabelText(/nom complet/i), {
      target: { value: 'Jean Dupont' },
    })
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'jean.dupont@exemple.fr' },
    })
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Ceci est un message de test valide' },
    })

    const submitButton = screen.getByRole('button', {
      name: /envoyer le message/i,
    })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/contact',
        expect.objectContaining({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })
      )
    })
  })

  it('has proper ARIA attributes for accessibility', () => {
    render(<ContactForm />)

    const nameInput = screen.getByLabelText(/nom complet/i)
    expect(nameInput).toHaveAttribute('aria-invalid', 'false')
  })
})

