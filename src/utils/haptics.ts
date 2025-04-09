import * as Haptics from "expo-haptics"

export const hapticsNotify = async (type: "success" | "error" | "warning") => {
  if (type === "success") {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  }
  if (type === "error") {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
  }
  if (type === "warning") {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
  }
}

export const hapticsImpact = async (type: "light" | "medium" | "heavy") => {
  if (type === "light") {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }
  if (type === "medium") {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
  }
  if (type === "heavy") {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
  }
}
