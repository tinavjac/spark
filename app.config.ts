import { ConfigContext, ExpoConfig } from "expo/config"

export default ({ config }: ConfigContext): ExpoConfig => {
  const envConfig: ExpoConfig = {
    ...config,
    name: process.env.EXPO_PUBLIC_NAME ?? "",
    slug: process.env.EXPO_PUBLIC_SLUG ?? "",
    scheme: process.env.EXPO_PUBLIC_SCHEME ?? "",
    icon:
      process.env.EXPO_PUBLIC_ENV === "development"
        ? "./assets/images/icon-dev.png"
        : "./assets/images/icon.png",
    splash: {
      ...config.splash,
      image:
        process.env.EXPO_PUBLIC_ENV === "development"
          ? "./assets/images/splashscreen-dev.png"
          : "./assets/images/splashscreen.png",
      resizeMode: "cover",
      backgroundColor: "#F6F4ED",
    },
    ios: {
      ...config.ios,
      bundleIdentifier: process.env.EXPO_PUBLIC_IOS_BUNDLE_IDENTIFIER,
    },
    android: {
      ...config.android,
      package: process.env.EXPO_PUBLIC_ANDROID_PACKAGE,
      adaptiveIcon: {
        foregroundImage:
          process.env.EXPO_PUBLIC_ENV === "development"
            ? "./assets/images/adaptive-icon-dev.png"
            : "./assets/images/adaptive-icon.png",
        backgroundColor: "#F6F4ED",
      },
    },
    web: {
      ...config.web,
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
