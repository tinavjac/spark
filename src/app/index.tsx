import { Link } from "expo-router"
import React from "react"
import { ScrollView, View } from "react-native"
import { AppButton, AppText, Icon } from "../components"

const Page = () => {
  return (
    <View className="flex-1">
      <ScrollView contentContainerClassName="pb-safe-offset-3 items-center gap-10 px-4 h-full justify-center">
        <View className="items-center gap-2">
          <Icon icon="IconSparkLogo" width={80} height={100} />
          <AppText className="text-center text-2xl font-light tracking-wider text-neutral-700">
            Opinionated template for your next React Native project
          </AppText>
        </View>
        <View className="flex-row gap-4">
          <Link href="/zustand" asChild>
            <AppButton label="🐻 Zustand" variant="yellow-400" size="lg" className="flex-1" />
          </Link>
          <Link href="/mmkv" asChild>
            <AppButton label="💾 MMKV" variant="yellow-400" size="lg" className="flex-1" />
          </Link>
        </View>
      </ScrollView>
    </View>
  )
}

export default Page
