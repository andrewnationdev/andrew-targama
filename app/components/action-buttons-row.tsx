"use client"
import { ArrowLeftRight, Languages, Star } from "lucide-react"
import { IActionButtonsRowProps } from "../types/types"

export default function ActionButtonsRow(props: IActionButtonsRowProps) {
    return <div className="flex justify-around gap-2 md:w-[40%] mx-auto">
        <button
            onClick={props.handleTranslateButton}
            title="Traduzir"
            disabled={!props.enableTranslateButton}
            className="flex items-center justify-center mt-6 w-full md:w-auto px-4 py-4 bg-sky-700 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform active:scale-95 transition-all duration-200 ease-in-out"
        >
            <Languages className="h-5 w-5" />
        </button>

        <button
            onClick={props.handleFavoriteButton}
            disabled={!props.enableFavoriteButton}
            title="Favoritar Tradução"
            className="flex items-center justify-center mt-6 w-full md:w-auto px-4 py-4 bg-sky-700 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform active:scale-95 transition-all duration-200 ease-in-out"
        >
            <Star className="h-5 w-5" />
        </button>

        <button
            onClick={props.handleReverseButton}
            disabled={!props.enableTranslateButton}
            title="Inverter"
            className="flex items-center justify-center mt-6 w-full md:w-auto px-4 py-4 bg-sky-700 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform active:scale-95 transition-all duration-200 ease-in-out"
        >
            <ArrowLeftRight className="h-5 w-5" />
        </button>
    </div>
}