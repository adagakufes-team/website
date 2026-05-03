import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Image
        src="/logo/logo-vertical.png"
        alt="あだち大学フェス"
        width={480}
        height={480}
        className="w-full max-w-md"
        priority
      />
    </div>
  );
}
