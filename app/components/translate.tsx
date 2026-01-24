"use client";

import { useState, useEffect } from "react";
import handleTranslate from "../core/translation";
import { ILanguage } from "../types/types";
import { languages } from "../schema/schema";
import ActionButtonsRow from "./action-buttons-row";
import { showErrorToast, showSuccessToast } from "../utils/utils";
import useStore, { addToFavorites } from "../store/useStore";

export default function Translate() {
    const [input, setInput] = useState<string>("");
    const [target, setTarget] = useState<string>("en");
    const [result, setResult] = useState<string>("");
    const [previousInput, setPreviousInput] = useState<string>("");
    const [detectedLanguage, setDetectedLanguage] = useState<string>("---");

    async function handleTranslateButton() {
        const res = await handleTranslate({
            text: input,
            target: target
        });

        if (res.translations && res.translations.length > 0) {
            const transl = res.translations[0].text;

            setResult(transl);
            setPreviousInput(input);

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

    function handleFavoriteButton() {
        const res = addToFavorites({ text: input, translation: result })

        if (res) {
            showSuccessToast("Adicionado aos favoritos com sucesso!");
        } else {
            showErrorToast("Erro ao adicionar aos favoritos.");
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            useStore.getState().loadFromStorage()
        }
    }, [])
    return (
        <div className="flex flex-col md:max-w-4xl mx-auto my-6 p-4 md:p-6 lg:p-8 text-slate-100 rounded-xl shadow-lg bg-gradient-to-br from-slate-800/60 to-slate-700/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="text-sm text-slate-300">Idioma detectado</div>
                    <div className="font-medium text-slate-100 bg-slate-700/30 px-3 py-1 rounded-md">{detectedLanguage}</div>
                </div>

                <div className="w-full sm:w-auto">
                    <label className="sr-only" htmlFor="target-select">Idioma de destino</label>
                    <select
                        id="target-select"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        className="w-full sm:w-auto p-2 sm:p-3 bg-slate-700/40 border border-slate-600 rounded-lg appearance-none focus:ring-2 focus:ring-sky-400 focus:outline-none text-slate-100 font-medium cursor-pointer transition-all"
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-sm text-slate-300">Texto</label>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Digite aqui..."
                        aria-label="Texto de entrada"
                        className="w-full min-h-[10rem] md:min-h-[14rem] p-4 bg-slate-700/40 border border-slate-600 rounded-lg resize-none focus:ring-2 focus:ring-sky-400 focus:outline-none text-slate-100 placeholder-slate-300 transition-all duration-150 shadow-sm"
                    ></textarea>
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <label className="text-sm text-slate-300">Tradução</label>
                    <textarea
                        value={result}
                        readOnly
                        placeholder="Tradução aparecerá aqui..."
                        aria-label="Resultado da tradução"
                        className="w-full min-h-[10rem] md:min-h-[14rem] p-4 bg-slate-600/30 border border-slate-500 rounded-lg resize-none text-slate-50 focus:outline-none transition-all duration-150 shadow-sm"
                    ></textarea>
                </div>
            </div>

            <div className="mt-5">
                <ActionButtonsRow
                    enableTranslateButton={input != ""}
                    enableFavoriteButton={result.length > 0}
                    handleTranslateButton={handleTranslateButton}
                    handleFavoriteButton={handleFavoriteButton}
                    handleReverseButton={handleReverseButton}
                />
            </div>
        </div>
    )
}