import { create } from 'zustand'

interface dishState {
  Dish: any
  setDish: (Dish: any) => void
}

interface quanityState {
  Quanity: number
  setQuanity: (Quanity: number) => void
}

export const useDishStore = create<dishState>()((set) => ({
  Dish: null,
  setDish: (Dish: any) => set({ Dish }),
}))

export const useQuanityStore = create<quanityState>()((set) => ({
  Quanity: 1,
  setQuanity: (Quanity: number) => set({ Quanity }),
}))
