import { create } from "zustand"

import { hapticsImpact, hapticsNotify, toast } from "@/utils"

interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
}

export const useCounter = create<CounterState>((set, get) => ({
  count: 0,
  increment: () => {
    hapticsImpact("light")
    set((state) => ({ count: state.count + 1 }))
    if (get().count >= 10) {
      hapticsNotify("warning")
      toast({
        type: "info",
        title: "Heyy!!",
        description: "10 🐻 is more than enough!",
      })
    }
  },
  decrement: () => {
    hapticsImpact("light")
    set((state) => ({ count: state.count - 1 }))
  },
}))
