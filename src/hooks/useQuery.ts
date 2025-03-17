import { use } from "react";

import { fetchQuery } from "@/utils/queryCache";

export function useQuery<T>(
  key: string,
  fetcher: () => Promise<T>,
  enabled: boolean = true,
) {
  if (!enabled) {
    return null;
  } // ❌ `null` ne suspend pas le rendu
  return use(fetchQuery(key, fetcher)); // ✅ `use()` suspend le rendu jusqu'à la fin de la requête
}
