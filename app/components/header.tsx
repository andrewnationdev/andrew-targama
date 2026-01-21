import { Book, House, InfoIcon, Languages } from "lucide-react";
import Link from "next/link";

export default function Header(){
    return <div className="flex bg-teal-600 text-white p-4 flex-col items-center">
        <div className="flex gap-2 items-center">
            <Languages size="33"/>
            <h1 className="text-2xl font-bold">Andrew Targama</h1>
        </div>
        <div className="flex gap-8 mt-4">
            <Link href="/" title="Início">
                <House size="25"/>
            </Link>
            <Link href="/favorites" title="Traduções Salvas">
                <Book size="25"/>
            </Link>
            <Link href="/about" title="Sobre">
                <InfoIcon size="25"/>
            </Link>
        </div>
    </div>
}