import Index, { LandingProps, getIndexStaticProps } from '../index'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ENGLISH, SPANISH, LANGUAGE_LOCALE_MAPPINGS } from 'lib/i18n/langs'

export const getStaticPaths: GetStaticPaths<{ lang: string }> = async () => {
  return {
    fallback: false,
    paths: [{ params: { lang: ENGLISH } }, { params: { lang: SPANISH } }],
  }
}

export const getStaticProps: GetStaticProps<
  LandingProps,
  { lang: string }
> = async ({ params }) =>
  await getIndexStaticProps(LANGUAGE_LOCALE_MAPPINGS[params.lang])

export default Index
