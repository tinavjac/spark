import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useColorScheme } from "nativewind"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { MMKV } from "react-native-mmkv"
import { SafeAreaProvider } from "react-native-safe-area-context"
import "../global.css"

const queryClient = new QueryClient()

export const storage = new MMKV()

export default function Layout() {
  const { colorScheme, setColorScheme } = useColorScheme()
  setColorScheme("light")

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
                headerShown: false,
              }}
            />
          </QueryClientProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}
