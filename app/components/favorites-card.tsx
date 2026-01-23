import { IFavoritesItem } from "../types/types";

export default function FavoritesCard(item: IFavoritesItem) {
    return <div className="p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">{item.translation}</h3>
        <p className="text-sm text-gray-600">{item.text}</p>
    </div>;
}