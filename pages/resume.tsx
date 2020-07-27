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
  PreviousWorkCollection,
  Asset,
  ResumeAboutMe,
  ResumeAvailableTechnologiesCollection,
  ResumeStudiesCollection,
  ResumeOtherStudiesCollection,
} from 'lib/graphql/contentful-graphql'

export type ResumeProps = {
  data: GetResumeQuery
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
      <HeroSection
        profilePicture={profilePicture as Asset}
        aboutMe={aboutMe as ResumeAboutMe}
      />
      <WorkExperienceSection
        previousWork={
          (previousWorkCollection as unknown) as PreviousWorkCollection
        }
      />
      <TechnologiesSection
        availableTechnologiesCollection={
          availableTechnologiesCollection as ResumeAvailableTechnologiesCollection
        }
      />
      <StudiesSection
        studiesCollection={studiesCollection as ResumeStudiesCollection}
        otherStudiesCollection={
          otherStudiesCollection as ResumeOtherStudiesCollection
        }
      />
      <Footer />
    </>
  )
}

export const getResumeStaticProps = async (locale: string) => {
  const { getResume } = getSdk(graphqlClient)
  const data = await getResume({ locale })
  return { props: { data } }
}

export const getStaticProps: GetStaticProps = async () =>
  await getResumeStaticProps('en-US')

export default Resume
