import en from "@/locales/en.json"

/**
 * gets all keys of object including all the nested object
 */
export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
}[keyof ObjectType & (string | number)]

/**
 * all the paths in to translations in en.json
 */
export type TTranslationPaths = NestedKeyOf<typeof en>
