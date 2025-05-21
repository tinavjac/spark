import { z } from "zod"

export const zRequiredString = z.string().nonempty()
export const zEmail = z.string().nonempty().email()
