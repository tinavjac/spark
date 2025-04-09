import { Motion } from "@legendapp/motion"
import React, { ComponentProps } from "react"

import { cn } from "@/utils"

type TProps = ComponentProps<typeof Motion.Text> & {}

export const AppText: React.FC<TProps> = ({ children, className, ...props }) => {
  return (
    <Motion.Text className={cn("text-neutral950", className)} {...props}>
      {children}
    </Motion.Text>
  )
}
