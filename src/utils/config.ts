import Constants from "expo-constants"

export const config = {
  ENV: Constants.expoConfig?.extra?.ENV,
  API_URL: Constants.expoConfig?.extra?.API_URL,
  DEFAULT_LOCALE: Constants.expoConfig?.extra?.DEFAULT_LOCALE,
}
