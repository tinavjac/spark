import React from "react"
import { SuccessToast } from "react-native-toast-message"
import { ToastProps } from "../utils"

type TProps = ToastProps & {}

export const ToastAlert: React.FC<TProps> = ({ type, title, description, ...props }) => {
  if (type === "success") {
    return <SuccessToast {...props} text1={title} text2={description} />
  }

  return null
}
