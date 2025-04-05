import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { SplashScreen, Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useColorScheme } from "nativewind"
import { useEffect } from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { MMKV } from "react-native-mmkv"
import { configureReanimatedLogger, ReanimatedLogLevel } from "react-native-reanimated"
import { SafeAreaProvider } from "react-native-safe-area-context"
import "../global.css"
import { loadFonts, loadImages } from "../theme"

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // TODO: set to true when nativewind fixed transitions
})

SplashScreen.preventAutoHideAsync()

const queryClient = new QueryClient()

export const storage = new MMKV()

export default function Layout() {
  const { colorScheme, setColorScheme } = useColorScheme()
  setColorScheme("light")

  useEffect(() => {
    const preload = async () => {
      try {
        await Promise.all([loadImages(), loadFonts()])
        await SplashScreen.hideAsync()
      } catch (err) {
        console.log("[##] preload error:", err)
      }
    }

    preload()
  }, [])

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <QueryClientProvider client={queryClient}>
            <StatusBar
              style={colorScheme === "light" ? "dark" : "light"}
              backgroundColor={"#ffffff"}
            />
            <Stack
              screenOptions={{
                headerBackTitle: "Back",
                headerShadowVisible: false,
                headerTintColor: "#262626",
                headerStyle: { backgroundColor: "#FFFFFF" },
                contentStyle: { backgroundColor: "#f5f5f5" },
              }}
            >
              <Stack.Screen name="index" options={{ title: "Spark✨" }} />
              <Stack.Screen name="zustand" options={{ title: "🐻 Zustand example" }} />
              <Stack.Screen name="mmkv" options={{ title: "💾 MMKV example" }} />
            </Stack>
          </QueryClientProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}
