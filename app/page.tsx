import Intro from "@/components/intro"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Timeline from "@/components/sections/timeline"
import Skills from "@/components/sections/skills"
import Services from "@/components/sections/services"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Intro />
      <Navbar />

      {/* Paper grain and one slow warm light, fixed behind everything */}
      <div aria-hidden className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 grain opacity-[0.05]" />
        <div
          className="ambient absolute -top-[20%] -start-[10%] h-[70vw] w-[70vw] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(196,168,130,0.16) 0%, rgba(196,168,130,0) 60%)",
          }}
        />
      </div>

      <main className="relative z-10">
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
