import { QueryKey, useQueryClient } from "@tanstack/react-query"

export const useQueryCache = () => {
  const queryClient = useQueryClient()

  const getCachedValue = <T>(queryKey: QueryKey) => {
    return queryClient.getQueryData<T>(queryKey)
  }

  const setCacheValue = <T>(
    queryKey: QueryKey,
    updater: T | undefined | ((prevData?: T) => T | undefined),
  ) => {
    if (typeof updater === "function") {
      return queryClient.setQueryData<T>(queryKey, updater)
    } else {
      return queryClient.setQueryData<T>(queryKey, () => updater)
    }
  }

  const invalidateQueries = (queryKey: QueryKey) => {
    queryClient.invalidateQueries({ queryKey })
  }

  const removeQueries = (queryKey: QueryKey) => {
    queryClient.removeQueries({ queryKey })
  }

  return { getCachedValue, setCacheValue, invalidateQueries, removeQueries }
}
