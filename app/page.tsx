import Image from "next/image";
import Footer from "@/components/sharedComponents/Footer";
import Contact from "@/components/sharedComponents/Contact";
import Hero from "@/components/home/Hero";
import heroImage from "@/public/images/ui/gray-bg.jpg";
import Numbers from "@/components/sharedComponents/Numbers";
import Experience from "@/components/home/Experience";
import Skills from "@/components/sharedComponents/Skills";
import Projects from "@/components/home/Projects";
import FadeIn from "@/components/sharedComponents/FadeIn";

export default function Home() {
  return (
    <main className="relative">
      {/* 1. THE FIXED BACKGROUND */}
      <div className="fixed inset-0 -z-20 w-full h-full">
        <Image
          src={heroImage}
          alt="background"
          fill
          priority
          className="object-cover"
          placeholder="blur"
        />
        {/* Optional: Dark overlay to make text more readable */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 2. THE HERO SECTION (Transparent Area) */}
      <section className="h-[70vh] flex items-center w-[95%] mx-auto">
        <Hero />
      </section>

      {/* 3. THE "OVERLAY" CONTENT */}
      <div className="relative bg-white pt-12 ">
        <FadeIn>
          <Numbers />
        </FadeIn>
        <FadeIn>
          <Projects />
        </FadeIn>
        <FadeIn>
          <Skills />
        </FadeIn>
        <FadeIn>
          <Experience />
        </FadeIn>
        <FadeIn>
          <Contact />
        </FadeIn>
        <FadeIn>
          <Footer />
        </FadeIn>
      </div>
    </main>
  );
}
