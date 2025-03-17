import { use } from "react";

import { fetchQuery } from "@/utils/queryCache";

export function useQuery<T>(
  key: string,
  fetcher: () => Promise<T>,
  enabled: boolean = true,
) {
  if (!enabled) {
    return null;
  }
  return use(fetchQuery(key, fetcher));
}
