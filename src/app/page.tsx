import Image from "next/image";
import Link from "next/link";
import News from "@/components/News";
import About from "@/components/About";
import Exhibitors from "@/components/Exhibitors";
import Visitors from "@/components/visitors/Visitors";
import Contact from "@/components/Contact";
import Recruitment from "@/components/Recruitment";

export default function Home() {
  return (
    <main>
      <Link
        href="/exhibitors"
        className="fixed right-5 bottom-5 z-50 rounded-full bg-orange-500 px-5 py-4 text-sm font-bold text-white shadow-lg transition active:translate-y-1 active:shadow-md md:right-8 md:bottom-8 md:px-7 md:py-5 md:text-base"
      >
        出展希望の
        <br />
        団体様はこちら
      </Link>

      <div className="flex min-h-screen flex-col items-center justify-center text-center">
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
      <News />
      <Recruitment />
      <About />
      <Exhibitors />
      <Visitors />
      <Exhibitors />
      <Contact />
    </main>
  );
}
