import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../Components/NavBar'

export default function Home() {
  return (
    <main className="flex">
      <NavBar />
      <div className="h-7 w-7 bg-red-500 md:bg-black"></div>
    </main>
  )
}
