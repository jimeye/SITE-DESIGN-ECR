import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

interface ContactSubmission {
  name: string
  email: string
  phone?: string
  budget?: string
  message: string
  timestamp: string
}

const SUBMISSIONS_DIR = path.join(process.cwd(), 'data', 'submissions')
const SUBMISSIONS_FILE = path.join(SUBMISSIONS_DIR, 'contacts.json')

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Champs requis manquants' },
        { status: 400 }
      )
    }

    // Create submission object
    const submission: ContactSubmission = {
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      budget: body.budget || '',
      message: body.message,
      timestamp: new Date().toISOString(),
    }

    // Ensure directory exists
    if (!existsSync(SUBMISSIONS_DIR)) {
      await mkdir(SUBMISSIONS_DIR, { recursive: true })
    }

    // Read existing submissions or create new array
    let submissions: ContactSubmission[] = []
    if (existsSync(SUBMISSIONS_FILE)) {
      const fileContent = await readFile(SUBMISSIONS_FILE, 'utf-8')
      submissions = JSON.parse(fileContent)
    }

    // Add new submission
    submissions.push(submission)

    // Write back to file
    await writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2))

    // In production, you would send an email here
    // await sendEmail(submission)

    return NextResponse.json(
      { message: 'Message envoyé avec succès', submission },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Erreur lors du traitement du formulaire' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Utilisez POST pour envoyer un message' },
    { status: 405 }
  )
}

