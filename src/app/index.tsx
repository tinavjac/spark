import React from "react"
import { View } from "react-native"
import { AppText } from "../components"

const Page = () => {
  return (
    <View className="flex-1 items-center justify-center gap-2">
      <AppText className="text-6xl font-bold text-yellow-400">Spark✨</AppText>
      <AppText className="text-lg font-light tracking-wider text-neutral-700">
        Ignite your app's fire!
      </AppText>
    </View>
  )
}

export default Page
