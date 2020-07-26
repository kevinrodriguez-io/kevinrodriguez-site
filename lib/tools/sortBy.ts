/**
 * Sorts a list by using the > operator
 * @param list Input List to be sorted
 * @param key Key argument to be used
 */
export const sortWithKey = <T, K extends keyof T>(list: T[], key: K) =>
  list.concat().sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0))

/**
 * Sorts a list in descending order by using the < operator
 * @param list Input List to be sorted
 * @param key Key argument to be used
 */
export const sortWithKeyDescending = <T, K extends keyof T>(
  list: T[],
  key: K,
) =>
  list.concat().sort((a, b) => (a[key] < b[key] ? 1 : b[key] < a[key] ? -1 : 0))

/**
 * Sorts a list in descending order by using the < operator
 * @param list Input List to be sorted
 * @param keyRetriever Key retriever function for advanced usage
 */
export const sortWithKeyRetriever = <T, P>(
  list: T[],
  keyRetriever: (item: T) => P,
) =>
  list
    .concat()
    .sort((a, b, ra = keyRetriever(a), rb = keyRetriever(b)) =>
      ra > rb ? 1 : rb > ra ? -1 : 0,
    )

/**
 * Sorts a list in descending order by using the < operator
 * @param list Input List to be sorted
 * @param keyRetriever Key retriever function for advanced usage
 */
export const sortWithKeyRetrieverDescending = <T, P>(
  list: T[],
  keyRetriever: (item: T) => P,
) =>
  list
    .concat()
    .sort((a, b, ra = keyRetriever(a), rb = keyRetriever(b)) =>
      ra < rb ? 1 : rb < ra ? -1 : 0,
    )
