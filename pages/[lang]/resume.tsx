import Resume, { ResumeProps, getResumeStaticProps } from '../resume'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ENGLISH, SPANISH, LANGUAGE_LOCALE_MAPPINGS } from 'lib/i18n/langs'

export const getStaticPaths: GetStaticPaths<{ lang: string }> = async () => {
  return {
    fallback: false,
    paths: [{ params: { lang: ENGLISH } }, { params: { lang: SPANISH } }],
  }
}

export const getStaticProps: GetStaticProps<
  ResumeProps,
  { lang: string }
> = async ({ params }) =>
  await getResumeStaticProps(LANGUAGE_LOCALE_MAPPINGS[params.lang])

export default Resume
