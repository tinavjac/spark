import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { useCallback, useRef } from "react"

export const useBottomSheet = () => {
  const ref = useRef<BottomSheetModal>(null)

  const open = useCallback(() => {
    ref.current?.present()
  }, [])

  const close = useCallback(() => {
    ref.current?.close()
  }, [])

  const snapToIndex = useCallback((index: number) => {
    ref.current?.snapToIndex(index)
  }, [])

  return { ref, open, close, snapToIndex }
}
