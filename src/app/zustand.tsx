import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import React from "react"
import { ScrollView, View } from "react-native"

import { AppText, Button, ButtonText } from "@/components"
import { useCounter } from "@/store"

const Zustand = () => {
  const { count, increment, decrement } = useCounter()

  return (
    <View className="flex-1">
      <ScrollView contentContainerClassName="pb-safe-offset-3 pt-4 px-4">
        <View className="mt-[70%] gap-10">
          <AppText className="text-center text-7xl font-bold text-neutral-800">{count}x 🐻</AppText>
          <View className="flex-row gap-4">
            <Button
              size="md"
              action="positive"
              className="flex-1"
              isDisabled={count >= 10}
              onPress={increment}
            >
              <FontAwesome6 name="circle-plus" size={20} color="white" />
              <ButtonText>Increment</ButtonText>
            </Button>
            <Button
              size="md"
              action="negative"
              className="flex-1"
              isDisabled={count <= 0}
              onPress={decrement}
            >
              <FontAwesome6 name="circle-minus" size={20} color="white" />
              <ButtonText>Decrement</ButtonText>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Zustand
