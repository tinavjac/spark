import { DefaultColors } from "tailwindcss/types/generated/colors"

const twColors = require("tailwindcss/colors") as DefaultColors

// @ts-ignore
delete twColors.lightBlue
// @ts-ignore
delete twColors.warmGray
// @ts-ignore
delete twColors.trueGray
// @ts-ignore
delete twColors.coolGray
// @ts-ignore
delete twColors.blueGray

export const colors = {
  ...twColors,
}
