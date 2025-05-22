import { Image } from "expo-image"
import React from "react"
import { StyleSheet } from "react-native"

type TProps = {
  src: string | ReturnType<typeof require>
  isLocal?: boolean
}

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj["

export const AppImage: React.FC<TProps> = ({ src, isLocal }) => {
  return (
    <Image
      style={[styles.image]}
      source={src}
      placeholder={!isLocal ? { blurhash } : undefined}
      contentFit="cover"
      transition={!isLocal ? 1000 : undefined}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
})
