import { Asset } from "expo-asset"

export type TImagesOption = "icon" | "iconDev" | "tanstack" | "zod"

export const images: { [key in TImagesOption]: ReturnType<typeof require> } = {
  icon: require("assets/images/icon.png"),
  iconDev: require("assets/images/icon-dev.png"),
  tanstack: require("assets/images/tanstack-logo.png"),
  zod: require("assets/images/zod-logo.png"),
}

const preloadImages = () =>
  Object.keys(images).map((key) => {
    return Asset.fromModule(images[key as TImagesOption] as number).downloadAsync()
  })

export const loadImages = async () => Promise.all(preloadImages())
