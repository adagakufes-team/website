import News from "@/components/News/News";
import About from "@/components/About";
import Exhibitors from "@/components/Exhibitors";
import Visitors from "@/components/visitors/Visitors";
import Contact from "@/components/Contact";
import Archives from "@/components/archive";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="flex min-h-screen flex-col items-center justify-center text-center  bg-[#f8f3e8]">
        <Hero />
      </div>
      <News />
      <About />
      <Exhibitors />
      <Visitors />
      <Archives />
      <Contact />
    </main>
  );
}
