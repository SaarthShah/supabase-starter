import { redirect } from 'next/navigation'
import { createClient } from '@/app/utils/supabase-server'
import MainPage from './components/main-page'

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/auth/login')
  }

  return (
    <div>
      <p>Hello {data.user.email}</p>
      <MainPage/>
    </div>
  )
}