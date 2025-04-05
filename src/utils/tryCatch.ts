type Success<T> = { data: T; error: null }
type Failure<E> = { data: null; error: E }
type Result<T, E = Error> = Success<T> | Failure<E>

/**
 * tryCatch - Error handling that can be synchronous or asynchronous
 * based on the input function.
 *
 * @param fn Function to execute.
 * @param operationName Optional name for context.
 * @returns A Result, or a Promise resolving to a Result, depending on fn.
 */
export function tryCatch<T>(fn: () => T, operationName?: string): Result<T, Error>
export function tryCatch<T>(fn: () => Promise<T>, operationName?: string): Promise<Result<T, Error>>
export function tryCatch<T>(
  fn: () => T | Promise<T>,
  operationName?: string,
): Result<T, Error> | Promise<Result<T, Error>> {
  try {
    const result = fn()
    if (result instanceof Promise) {
      return result
        .then((data) => ({ data, error: null }))
        .catch((rawError: unknown) => {
          const processedError = rawError instanceof Error ? rawError : new Error(String(rawError))

          if (operationName) {
            processedError.message = `Operation "${operationName}" failed: ${processedError.message}`
          }
          return { data: null, error: processedError }
        })
    } else {
      return { data: result, error: null }
    }
  } catch (rawError: unknown) {
    const processedError = rawError instanceof Error ? rawError : new Error(String(rawError))

    if (operationName) {
      processedError.message = `Operation "${operationName}" failed: ${processedError.message}`
    }
    return { data: null, error: processedError }
  }
}
