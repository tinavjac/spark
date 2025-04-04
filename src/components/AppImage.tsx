import { Image } from "expo-image"
import React from "react"
import { StyleSheet } from "react-native"

type TProps = {
  src: string | ReturnType<typeof require>
}

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj["

export const AppImage: React.FC<TProps> = ({ src }) => {
  return (
    <Image
      style={[styles.image]}
      source={src}
      placeholder={{ blurhash }}
      contentFit="cover"
      transition={1000}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
})
