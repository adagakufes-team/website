import Image from "next/image";
import Recruitment from "@/components/Recruitment";
import News from "@/components/News/News";
import About from "@/components/About";
import Exhibitors from "@/components/Exhibitors";
import Visitors from "@/components/visitors/Visitors";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="flex min-h-screen flex-col items-center justify-center  text-center bg-[#f8f3e8]">
        <Image
          src="/logo/logo-horizontal.png"
          alt="あだち大学フェス"
          width={1400}
          height={600}
          className="w-full max-w-6xl"
          priority
        />
        <div className="mt-8 text-gray-900">
          <p className="text-4xl font-bold md:text-3xl">in 東京電機大学</p>
          <p className="mt-2 text-4xl font-bold md:text-3xl">8/28(金) 予定</p>
        </div>
      </div>
      <Recruitment />
      <News />
      <About />
      <Exhibitors />
      <Visitors />
      <Contact />
    </main>
  );
}
