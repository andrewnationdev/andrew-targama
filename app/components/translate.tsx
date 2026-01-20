"use client";

import { useState } from "react";
import handleTranslate from "../core/translation";
import { ArrowLeftRight,Languages, Star } from "lucide-react"
import { ILanguage } from "../types/types";
import { languages } from "../schema/schema";

export default function Translate() {
    const [input, setInput] = useState<string>("");
    const [target, setTarget] = useState<string>("pt-BR");
    const [result, setResult] = useState<string>("");
    const [detectedLanguage, setDetectedLanguage] = useState<string>("");

    async function handleClick() {
        const res = await handleTranslate({
            text: input,
            target: target
        });

        if (res.translations && res.translations.length > 0) {
            const transl = res.translations[0].text;

            setResult(transl);

            if (res.translations[0].detected_source_language) {
                let detected = res.translations[0].detected_source_language;

                for (let lang of languages) {
                    if(lang.code.toLowerCase() === detected.toLowerCase()){
                        detected = lang.readableName;
                        break;
                    }
                }

                setDetectedLanguage(detected);
            }
        }

        console.log(res)
    }

    async function handleReverse(){
        setInput(result)
        setResult("")
    }

    return <div className="flex flex-col max-w-4xl mx-auto my-4 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="flex w-full gap-4 justify-between p-2 items-center">
            <span>Idioma Detectado:</span>
            <span>Idioma de Destino:</span>
        </div>
        <div className="flex w-full gap-4 justify-between p-2 items-center">
            <span>{detectedLanguage}</span>
            <select
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="p-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 font-medium cursor-pointer transition-all"
            >
                {[...languages]
                    .sort((a, b) => a.readableName.localeCompare(b.readableName))
                    .map((lang: ILanguage) => (
                        <option key={lang.code} value={lang.code}>
                            {lang.readableName}
                        </option>
                    ))}
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
                title="Traduzir"
                className="mt-6 w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform active:scale-95 transition-all duration-200 ease-in-out"
            >
                <Languages />
            </button>

            <button
                onClick={handleClick}
                title="Favoritar Tradução"
                className="mt-6 w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform active:scale-95 transition-all duration-200 ease-in-out"
            >
                <Star />
            </button>

            <button
                onClick={handleReverse}
                title="Inverter"
                className="mt-6 w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform active:scale-95 transition-all duration-200 ease-in-out"
            >
                <ArrowLeftRight />
            </button>
        </div>
    </div>
}