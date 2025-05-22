import { useForm } from "@tanstack/react-form"
import React from "react"
import { View } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-controller"
import { z } from "zod"

import {
  AppImage,
  AppText,
  Button,
  ButtonSpinner,
  ButtonText,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
} from "@/components"
import { colors, images } from "@/theme"
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
              <AppImage src={images.tanstack} isLocal />
            </View>
            <AppText className="text-2xl font-bold">+</AppText>
            <View className="size-12">
              <AppImage src={images.zod} isLocal />
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
                  <FormControl isInvalid={field.state.meta.errors.length > 0} isRequired>
                    <FormControlLabel>
                      <FormControlLabelText>Name</FormControlLabelText>
                    </FormControlLabel>
                    <Input>
                      <InputField
                        value={field.state.value}
                        onChangeText={field.handleChange}
                        textContentType="givenName"
                        autoComplete="name-given"
                      />
                    </Input>
                  </FormControl>
                )
              }}
            />
            <form.Field
              name="surname"
              validators={{ onChange: zRequiredString }}
              children={(field) => {
                return (
                  <FormControl isInvalid={field.state.meta.errors.length > 0} isRequired>
                    <FormControlLabel>
                      <FormControlLabelText>Surname</FormControlLabelText>
                    </FormControlLabel>
                    <Input>
                      <InputField
                        value={field.state.value}
                        onChangeText={field.handleChange}
                        textContentType="familyName"
                        autoComplete="name-family"
                      />
                    </Input>
                  </FormControl>
                )
              }}
            />
            <form.Field
              name="email"
              validators={{ onChange: zEmail }}
              children={(field) => {
                return (
                  <FormControl isInvalid={field.state.meta.errors.length > 0} isRequired>
                    <FormControlLabel>
                      <FormControlLabelText>E-mail</FormControlLabelText>
                    </FormControlLabel>
                    <Input>
                      <InputField
                        value={field.state.value}
                        onChangeText={field.handleChange}
                        textContentType="emailAddress"
                        autoComplete="email"
                      />
                    </Input>
                  </FormControl>
                )
              }}
            />
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <Button
                  size="lg"
                  className="mt-4 flex-1"
                  isDisabled={!canSubmit}
                  onPress={form.handleSubmit}
                >
                  {isSubmitting ? (
                    <ButtonSpinner color={colors.neutral[800]} />
                  ) : (
                    <ButtonText>Sell my data 💀</ButtonText>
                  )}
                </Button>
              )}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default MMKV
