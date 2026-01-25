import Image from "next/image";
import Translate from "./components/translate"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-slate-700">
      <main className="flex text-black w-full my-4 flex-col items-center justify-center px-6 sm:px-16">
        <Translate/>
      </main>
    </div>
  );
}
