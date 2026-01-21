"use client";

import { useState } from "react";
import handleTranslate from "../core/translation";
import { ILanguage } from "../types/types";
import { languages } from "../schema/schema";
import ActionButtonsRow from "./action-buttons-row";

export default function Translate() {
    const [input, setInput] = useState<string>("");
    const [target, setTarget] = useState<string>("en");
    const [result, setResult] = useState<string>("");
    const [detectedLanguage, setDetectedLanguage] = useState<string>("---");

    async function handleTranslateButton() {
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
                    if (lang.code.toLowerCase() === detected.toLowerCase()) {
                        detected = lang.readableName;
                        break;
                    }
                }

                setDetectedLanguage(detected);
            }
        }

        console.log(res)
    }

    async function handleReverseButton() {
        setInput(result)
        setResult("")
    }

    function handleFavoriteButton() { }

    return <div className="flex flex-col max-w-4xl mx-auto my-4 p-4 bg-blue-950 text-white rounded-xl shadow-lg border border-[5px] border-blue-800">
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

        <ActionButtonsRow handleTranslateButton={handleTranslateButton} handleFavoriteButton={handleFavoriteButton} handleReverseButton={handleReverseButton} />
    </div>
}