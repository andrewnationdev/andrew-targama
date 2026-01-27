import { IFavoritesItem } from "../types/types";
import { Trash2 } from "lucide-react";
import { removeFromFavorites } from "../store/useStore";
import { showSuccessToast, showErrorToast } from "../utils/utils";

export default function FavoritesCard({ text, translation }: IFavoritesItem) {
    function handleDelete() {
        const deleteConfirm = confirm("Deseja deletar este item dos favoritos? Esta operação é irreversível!")
       
        if(!deleteConfirm) return;
        
        const res = removeFromFavorites({ text, translation });

        if (res) {
            showSuccessToast("Removido dos favoritos com sucesso!");
        } else {
            showErrorToast("Erro ao remover dos favoritos.");
        }
    }

    return (
        <div className="w-full sm:w-80 p-4 rounded-lg shadow-lg bg-gradient-to-br from-blue-900/80 to-blue-800/60 text-white flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-semibold mb-2 break-words">{translation}</h3>
                <p className="text-sm text-blue-100/80 break-words">{text}</p>
            </div>

            <div className="mt-4 flex justify-end">
                <button
                    aria-label="Remover favorito"
                    onClick={handleDelete}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-md text-sm font-medium transition-colors"
                >
                    <Trash2 size={16} />
                    Remover
                </button>
            </div>
        </div>
    );
}