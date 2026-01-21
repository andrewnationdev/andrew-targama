import Image from "next/image";
import Translate from "./components/translate"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-slate-700">
      <main className="flex text-black w-full max-w-3xl flex-col items-center justify-between px-16 sm:items-start">
        <Translate/>
      </main>
    </div>
  );
}
