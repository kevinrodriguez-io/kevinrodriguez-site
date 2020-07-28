export type getI18nOptions = {
  language: string
  namespace: string
}

export const getI18nDictionary = async (
  { language, namespace }: getI18nOptions = {
    language: 'en',
    namespace: 'common',
  },
) => {
  const result = ((await import(
    `./dictionaries/${namespace}/${language}.json`
  )) as any).default as Record<string, string>
  return result
}
