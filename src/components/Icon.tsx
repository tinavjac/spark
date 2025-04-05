import React from "react"
import { DimensionValue, View } from "react-native"
import { SvgProps } from "react-native-svg"
import { cn } from "../utils"

import IconLoading from "assets/icons/loading.svg"
import IconSparkLogo from "assets/icons/spark-logo.svg"

const ICONS = {
  IconLoading,
  IconSparkLogo,
}

export type TIconOptions = keyof typeof ICONS

type TProps = SvgProps & {
  icon: TIconOptions
  width?: DimensionValue
  height?: DimensionValue
  containerClassName?: string
}

export const Icon: React.FC<TProps> = ({
  icon,
  width = 24,
  height = 24,
  containerClassName,
  ...props
}) => {
  const IconComponent = ICONS[icon]

  return (
    <View className={cn("relative", containerClassName)}>
      <IconComponent width={width} height={height} {...props} />
    </View>
  )
}
