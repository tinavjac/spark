import React, { ComponentProps, ReactNode, useMemo } from "react"
import { Pressable, View } from "react-native"
import { cn } from "../utils"
import { AppText } from "./AppText"
import { Icon } from "./Icon"

export type TButtonVariant = "yellow-400" | "red-500" | "green-500"

export type TButtonSize = "sm" | "md" | "lg"

type TProps = ComponentProps<typeof Pressable> & {
  label: string | number
  variant: TButtonVariant
  size: TButtonSize
  isLoading?: boolean
  labelClassName?: string
  renderItemLeft?: () => ReactNode
  renderItemRight?: () => ReactNode
}

export const AppButton = React.forwardRef<View, TProps>(
  (
    {
      label,
      variant,
      size,
      isLoading,
      labelClassName,
      renderItemLeft,
      renderItemRight,
      disabled,
      className,
      onPress,
      ...props
    },
    ref,
  ) => {
    const variantClass = useMemo(() => {
      switch (variant) {
        case "yellow-400":
          return {
            container: "bg-yellow-400",
            label: "text-neutral-800",
          }
        case "red-500":
          return {
            container: "bg-red-500",
            label: "text-neutral-50",
          }
        case "green-500":
          return {
            container: "bg-green-500",
            label: "text-neutral-50",
          }
      }
    }, [variant])

    const sizeClass = useMemo(() => {
      switch (size) {
        case "sm":
          return {
            container: "h-9 px-4 rounded",
            label: "text-sm",
          }
        case "md":
          return {
            container: "h-11 px-6 rounded-lg",
            label: "text-base",
          }
        case "lg":
          return {
            container: "h-12 px-8 rounded-lg",
            label: "text-lg",
          }
      }
    }, [size])

    return (
      <Pressable
        ref={ref}
        {...props}
        className={cn(
          "flex-row items-center justify-center gap-2 opacity-100 transition-transform duration-200 active:scale-95",
          {
            "opacity-40": disabled,
          },
          variantClass.container,
          sizeClass.container,
          className,
        )}
        disabled={disabled || isLoading}
        onPress={onPress}
      >
        {isLoading ? (
          <Icon icon="IconLoading" containerClassName="animate-spin" />
        ) : (
          <>
            {renderItemLeft?.()}
            <AppText
              className={cn(
                "text-[length:inherit] font-bold text-inherit",
                variantClass.label,
                sizeClass.label,
                labelClassName,
              )}
            >
              {label}
            </AppText>
            {renderItemRight?.()}
          </>
        )}
      </Pressable>
    )
  },
)

AppButton.displayName = "AppButton"
