import React from "react"
import { ScrollView, View } from "react-native"
import { AppButton, AppText } from "../components"
import { useCounter } from "../store"

const Zustand = () => {
  const { count, increment, decrement } = useCounter()

  return (
    <View className="flex-1">
      <ScrollView contentContainerClassName="pb-safe-offset-3 pt-4 px-4">
        <View className="mt-[70%] gap-10">
          <AppText className="text-center text-7xl font-bold text-neutral-800">{count}x 🐻</AppText>
          <View className="flex-row gap-4">
            <AppButton
              label="Increment"
              variant="green-500"
              size="md"
              className="flex-1"
              onPress={increment}
              renderItemLeft={() => (
                <AppText className="text-2xl font-bold text-neutral-50">⊕</AppText>
              )}
            />
            <AppButton
              label="Decrement"
              variant="red-500"
              size="md"
              className="flex-1"
              disabled={count === 0}
              onPress={decrement}
              renderItemLeft={() => (
                <AppText className="text-2xl font-bold text-neutral-50">⊖</AppText>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Zustand
