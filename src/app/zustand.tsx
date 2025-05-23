import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import React from "react"
import { ScrollView, View } from "react-native"

import { AppText, Button, ButtonText } from "@/components"
import { useTranslations } from "@/hooks"
import { useCounter } from "@/store"
import { hapticsNotify, toast } from "@/utils"

const MIN_COUNT = 0
const MAX_COUNT = 10

const Zustand = () => {
  const t = useTranslations()

  // mutations
  const { count, increment, decrement } = useCounter()

  const handleIncrement = () => {
    if (increment() >= MAX_COUNT) {
      hapticsNotify("warning")
      toast({
        type: "info",
        title: t("GeneralTranslations.toast.infoMessage"),
        description: t("Zustand.toast.increment", { count: MAX_COUNT }),
      })
    }
  }

  const handleDecrement = () => {
    if (decrement() <= MIN_COUNT) {
      hapticsNotify("error")
      toast({
        type: "error",
        title: t("GeneralTranslations.toast.errorMessage"),
        description: t("Zustand.toast.decrement"),
      })
    }
  }

  return (
    <View className="flex-1">
      <ScrollView contentContainerClassName="pb-safe-offset-3 pt-4 px-4">
        <View className="mt-[70%] gap-10">
          <AppText className="text-center text-7xl font-bold text-neutral-800">
            {t("Zustand.bearCount", { count })}
          </AppText>
          <View className="flex-row gap-4">
            <Button
              size="md"
              action="positive"
              className="flex-1"
              isDisabled={count >= MAX_COUNT}
              onPress={handleIncrement}
            >
              <FontAwesome6 name="circle-plus" size={20} color="white" />
              <ButtonText>{t("Zustand.increment")}</ButtonText>
            </Button>
            <Button
              size="md"
              action="negative"
              className="flex-1"
              isDisabled={count <= MIN_COUNT}
              onPress={handleDecrement}
            >
              <FontAwesome6 name="circle-minus" size={20} color="white" />
              <ButtonText>{t("Zustand.decrement")}</ButtonText>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Zustand
