import Head from 'next/head'
import Hero from "../components/Hero"
import Advantages from "../components/Advantages"
import Footer from "../components/Footer"
import About from "../components/About"

export default function Home() {
  return (
    <div>
      <Head>
        <title>PCU Online Clearance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <Advantages />
      <Footer />
      <div className="flex gap-2">
        <a href="/users/students/books" className="hover:text-blue-500">STUDENT ACCOUNT</a>
        <a href="/users/admin/addAdmin" className="hover:text-blue-500">ADMIN ACCOUNT</a>
      </div>
    </div>
  )
}
