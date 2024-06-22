import { create } from 'zustand'

interface dishState {
  title: string
  setTitle: (title: string) => void
}

export const useDishStore = create<dishState>()((set) => ({
  title: 'null title',
  setTitle: (title: string) => set({ title }),
}))
