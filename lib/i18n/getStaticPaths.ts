import { ENGLISH, SPANISH } from './langs'

export const getStaticPaths = () => {
  return {
    fallback: false,
    paths: [{ params: { lang: ENGLISH } }, { params: { lang: SPANISH } }],
  }
}
