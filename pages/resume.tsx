import { NextPage, GetStaticProps } from 'next'
import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'

import { Nav } from 'components/Nav'
import { Footer } from 'components/Footer'
import { Hero } from 'components/resume/Hero'
import { WorkExperienceTimeLine } from 'components/resume/WorkExperienceTimeLine'

import graphqlClient from 'lib/graphql/contentful-client'
import {
  getSdk,
  ResumeQuery,
  PreviousWorkCollection,
  Asset,
  ResumeAboutMe,
} from 'lib/graphql/contentful-graphql'
import { groupBy } from 'lib/tools/groupBy'
import { sortWithKeyRetrieverDescending } from 'lib/tools/sortBy'

type ResumeProps = {
  data: ResumeQuery
}

const Resume: NextPage<ResumeProps> = ({ data }) => {
  const {
    profilePicture,
    aboutMe,
    previousWorkCollection,
    availableTechnologiesCollection,
  } = data.resume
  const groupedTechnologies = sortWithKeyRetrieverDescending(
    Object.entries(
      groupBy(availableTechnologiesCollection.items, i => i.category),
    ),
    ([, value]) => value.length,
  )
  return (
    <>
      <Nav />
      <Hero
        profilePicture={profilePicture as Asset}
        aboutMe={aboutMe as ResumeAboutMe}
      />
      <WorkExperienceTimeLine
        previousWork={
          (previousWorkCollection as unknown) as PreviousWorkCollection
        }
      />
      <section className={css(tw`text-gray-700`)}>
        <div className={css(tw`container px-5 py-24 mx-auto`)}>
          <div className={css(tw`mb-20`)}>
            <h2
              className={css(
                tw`mb-5 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl`,
              )}
            >
              Technologies I'm Proficient With
            </h2>
          </div>
          <div className={css(tw`flex flex-wrap -m-4`)}>
            {groupedTechnologies.map(([category, technologies]) => {
              return (
                <div className={css(tw`p-4 lg:w-1/4 sm:w-1/2 w-full`)}>
                  <h2
                    className={css(
                      tw`font-medium tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left`,
                    )}
                  >
                    {category}
                  </h2>
                  <div
                    className={css(
                      tw`flex flex-col sm:items-start sm:text-left text-center items-center -mb-1`,
                    )}
                  >
                    {technologies.map(({ name }) => (
                      <span className={css(tw`mb-2`)}>
                        <span
                          className={css(
                            tw`bg-teal-100 text-teal-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center`,
                          )}
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className={css(tw`w-3 h-3`)}
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { resume } = getSdk(graphqlClient)
  const data = await resume({
    locale: 'en-US',
  })
  return {
    props: {
      data,
    },
  }
}

export default Resume
