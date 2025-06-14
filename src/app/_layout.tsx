import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { SplashScreen, Stack } from "expo-router"
import { useColorScheme } from "nativewind"
import React, { useEffect } from "react"
import { SystemBars } from "react-native-edge-to-edge"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { KeyboardProvider } from "react-native-keyboard-controller"
import { MMKV } from "react-native-mmkv"
import { configureReanimatedLogger, ReanimatedLogLevel } from "react-native-reanimated"
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"
import Toast from "react-native-toast-message"

import { GluestackUIProvider } from "@/components/ui"
import { useTranslations } from "@/hooks"
import { colors, loadFonts, loadImages } from "@/theme"
import { tryCatch } from "@/utils/tryCatch"

import "@/global.css"

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // TODO: set to true when nativewind fixed transitions
})

SplashScreen.preventAutoHideAsync()

const queryClient = new QueryClient()

export const storage = new MMKV()

export default function Layout() {
  const t = useTranslations()

  const { colorScheme, setColorScheme } = useColorScheme()
  setColorScheme("light")

  useEffect(() => {
    const preload = async () => {
      const preloadResult = await tryCatch(async () => {
        await Promise.all([loadImages(), loadFonts()])
        await SplashScreen.hideAsync()
      }, "Assets preload")

      if (preloadResult.error) {
        console.error("[##] preload error:", preloadResult.error)
      }
    }

    preload()
  }, [])

  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        <GestureHandlerRootView>
          <QueryClientProvider client={queryClient}>
            <GluestackUIProvider mode={colorScheme}>
              <BottomSheetModalProvider>
                <SystemBars style="dark" />
                <Stack
                  screenOptions={{
                    headerBackTitle: t("GeneralTranslations.back"),
                    headerShadowVisible: false,
                    headerTintColor: colors.neutral[800],
                    headerStyle: { backgroundColor: colors.white },
                    contentStyle: { backgroundColor: colors.neutral[100] },
                  }}
                >
                  <Stack.Screen name="index" options={{ title: t("Home.title") }} />
                  <Stack.Screen name="zustand" options={{ title: t("Zustand.title") }} />
                  <Stack.Screen name="mmkv" options={{ title: t("MMKV.title") }} />
                </Stack>
              </BottomSheetModalProvider>
            </GluestackUIProvider>
          </QueryClientProvider>
        </GestureHandlerRootView>
      </KeyboardProvider>
      <ToastProvider />
    </SafeAreaProvider>
  )
}

const ToastProvider = () => {
  const insets = useSafeAreaInsets()

  return <Toast topOffset={insets.top} bottomOffset={insets.bottom} />
}
