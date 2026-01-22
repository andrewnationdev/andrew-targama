"use client"

import FavoritesCard from "../components/favorites-card";
import { retrieveFromFavorites } from "../utils/utils";

export default function FavoritesPage() {
    const items = retrieveFromFavorites();

    return <div className="flex flex-col min-h-screen items-center justify-center font-sans bg-slate-700">
        <span>Favoritos</span>
        <div className="flex flex-col max-w-4xl mx-auto my-4 p-4 bg-blue-950 text-white rounded-xl shadow-lg border border-[5px] border-blue-800">
            {items.length > 0 && items.map((item, index) => (
                <FavoritesCard {...item} />
            ))}
        </div>
    </div>
}