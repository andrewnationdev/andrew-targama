import { Book, House, InfoIcon, Languages } from "lucide-react";
import Link from "next/link";

export default function Header(){
    return (
        <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-900/95 via-blue-950/95 to-indigo-900/95 text-white px-6 py-4 shadow-md">
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-full">
                        <Languages size={28} />
                    </div>
                    <div className="hidden sm:block">
                        <h1 className="text-xl font-semibold">Andrew Targama</h1>
                        <div className="text-sm text-blue-200/80">Tradutor com base em DeepL</div>
                    </div>
                </div>

                <nav className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/5 transition">
                        <House size={20} />
                        <span className="hidden sm:inline text-sm">Início</span>
                    </Link>

                    <Link href="/favorites" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/5 transition">
                        <Book size={20} />
                        <span className="hidden sm:inline text-sm">Favoritos</span>
                    </Link>

                    <Link href="/about" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/5 transition">
                        <InfoIcon size={20} />
                        <span className="hidden sm:inline text-sm">Sobre</span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}