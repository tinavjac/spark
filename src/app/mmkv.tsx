import { useForm } from "@tanstack/react-form"
import React from "react"
import { View } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-controller"
import { z } from "zod"

import { AppButton, AppImage, AppInput, AppText } from "@/components"
import { images } from "@/theme"
import {
  getFromStorage,
  hapticsNotify,
  setToStorage,
  toast,
  zEmail,
  zRequiredString,
} from "@/utils"

interface IFormData {
  name: string
  surname: string
  email: string
}

const formSchema = z.object({
  name: zRequiredString,
  surname: zRequiredString,
  email: zEmail,
})

const MMKV = () => {
  // data from storage
  const data = getFromStorage<IFormData>("user", formSchema)

  // form
  const form = useForm({
    defaultValues: {
      name: data?.name ?? "",
      surname: data?.surname ?? "",
      email: data?.email ?? "",
    } as IFormData,
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
        setToStorage("user", value)
        hapticsNotify("success")
        toast({
          type: "success",
          title: "Success message",
          description: "Successfully sold your personal data! 🎉",
        })
      })
    },
  })

  return (
    <View className="flex-1">
      <KeyboardAwareScrollView
        contentContainerClassName="pb-safe-offset-3 pt-4 px-4"
        bottomOffset={16}
      >
        <View className="mt-[40%] gap-10">
          <View className="flex-row items-center justify-center gap-3">
            <View className="size-12">
              <AppImage src={images.tanstack} />
            </View>
            <AppText className="text-2xl font-bold">+</AppText>
            <View className="size-12">
              <AppImage src={images.zod} />
            </View>
            <AppText className="text-2xl font-bold">=</AppText>
            <AppText className="text-5xl leading-[48px]">❤️</AppText>
          </View>
          <View className="gap-3">
            <form.Field
              name="name"
              validators={{ onChange: zRequiredString }}
              children={(field) => {
                return (
                  <AppInput
                    label="Name"
                    placeholder="John"
                    value={field.state.value}
                    onChangeText={field.handleChange}
                    onBlur={field.handleBlur}
                    invalid={field.state.meta.errors.length > 0}
                    textContentType="givenName"
                    autoComplete="name-given"
                    required
                  />
                )
              }}
            />
            <form.Field
              name="surname"
              validators={{ onChange: zRequiredString }}
              children={(field) => {
                return (
                  <AppInput
                    label="Surname"
                    placeholder="Doe"
                    value={field.state.value}
                    onChangeText={field.handleChange}
                    onBlur={field.handleBlur}
                    invalid={field.state.meta.errors.length > 0}
                    textContentType="familyName"
                    autoComplete="name-family"
                    required
                  />
                )
              }}
            />
            <form.Field
              name="email"
              validators={{ onChange: zEmail }}
              children={(field) => {
                return (
                  <AppInput
                    label="E-mail"
                    placeholder="john.doe@example.com"
                    value={field.state.value}
                    onChangeText={field.handleChange}
                    onBlur={field.handleBlur}
                    invalid={field.state.meta.errors.length > 0}
                    textContentType="emailAddress"
                    autoComplete="email"
                    required
                  />
                )
              }}
            />
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <AppButton
                  label="Sell my data 💀"
                  variant="yellow-400"
                  size="lg"
                  isLoading={isSubmitting}
                  disabled={!canSubmit}
                  className="mt-4"
                  onPress={form.handleSubmit}
                />
              )}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default MMKV
