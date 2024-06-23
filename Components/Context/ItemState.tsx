import { create } from 'zustand'

interface dishState {
  Dish: any
  setDish: (Dish: any) => void
}

export const useDishStore = create<dishState>()((set) => ({
  Dish: 'null title',
  setDish: (Dish: any) => set({ Dish }),
}))
