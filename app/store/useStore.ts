import { create } from 'zustand'
import type { IFavoritesItem } from '../types/types'

type FavoritesState = {
  favorites: IFavoritesItem[]
  addToFavorites: (item: IFavoritesItem) => boolean
  removeFromFavorites: (item: IFavoritesItem) => boolean
  retrieveFromFavorites: () => IFavoritesItem[]
  loadFromStorage: () => void
}

const safeParse = (key: string) => {
  if (typeof window === 'undefined') return []
  try {
    const v = localStorage.getItem(key)
    return v ? JSON.parse(v) : []
  } catch {
    return []
  }
}

const useStore = create<FavoritesState>((set, get) => ({
  favorites: (safeParse('favorites') as IFavoritesItem[]) || [],
  addToFavorites: (item) => {
    try {
      const current = get().favorites
      const exists = current.some((f) => f.text === item.text && f.translation === item.translation)
      if (exists) return false
      const updated = [...current, item]
      if (typeof window !== 'undefined') localStorage.setItem('favorites', JSON.stringify(updated))
      set({ favorites: updated })
      return true
    } catch {
      return false
    }
  },
  removeFromFavorites: (item) => {
    try {
      const updated = get().favorites.filter((f) => !(f.text === item.text && f.translation === item.translation))
      if (typeof window !== 'undefined') localStorage.setItem('favorites', JSON.stringify(updated))
      set({ favorites: updated })
      return true
    } catch {
      return false
    }
  },
  retrieveFromFavorites: () => get().favorites,
  loadFromStorage: () => set({ favorites: (safeParse('favorites') as IFavoritesItem[]) || [] }),
}))

export default useStore

export const addToFavorites = (item: IFavoritesItem) => useStore.getState().addToFavorites(item)
export const removeFromFavorites = (item: IFavoritesItem) => useStore.getState().removeFromFavorites(item)
export const retrieveFromFavorites = () => useStore.getState().retrieveFromFavorites()

