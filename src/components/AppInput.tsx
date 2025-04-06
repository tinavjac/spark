import React, { useCallback, useState } from "react"
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  View,
} from "react-native"
import { AppText } from "@/components/AppText"
import { cn } from "@/utils"

type TProps = TextInputProps & {
  label?: string
  required?: boolean
  invalid?: boolean
  invalidMessage?: string
  multilineHeight?: number
  wrapperClassName?: string
  containerClassName?: string
  labelClassName?: string
}

export const AppInput = React.forwardRef<TextInput, TProps>(
  (
    {
      label,
      required,
      invalid,
      invalidMessage,
      multilineHeight,
      wrapperClassName,
      containerClassName,
      labelClassName,
      multiline,
      className,
      style,
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [isFocus, setIsFocus] = useState<boolean>(false)

    const handleFocus = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocus(true)
        onFocus?.(e)
      },
      [onFocus, setIsFocus],
    )

    const handleBlur = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocus(false)
        onBlur?.(e)
      },
      [onBlur, setIsFocus],
    )

    return (
      <View className={cn("gap-1", wrapperClassName)}>
        {label && (
          <AppText
            className={cn("text-sm font-bold text-neutral-800", labelClassName)}
            numberOfLines={1}
          >
            {label}
            {required && <AppText className="text-sm font-bold text-red-400">{" *"}</AppText>}
          </AppText>
        )}
        <View
          className={cn(
            "flex-row items-center rounded-lg border border-neutral-200 bg-white px-3",
            {
              "border-neutral-800": isFocus,
              "border-red-400": invalid,
            },
            containerClassName,
          )}
        >
          <TextInput
            ref={ref}
            {...props}
            multiline={multiline}
            textAlignVertical={multiline ? "top" : "center"}
            className={cn("flex-1 py-3 text-base font-medium leading-5", className)}
            style={[{ minHeight: multilineHeight }, style]}
            autoCapitalize="none"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
        {invalidMessage && (
          <AppText className="text-sm font-bold text-red-400">{invalidMessage}</AppText>
        )}
      </View>
    )
  },
)

AppInput.displayName = "AppInput"
