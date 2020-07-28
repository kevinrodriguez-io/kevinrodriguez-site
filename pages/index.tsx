import { NextPage, GetStaticProps } from 'next'

import { css, cx } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'

import graphqlClient from 'lib/graphql/contentful-client'
import { getSdk, GetLandingQuery } from 'lib/graphql/contentful-graphql'

import { Nav } from 'components/Nav'
import { Footer } from 'components/Footer'
import { LittleConsole } from 'components/LittleConsole'
import { I18nAwareLink } from 'components/I18nAwareLink'
import { getI18nDictionary } from 'lib/i18n/getI18nDictionary'
import { LOCALE_LANGUAGE_MAPPINGS } from 'lib/i18n/langs'
import { DictionaryTranslationProp } from 'lib/i18n/types'

export type LandingProps = DictionaryTranslationProp & {
  data: GetLandingQuery
}

const Index: NextPage<LandingProps> = ({ data, t }) => {
  const { briefing, displayName, qualities } = data.landing
  return (
    <>
      <Nav t={t} />
      <main
        className={cx(
          css(
            tw`relative bg-gray-50 py-8 md:flex md:flex-1 md:flex-col justify-center px-4 sm:px-2`,
          ),
          'dotted-background',
        )}
      >
        <div className={css(tw`text-center`)}>
          <h2
            className={css(
              tw`text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl sm:leading-none md:text-6xl text-gray-900`,
            )}
          >
            {displayName.split(' ')[0]}
            <br className={css(tw`xl:hidden`)} />
            <span>&nbsp;{displayName.split(' ')[1]}</span>
          </h2>
          <p
            className={css(
              tw`mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl`,
            )}
          >
            {briefing}
          </p>
          <div
            className={css(
              tw`mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8`,
            )}
          >
            <div className={css(tw`rounded-md shadow`)}>
              <a
                className={css(
                  tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 shadow-teal-next hover:shadow-teal`,
                )}
              >
                {t['goToBlog']}
              </a>
            </div>
            <div className={css(tw`mt-5 rounded-md shadow sm:mt-0 sm:ml-3`)}>
              <I18nAwareLink href="/resume" passHref>
                <a
                  className={css(
                    tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-700 bg-white hover:text-gray-400 focus:outline-none focus:border-teal-300 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10`,
                  )}
                >
                  {t['viewResume']}
                </a>
              </I18nAwareLink>
            </div>
          </div>
          <LittleConsole qualities={qualities} />
        </div>
      </main>
      <Footer />
      <style jsx global>{`
        #__next {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        div[class^='page-transition'],
        div[class*=' page-transition'] {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  )
}

export const getIndexStaticProps = async (locale: string) => {
  const { getLanding } = getSdk(graphqlClient)
  const data = await getLanding({ locale })
  const t = await getI18nDictionary({
    language: LOCALE_LANGUAGE_MAPPINGS[locale],
    namespace: 'common',
  })
  return { props: { data, t } }
}

export const getStaticProps: GetStaticProps<LandingProps> = async () =>
  await getIndexStaticProps('en-US')

export default Index
