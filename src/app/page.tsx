import { getServerSession } from 'next-auth'
import Chat from './components/Chat'
import { Separator } from '@/components/ui/separator'

export default async function Home() {
  const session = await getServerSession()

  console.log(session)

  return (
    <>
      <h1 className='text-4xl font-bold'>ChatGPT</h1>
      <p>Chat with an AI</p>
      <Separator />
      {session && <Chat />}
    </>
  )
}
