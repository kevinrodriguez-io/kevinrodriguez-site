export const removeTrailingSlash = (input: string) =>
  input.replace(/^(.+?)\/*?$/, '$1')
