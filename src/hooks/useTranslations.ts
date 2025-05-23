import { useLocales } from "expo-localization"
import { I18n, TranslateOptions } from "i18n-js"

import en from "@/locales/en.json"
import { TTranslationPaths } from "@/types"
import { config } from "@/utils/config"

const i18n = new I18n(
  {
    en,
  },
  config.DEFAULT_LOCALE,
)

export const useTranslations = () => {
  const languageCode = useLocales()[0].languageCode ?? config.DEFAULT_LOCALE
  i18n.locale = languageCode

  const t = (path: TTranslationPaths, options?: TranslateOptions) => {
    return i18n.t(path, options)
  }

  return t
}
