import Toast, { ToastOptions } from "react-native-toast-message"

export type ToastType = "success" | "error" | "info"

export interface ToastProps extends ToastOptions {
  type: ToastType
  title: string
  description?: string
}

export const toast = ({
  type,
  title,
  description,
  position = "top",
  visibilityTime = 2000,
  ...props
}: ToastProps) => {
  Toast.show({
    type: type,
    text1: title,
    text2: description,
    position: position,
    visibilityTime: visibilityTime,
    ...props,
  })
}
