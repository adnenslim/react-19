const cache = new Map<string, Promise<unknown>>();

export function fetchQuery<T>(
  key: string,
  fetcher: () => Promise<T>,
): Promise<T> {
  if (!cache.has(key)) {
    cache.set(
      key,
      fetcher().then((data) => {
        cache.set(key, Promise.resolve(data));
        return data;
      }),
    );
  }
  return cache.get(key) as Promise<T>;
}

export function clearQueryCache(key: string) {
  cache.delete(key);
}

export function refetchQuery<T>(key: string, fetcher: () => Promise<T>) {
  clearQueryCache(key);
  return fetchQuery(key, fetcher);
}
