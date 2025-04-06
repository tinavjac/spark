import React, { memo } from "react"
import { Pressable } from "react-native"
import { cn } from "../utils"
import { Icon } from "./Icon"

type TProps = {}

export const Spark: React.FC<TProps> = memo(({}) => {
  return (
    <Pressable className={cn({ "animate-bounce": true })}>
      <Icon icon="IconSparkLogo" width={80} height={100} />
    </Pressable>
  )
})

Spark.displayName = "Spark"
