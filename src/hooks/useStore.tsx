import { useCallback } from "react";
import { Store } from "../types/store";
import useSWR, { mutate } from "swr";

export const STORE_KEY = "/stores";

const useStores = () => {
  const initializeStores = useCallback((stores: Store[]) => {
    mutate(STORE_KEY, stores);
  }, []);

  const { data } = useSWR<Store[]>(STORE_KEY);

  return {
    initializeStores,
    data,
  };
};
export default useStores;
