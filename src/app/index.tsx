import { Motion } from "@legendapp/motion"
import { Link } from "expo-router"
import React from "react"
import { ScrollView, View } from "react-native"

import { AppText, Button, ButtonText, Icon } from "@/components"
import { hapticsImpact } from "@/utils"

const Page = () => {
  return (
    <View className="flex-1">
      <ScrollView contentContainerClassName="pb-safe-offset-3 px-4 pt-4">
        <View className="mt-[50%] gap-10">
          <Motion.Pressable className="items-center gap-4" onPress={() => hapticsImpact("medium")}>
            <Motion.View
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileTap={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 10,
              }}
            >
              <Icon icon="IconSparkLogo" width={100} height={120} />
            </Motion.View>
            <AppText className="text-center text-2xl font-light tracking-wider">
              Opinionated template for your next React Native project
            </AppText>
          </Motion.Pressable>
          <View className="flex-row gap-4">
            <Link href="/zustand" onPress={() => hapticsImpact("light")} asChild>
              <Button size="lg" action="primary" className="flex-1">
                <ButtonText>🐻 Zustand</ButtonText>
              </Button>
              {/* <AppButton label="🐻 Zustand" variant="yellow-400" size="lg" className="flex-1" /> */}
            </Link>
            <Link href="/mmkv" onPress={() => hapticsImpact("light")} asChild>
              <Button size="lg" action="primary" className="flex-1">
                <ButtonText>💾 MMKV</ButtonText>
              </Button>
            </Link>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Page
