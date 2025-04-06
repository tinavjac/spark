import { create } from "zustand"
import { toast } from "../utils"

interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
}

export const useCounter = create<CounterState>((set, get) => ({
  count: 0,
  increment: () => {
    set((state) => ({ count: state.count + 1 }))
    if (get().count >= 10) {
      toast({
        type: "error",
        title: "Error message",
        description: "10 🐻 is more than enough!",
      })
    }
  },
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))
