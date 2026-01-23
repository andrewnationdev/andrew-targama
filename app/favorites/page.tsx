"use client"
import { useEffect, useState } from "react";
import FavoritesCard from "../components/favorites-card";
import { retrieveFromFavorites } from "../utils/utils";
import { IFavoritesItem } from "../types/types";

export default function FavoritesPage() {
    const [items, setItems] = useState<IFavoritesItem[]>([]);
    
    useEffect(()=>{
        const favorites = retrieveFromFavorites();
        setItems(favorites);
    },[])

    return <div className="flex flex-col min-h-screen items-center justify-center font-sans bg-slate-700">
        <span>Favoritos</span>
        <div className="flex flex-col max-w-4xl mx-auto my-4 p-4 bg-blue-950 text-white rounded-xl shadow-lg border border-[5px] border-blue-800">
            {items.length > 0 && items.map((item, index) => (
                <FavoritesCard key={index} {...item} />
            ))}
        </div>
    </div>
}