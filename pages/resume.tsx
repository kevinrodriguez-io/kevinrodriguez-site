import { NextPage, GetStaticProps } from 'next'

import { Nav } from 'components/Nav'
import { Footer } from 'components/Footer'
import { HeroSection } from 'components/resume/HeroSection'
import { WorkExperienceSection } from 'components/resume/WorkExperienceSection'
import { TechnologiesSection } from 'components/resume/TechnologiesSection'
import { StudiesSection } from 'components/resume/StudiesSection'

import graphqlClient from 'lib/graphql/contentful-client'
import {
  getSdk,
  GetResumeQuery,
  Asset,
  ResumeAboutMe,
  ResumeAvailableTechnologiesCollection,
  ResumeStudiesCollection,
  ResumeOtherStudiesCollection,
  ResumePreviousWorkCollection,
} from 'lib/graphql/contentful-graphql'
import { getI18nDictionary } from 'lib/i18n/getI18nDictionary'
import { LOCALE_LANGUAGE_MAPPINGS } from 'lib/i18n/langs'

export type ResumeProps = {
  data: GetResumeQuery
  t: Record<string, string>
}

const Resume: NextPage<ResumeProps> = ({ data, t }) => {
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
      <Nav t={t} />
      <HeroSection
        profilePicture={profilePicture as Asset}
        aboutMe={aboutMe as ResumeAboutMe}
        t={t}
      />
      <WorkExperienceSection
        previousWork={previousWorkCollection as ResumePreviousWorkCollection}
        t={t}
      />
      <TechnologiesSection
        availableTechnologiesCollection={
          availableTechnologiesCollection as ResumeAvailableTechnologiesCollection
        }
        t={t}
      />
      <StudiesSection
        studiesCollection={studiesCollection as ResumeStudiesCollection}
        otherStudiesCollection={
          otherStudiesCollection as ResumeOtherStudiesCollection
        }
        t={t}
      />
      <Footer />
    </>
  )
}

export const getResumeStaticProps = async (locale: string) => {
  const { getResume } = getSdk(graphqlClient)
  const data = await getResume({ locale })
  const t = await getI18nDictionary({
    language: LOCALE_LANGUAGE_MAPPINGS[locale],
    namespace: 'common',
  })
  const tr = await getI18nDictionary({
    language: LOCALE_LANGUAGE_MAPPINGS[locale],
    namespace: 'resume',
  })
  return { props: { data, t: { ...t, ...tr } } }
}

export const getStaticProps: GetStaticProps = async () =>
  await getResumeStaticProps('en-US')

export default Resume
