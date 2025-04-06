import { ZodType } from "zod"

import { storage } from "@/app/_layout"
import { tryCatch } from "@/utils/tryCatch"

export type TStorageKey = "user"

export const setToStorage = <T>(key: TStorageKey, value: T) => {
  storage.set(key, JSON.stringify(value))
}

export const getFromStorage = <T>(key: TStorageKey, schema?: ZodType<T>): T | null => {
  const value = storage.getString(key)

  if (!value) {
    return null
  }

  const parsingResult = tryCatch(() => JSON.parse(value) as T, `JSON Parsing ${key}`)

  if (parsingResult.error) {
    console.error("[##] parsing error:", parsingResult.error)
    return null
  }

  if (schema) {
    const validationResult = schema.safeParse(parsingResult.data)

    if (validationResult.error) {
      console.error("[##] validation error:", validationResult.error)
      return null
    }

    return validationResult.data
  }

  return parsingResult.data
}
