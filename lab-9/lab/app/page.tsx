import { redirect } from 'next/navigation'

export default function HomePage() {
  // Redirect users from the homepage (/) to your main dashboard
  redirect('/main')
}
