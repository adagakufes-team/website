import Recruitment from "@/components/Recruitment";
import News from "@/components/News/News";
import About from "@/components/About";
import Exhibitors from "@/components/Exhibitors";
import Visitors from "@/components/visitors/Visitors";
import Contact from "@/components/Contact";
import FloatingExhibitorButton from "@/components/FloatingExhibitorButton";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <FloatingExhibitorButton />

      <div className="flex min-h-screen flex-col items-center justify-center text-center  bg-[#f8f3e8]">
        <Hero />
      </div>
      <News />
      <Recruitment />
      <About />
      <Exhibitors />
      <Visitors />
      <Contact />
    </main>
  );
}
