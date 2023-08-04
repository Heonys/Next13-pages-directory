import { useCallback } from "react";
import useSWR, { mutate } from "swr";
import type { Store } from "../types/store";

export const CURRENT_STORE_KEY = "/current-store";

const useCurrentStore = () => {
  const setCurrentStore = useCallback((store: Store) => {
    mutate(CURRENT_STORE_KEY, store);
  }, []);

  const clearCurrentStore = useCallback(() => {
    mutate(CURRENT_STORE_KEY, null);
  }, []);

  const { data: currentStore } = useSWR(CURRENT_STORE_KEY);

  return {
    setCurrentStore,
    clearCurrentStore,
    currentStore,
  };
};
export default useCurrentStore;
