"use client"
import { createButton } from "@gluestack-ui/button"
import { PrimitiveIcon, UIIcon } from "@gluestack-ui/icon"
import type { VariantProps } from "@gluestack-ui/nativewind-utils"
import { tva } from "@gluestack-ui/nativewind-utils/tva"
import { useStyleContext, withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext"
import { cssInterop } from "nativewind"
import React from "react"
import { ActivityIndicator, Pressable, Text, View } from "react-native"

const SCOPE = "BUTTON"

const Root = withStyleContext(Pressable, SCOPE)

const UIButton = createButton({
  Root: Root,
  Text,
  Group: View,
  Spinner: ActivityIndicator,
  Icon: UIIcon,
})

cssInterop(PrimitiveIcon, {
  className: {
    target: "style",
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: "classNameColor",
      stroke: true,
    },
  },
})

const buttonStyle = tva({
  base: "group/button rounded bg-primary-500 flex-row items-center justify-center data-[focus-visible=true]:web:outline-none data-[focus-visible=true]:web:ring-2 data-[disabled=true]:opacity-40 gap-2 data-[active=true]:scale-95",
  variants: {
    action: {
      primary:
        "bg-yellow-400 data-[hover=true]:bg-yellow-500 border-yellow-400 data-[hover=true]:border-yellow-500 data-[focus-visible=true]:web:ring-indicator-info",
      positive:
        "bg-success-500 border-success-300 data-[hover=true]:bg-success-600 data-[hover=true]:border-success-400 data-[focus-visible=true]:web:ring-indicator-info",
      negative:
        "bg-error-500 border-error-300 data-[hover=true]:bg-error-600 data-[hover=true]:border-error-400 data-[focus-visible=true]:web:ring-indicator-info",
    },
    variant: {
      link: "px-0",
      outline:
        "bg-transparent border data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent",
      solid: "",
    },

    size: {
      sm: "px-4 h-10 rounded",
      md: "px-6 h-11 rounded-md",
      lg: "px-8 h-12 rounded-lg",
    },
  },
  compoundVariants: [
    {
      action: "primary",
      variant: "link",
      class:
        "px-0 bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent",
    },
    {
      action: "positive",
      variant: "link",
      class:
        "px-0 bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent",
    },
    {
      action: "negative",
      variant: "link",
      class:
        "px-0 bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent",
    },
    {
      action: "primary",
      variant: "outline",
      class: "bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent",
    },
    {
      action: "positive",
      variant: "outline",
      class: "bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent",
    },
    {
      action: "negative",
      variant: "outline",
      class: "bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent",
    },
  ],
})

const buttonTextStyle = tva({
  base: "font-semibold",
  parentVariants: {
    action: {
      primary: "text-neutral-800",
      positive:
        "text-success-600 data-[hover=true]:text-success-600 data-[active=true]:text-success-700",
      negative: "text-error-600 data-[hover=true]:text-error-600 data-[active=true]:text-error-700",
    },
    variant: {
      link: "data-[hover=true]:underline data-[active=true]:underline",
      outline: "",
      solid: "",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  parentCompoundVariants: [
    {
      variant: "solid",
      action: "primary",
      class: "text-neutral-800",
    },
    {
      variant: "solid",
      action: "positive",
      class:
        "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0",
    },
    {
      variant: "solid",
      action: "negative",
      class:
        "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0",
    },
    {
      variant: "outline",
      action: "primary",
      class:
        "text-primary-500 data-[hover=true]:text-primary-500 data-[active=true]:text-primary-500",
    },
    {
      variant: "outline",
      action: "positive",
      class:
        "text-primary-500 data-[hover=true]:text-primary-500 data-[active=true]:text-primary-500",
    },
    {
      variant: "outline",
      action: "negative",
      class:
        "text-primary-500 data-[hover=true]:text-primary-500 data-[active=true]:text-primary-500",
    },
  ],
})

const buttonIconStyle = tva({
  base: "fill-none",
  parentVariants: {
    variant: {
      link: "data-[hover=true]:underline data-[active=true]:underline",
      outline: "",
      solid:
        "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0",
    },
    size: {
      sm: "h-4 w-4",
      md: "h-[18px] w-[18px]",
      lg: "h-[18px] w-[18px]",
    },
    action: {
      primary:
        "text-primary-600 data-[hover=true]:text-primary-600 data-[active=true]:text-primary-700",
      positive:
        "text-success-600 data-[hover=true]:text-success-600 data-[active=true]:text-success-700",
      negative: "text-error-600 data-[hover=true]:text-error-600 data-[active=true]:text-error-700",
    },
  },
  parentCompoundVariants: [
    {
      variant: "solid",
      action: "primary",
      class:
        "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0",
    },
    {
      variant: "solid",
      action: "positive",
      class:
        "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0",
    },
    {
      variant: "solid",
      action: "negative",
      class:
        "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0",
    },
  ],
})

const buttonGroupStyle = tva({
  base: "",
  variants: {
    space: {
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-3",
      lg: "gap-4",
      xl: "gap-5",
      "2xl": "gap-6",
      "3xl": "gap-7",
      "4xl": "gap-8",
    },
    isAttached: {
      true: "gap-0",
    },
    flexDirection: {
      row: "flex-row",
      column: "flex-col",
      "row-reverse": "flex-row-reverse",
      "column-reverse": "flex-col-reverse",
    },
  },
})

type IButtonProps = Omit<React.ComponentPropsWithoutRef<typeof UIButton>, "context"> &
  VariantProps<typeof buttonStyle> & { className?: string }

const Button = React.forwardRef<React.ComponentRef<typeof UIButton>, IButtonProps>(function Button(
  { className, variant = "solid", size = "md", action = "primary", ...props },
  ref,
) {
  return (
    <UIButton
      ref={ref}
      {...props}
      className={buttonStyle({ variant, size, action, class: className })}
      context={{ variant, size, action }}
    />
  )
})

type IButtonTextProps = React.ComponentPropsWithoutRef<typeof UIButton.Text> &
  VariantProps<typeof buttonTextStyle> & { className?: string }

const ButtonText = React.forwardRef<React.ComponentRef<typeof UIButton.Text>, IButtonTextProps>(
  function ButtonText({ className, variant, size, action, ...props }, ref) {
    const {
      variant: parentVariant,
      size: parentSize,
      action: parentAction,
    } = useStyleContext(SCOPE)

    return (
      <UIButton.Text
        ref={ref}
        {...props}
        className={buttonTextStyle({
          parentVariants: {
            variant: parentVariant,
            size: parentSize,
            action: parentAction,
          },
          variant,
          size,
          action,
          class: className,
        })}
      />
    )
  },
)

const ButtonSpinner = UIButton.Spinner

type IButtonIcon = React.ComponentPropsWithoutRef<typeof UIButton.Icon> &
  VariantProps<typeof buttonIconStyle> & {
    className?: string | undefined
    as?: React.ElementType
    height?: number
    width?: number
  }

const ButtonIcon = React.forwardRef<React.ComponentRef<typeof UIButton.Icon>, IButtonIcon>(
  function ButtonIcon({ className, size, ...props }, ref) {
    const {
      variant: parentVariant,
      size: parentSize,
      action: parentAction,
    } = useStyleContext(SCOPE)

    if (typeof size === "number") {
      return (
        <UIButton.Icon
          ref={ref}
          {...props}
          className={buttonIconStyle({ class: className })}
          size={size}
        />
      )
    } else if ((props.height !== undefined || props.width !== undefined) && size === undefined) {
      return (
        <UIButton.Icon ref={ref} {...props} className={buttonIconStyle({ class: className })} />
      )
    }
    return (
      <UIButton.Icon
        {...props}
        className={buttonIconStyle({
          parentVariants: {
            size: parentSize,
            variant: parentVariant,
            action: parentAction,
          },
          size,
          class: className,
        })}
        ref={ref}
      />
    )
  },
)

type IButtonGroupProps = React.ComponentPropsWithoutRef<typeof UIButton.Group> &
  VariantProps<typeof buttonGroupStyle>

const ButtonGroup = React.forwardRef<React.ComponentRef<typeof UIButton.Group>, IButtonGroupProps>(
  function ButtonGroup(
    { className, space = "md", isAttached = false, flexDirection = "column", ...props },
    ref,
  ) {
    return (
      <UIButton.Group
        className={buttonGroupStyle({
          class: className,
          space,
          isAttached,
          flexDirection,
        })}
        {...props}
        ref={ref}
      />
    )
  },
)

Button.displayName = "Button"
ButtonText.displayName = "ButtonText"
ButtonSpinner.displayName = "ButtonSpinner"
ButtonIcon.displayName = "ButtonIcon"
ButtonGroup.displayName = "ButtonGroup"

export { Button, ButtonGroup, ButtonIcon, ButtonSpinner, ButtonText }
