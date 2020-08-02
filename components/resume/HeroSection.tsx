import React from 'react'
import { css, cx } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Asset, ResumeAboutMe } from 'lib/graphql/contentful-graphql'
import { SectionHeader } from 'components/SectionHeader'

type HeroProps = {
  aboutMe: ResumeAboutMe
  profilePicture: Asset
  t: Record<string, string>
}

export const HeroSection: React.FC<HeroProps> = ({
  aboutMe,
  profilePicture,
  t
}) => {
  return (
    <section className={css(tw`text-gray-700 py-6 md:py-12`)}>
      <div
        className={css(tw`container px-5 mx-auto flex flex-wrap items-center`)}
      >
        <div className={css(tw`lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0`)}>
          <SectionHeader>
            Kevin Rodríguez&nbsp;
            <span className={css(tw`text-teal-600`)}>{t['resume']}</span>
          </SectionHeader>
          <img
            className={cx(
              css(tw`inline-block h-32 w-32 rounded-md mx-auto mr-3`),
              css(`float: left;`),
            )}
            src={profilePicture.url}
            alt={profilePicture.description}
          />
          <div className={css(tw`leading-relaxed mt-4`)}>
            {documentToReactComponents(aboutMe.json)}
          </div>
        </div>
        <div
          className={css(
            tw`lg:w-2/6 md:w-1/2 bg-teal-50 shadow-teal-2xl rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0`,
          )}
        >
          <h2 className={css(tw`text-gray-900 text-lg font-medium mb-5`)}>
            {t["contact"]}
          </h2>
          <input
            placeholder={t["name"]}
            type="text"
            className={css(
              tw`bg-white rounded border border-gray-400 focus:outline-none focus:border-teal-500 text-base px-4 py-2 mb-4`,
            )}
          />
          <input
            placeholder={t["email"]}
            type="email"
            className={css(
              tw`bg-white rounded border border-gray-400 focus:outline-none focus:border-teal-500 text-base px-4 py-2 mb-4`,
            )}
          />
          <button
            className={css(
              tw`text-white bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg shadow-teal-lg-full hover:shadow-teal-md-full`,
            )}
          >
            {t["submit"]}
          </button>
          <p className={css(tw`text-xs text-gray-500 mt-3`)}>
            {t["contactYouMessage"]}
          </p>
        </div>
      </div>
    </section>
  )
}
