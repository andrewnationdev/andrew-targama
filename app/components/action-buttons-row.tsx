"use client"
import { ArrowLeftRight,Languages, Star } from "lucide-react"
import { IActionButtonsRowProps } from "../types/types"

export default function ActionButtonsRow(props:IActionButtonsRowProps){
    return         <div className="flex justify-around w-[60%] mx-auto">
            <button
                onClick={props.handleTranslateButton}
                title="Traduzir"
                className="mt-6 w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform active:scale-95 transition-all duration-200 ease-in-out"
            >
                <Languages />
            </button>

            <button
                onClick={props.handleFavoriteButton}
                title="Favoritar Tradução"
                className="mt-6 w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform active:scale-95 transition-all duration-200 ease-in-out"
            >
                <Star />
            </button>

            <button
                onClick={props.handleReverseButton}
                title="Inverter"
                className="mt-6 w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform active:scale-95 transition-all duration-200 ease-in-out"
            >
                <ArrowLeftRight />
            </button>
        </div>
}