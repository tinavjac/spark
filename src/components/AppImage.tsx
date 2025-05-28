import { Image, ImageProps } from "expo-image"
import React from "react"
import { StyleSheet } from "react-native"

type TProps = ImageProps & {
  isLocal?: boolean
}

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj["

export const AppImage: React.FC<TProps> = ({
  source,
  isLocal,
  placeholder = { blurhash },
  contentFit = "cover",
  transition = 1000,
  style,
  ...props
}) => {
  return (
    <Image
      source={source}
      contentFit={contentFit}
      placeholder={!isLocal ? placeholder : undefined}
      transition={!isLocal ? transition : undefined}
      style={[styles.image, style]}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
})
