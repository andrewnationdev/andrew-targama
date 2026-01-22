import { toast } from "react-toastify";
import { IFavoritesItem } from "../types/types";

export function addToFavorites(item: IFavoritesItem): boolean {
    if (checkIfFavoritesExist()) {
        let arr = JSON.parse(localStorage.getItem("favorites")!);

        arr.push(item);

        localStorage.setItem("favorites", JSON.stringify(arr));
        return true;
    } else {
        localStorage.setItem("favorites", JSON.stringify([...JSON.parse(localStorage.getItem("favorites") || "[]"), item]));
        return true;
    }

    return false;
}

export function removeFromFavorites(item: IFavoritesItem): boolean {
    return false;
}

export function retrieveFromFavorites(): IFavoritesItem[] {
    return checkIfFavoritesExist() ? JSON.parse(localStorage.getItem("favorites")!) : [];
}

function checkIfFavoritesExist(): boolean {
    return (localStorage.getItem("favorites") ? true : false);
}

export function showSuccessToast(message: string) {
    toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    });
}

export function showErrorToast(message: string) {
    toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    });
}