import Image from "next/image";
import Translate from "./components/translate"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex text-black min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        <Translate/>
      </main>
    </div>
  );
}
