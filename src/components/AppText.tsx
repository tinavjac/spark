import React, { ComponentProps } from "react"
import { Text } from "react-native"
import { cn } from "@/utils"

type TProps = ComponentProps<typeof Text> & {}

export const AppText: React.FC<TProps> = ({ children, className, ...props }) => {
  return (
    <Text className={cn("text-neutral950", className)} {...props}>
      {children}
    </Text>
  )
}
