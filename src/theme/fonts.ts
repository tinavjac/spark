import { loadAsync } from "expo-font"

export const fonts = {
  poppins: {
    light: "poppins_light",
    lightItalic: "poppins_light_italic",
    regular: "poppins_regular",
    regularItalic: "poppins_regular_italic",
    medium: "poppins_medium",
    mediumItalic: "poppins_medium_italic",
    semiBold: "poppins_semi_bold",
    semiBoldItalic: "poppins_semi_bold_italic",
    bold: "poppins_bold",
    boldItalic: "poppins_bold_italic",
  },
}

export const loadFonts = () =>
  loadAsync({
    [fonts.poppins.light]: require("assets/fonts/Poppins-Light.ttf"),
    [fonts.poppins.lightItalic]: require("assets/fonts/Poppins-LightItalic.ttf"),
    [fonts.poppins.regular]: require("assets/fonts/Poppins-Regular.ttf"),
    [fonts.poppins.regularItalic]: require("assets/fonts/Poppins-RegularItalic.ttf"),
    [fonts.poppins.medium]: require("assets/fonts/Poppins-Medium.ttf"),
    [fonts.poppins.mediumItalic]: require("assets/fonts/Poppins-MediumItalic.ttf"),
    [fonts.poppins.semiBold]: require("assets/fonts/Poppins-SemiBold.ttf"),
    [fonts.poppins.semiBoldItalic]: require("assets/fonts/Poppins-SemiBoldItalic.ttf"),
    [fonts.poppins.bold]: require("assets/fonts/Poppins-Bold.ttf"),
    [fonts.poppins.boldItalic]: require("assets/fonts/Poppins-BoldItalic.ttf"),
  })
