import { ConfigContext, ExpoConfig } from "expo/config"

export default ({ config }: ConfigContext): ExpoConfig => {
  const envConfig: ExpoConfig = {
    ...config,
    name: process.env.EXPO_PUBLIC_NAME ?? "",
    slug: process.env.EXPO_PUBLIC_SLUG ?? "",
    scheme: process.env.EXPO_PUBLIC_SCHEME ?? "",
    splash: {
      ...config.splash,
      backgroundColor: "#ffffff",
    },
    ios: {
      ...config.ios,
      bundleIdentifier: process.env.EXPO_PUBLIC_IOS_BUNDLE_IDENTIFIER,
    },
    android: {
      ...config.android,
      package: process.env.EXPO_PUBLIC_ANDROID_PACKAGE,
    },
    web: {
      ...config.web,
      bundler: "metro",
    },
    updates: {
      enabled: false,
      fallbackToCacheTimeout: 0,
      url: `https://u.expo.dev/${process.env.EXPO_PUBLIC_PROJECT_ID}`,
    },
    extra: {
      ...config.extra,
      eas: { projectId: process.env.EXPO_PUBLIC_PROJECT_ID },
      ENV: process.env.EXPO_PUBLIC_ENV,
      API_URL: process.env.EXPO_PUBLIC_API_URL,
      DEFAULT_LOCALE: process.env.EXPO_PUBLIC_DEFAULT_LOCALE,
    },
  }
  return envConfig
}
