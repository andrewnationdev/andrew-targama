"use client";

import { useState } from "react";
import handleTranslate from "../core/translation";
import { ArrowLeftRight,Languages } from "lucide-react"

export default function Translate() {
    const [input, setInput] = useState<string>("");
    const [target, setTarget] = useState<string>("pt-BR");
    const [result, setResult] = useState<string>("");

    async function handleClick() {
        const res = await handleTranslate({
            text: input,
            target: target
        });

        if (res.translations && res.translations.length > 0) {
            const transl = res.translations[0].text;

            setResult(transl);
        }

        console.log(res)
    }

    return <div className="flex flex-col max-w-4xl mx-auto my-10 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="flex w-full gap-4 justify-between p-4 items-center">
            <span>Idioma de Destino:</span>
            <select
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="p-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 font-medium cursor-pointer transition-all"
            >
                <option value="ar">Árabe Clássico</option>
                <option value="en-US">Inglês(EUA)</option>
                <option value="en-GB">Inglês(Reino Unido)</option>
                <option value="fr">Francês</option>
                <option value="ja">Japonês</option>
                <option value="pt-BR">Português(Brasil)</option>
                <option value="pt-PT">Português(Portugal)</option>
            </select>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col flex-1 gap-4 w-full">

                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Digite aqui..."
                    className="w-full h-48 p-4 bg-gray-50 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 placeholder-gray-400 transition-all"
                ></textarea>
            </div>

            <div className="flex-1">
                <textarea
                    value={result}
                    readOnly
                    placeholder="Tradução aparecerá aqui..."
                    className="w-full h-48 p-4 bg-blue-50 border border-blue-100 rounded-lg resize-none text-gray-800 focus:outline-none"
                ></textarea>
            </div>
        </div>

        <div className="flex justify-around w-[60%] mx-auto">
            <button
                onClick={handleClick}
                className="mt-6 w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform active:scale-95 transition-all duration-200 ease-in-out"
            >
                <Languages />
            </button>

            <button
                onClick={handleClick}
                className="mt-6 w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform active:scale-95 transition-all duration-200 ease-in-out"
            >
                <ArrowLeftRight />
            </button>
        </div>
    </div>
}