const { getDefaultConfig } = require("expo/metro-config")
const { withNativeWind } = require("nativewind/metro")
const { wrapWithReanimatedMetroConfig } = require("react-native-reanimated/metro-config")

const createConfig = () => {
  const config = getDefaultConfig(__dirname)

  const { transformer, resolver } = config

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  }
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  }
  return config
}

const config = createConfig()
module.exports = withNativeWind(wrapWithReanimatedMetroConfig(config), {
  input: "./src/global.css",
})
