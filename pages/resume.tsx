import { NextPage, GetStaticProps } from 'next'
import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'

import { Nav } from 'components/Nav'
import { Footer } from 'components/Footer'
import { Hero } from 'components/resume/Hero'
import { WorkExperienceTimeLine } from 'components/resume/WorkExperienceTimeLine'
import { TechnologiesSection } from 'components/resume/TechnologiesSection'

import graphqlClient from 'lib/graphql/contentful-client'
import {
  getSdk,
  ResumeQuery,
  PreviousWorkCollection,
  Asset,
  ResumeAboutMe,
  ResumeAvailableTechnologiesCollection,
} from 'lib/graphql/contentful-graphql'

type StudyCardProps = {
  title: string
  category: string
}

const StudyCard: React.FC<StudyCardProps> = ({ title, category, children }) => {
  return (
    <div className={css(tw`p-4 lg:w-1/3`)}>
      <div
        className={css(
          tw`h-full bg-gray-200 px-8 py-16  rounded-lg overflow-hidden text-center relative`,
        )}
      >
        <h2
          className={css(
            tw`tracking-widest text-xs font-medium text-gray-500 mb-1`,
          )}
        >
          {category}
        </h2>
        <h1
          className={css(
            tw` sm:text-2xl text-xl font-medium text-gray-900 mb-3`,
          )}
        >
          {title}
        </h1>
        <p className={css(tw`leading-relaxed mb-3`)}>{children}</p>
      </div>
    </div>
  )
}

type ResumeProps = {
  data: ResumeQuery
}

const Resume: NextPage<ResumeProps> = ({ data }) => {
  const {
    profilePicture,
    aboutMe,
    previousWorkCollection,
    availableTechnologiesCollection,
    studiesCollection,
    otherStudiesCollection,
  } = data.resume

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
      <TechnologiesSection
        availableTechnologiesCollection={
          availableTechnologiesCollection as ResumeAvailableTechnologiesCollection
        }
      />
      <section className={css(tw`text-gray-700`)}>
        <div className={css(tw`container px-5 mx-auto`)}>
          <h2
            className={css(
              tw`mb-5 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl`,
            )}
          >
            Studies
          </h2>
          <div className={css(tw`flex flex-wrap -m-4`)}>
            {studiesCollection.items.map(study => (
              <StudyCard
                key={study.institutionName}
                title={study.institutionName}
                category={`From ${(study.from as string).split('-')[0]}`}
              >
                {study.degree}
              </StudyCard>
            ))}
            {otherStudiesCollection.items.map(study => (
              <StudyCard
                key={study.institutionName}
                title={study.instructor}
                category={study.institutionName}
              >
                {study.title}
              </StudyCard>
            ))}
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
