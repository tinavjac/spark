import { create } from "zustand"

import { hapticsImpact } from "@/utils"

interface CounterState {
  count: number
  increment: () => number
  decrement: () => number
}

export const useCounter = create<CounterState>((set, get) => ({
  count: 0,
  increment: () => {
    hapticsImpact("light")
    set((state) => ({ count: state.count + 1 }))
    return get().count
  },
  decrement: () => {
    hapticsImpact("light")
    set((state) => ({ count: state.count - 1 }))
    return get().count
  },
}))
