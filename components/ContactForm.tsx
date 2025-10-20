'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z
    .string()
    .regex(
      /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      'Numéro de téléphone invalide'
    )
    .optional()
    .or(z.literal('')),
  budget: z.string().optional(),
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire")
      }

      setIsSuccess(true)
      reset()

      // Close success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Une erreur est survenue. Veuillez réessayer.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="label">
            Nom complet *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="input"
            placeholder="Jean Dupont"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="label">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="input"
            placeholder="jean.dupont@exemple.fr"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="label">
            Téléphone
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="input"
            placeholder="01 23 45 67 89"
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="label">
            Budget estimé
          </label>
          <select {...register('budget')} id="budget" className="input">
            <option value="">Sélectionnez une fourchette</option>
            <option value="5000-10000">5 000€ - 10 000€</option>
            <option value="10000-25000">10 000€ - 25 000€</option>
            <option value="25000-50000">25 000€ - 50 000€</option>
            <option value="50000+">50 000€ et plus</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="label">
            Message *
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={6}
            className="textarea"
            placeholder="Décrivez votre projet..."
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="rounded-sm bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>
      </form>

      {/* Success Modal */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-950/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white p-8 text-center shadow-2xl">
            <div className="mb-4 flex justify-center">
              <svg
                className="h-16 w-16 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 font-serif text-2xl font-light">
              Message envoyé !
            </h3>
            <p className="mb-6 text-primary-700">
              Merci pour votre message. Nous vous répondrons dans les plus
              brefs délais.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="btn-secondary"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

