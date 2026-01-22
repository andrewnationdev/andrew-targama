"use client"

import FavoritesCard from "../components/favorites-card";
import { retrieveFromFavorites } from "../utils/utils";

export default function FavoritesPage(){
    const items = retrieveFromFavorites();

    return <div>
        <span>Favoritos</span>

        {items.length > 0 && items.map((item, index) => (
            <FavoritesCard {...item} />
        ))}
    </div>
}