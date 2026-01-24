"use client"
import { useEffect } from "react";
import FavoritesCard from "../components/favorites-card";
import useStore from "../store/useStore";

export default function FavoritesPage() {
    const items = useStore((s) => s.favorites);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            useStore.getState().loadFromStorage()
        }
    }, [])

    return (
        <div className="min-h-screen py-12 px-4 sm:px-8 bg-slate-700">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl text-white font-bold mb-6">Favoritos</h1>

                {items.length === 0 ? (
                    <div className="text-white/80">Nenhum item salvo ainda.</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {items.map((item, index) => (
                            <FavoritesCard key={index} {...item} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}