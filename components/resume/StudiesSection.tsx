import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import {
  ResumeStudiesCollection,
  ResumeOtherStudiesCollection,
} from 'lib/graphql/contentful-graphql'
import { StudyCard } from './StudyCard'
import { SectionHeader } from 'components/SectionHeader'

type StudiesSectionProps = {
  studiesCollection: ResumeStudiesCollection
  otherStudiesCollection: ResumeOtherStudiesCollection
  t: Record<string, string>
}

export const StudiesSection: React.FC<StudiesSectionProps> = ({
  studiesCollection,
  otherStudiesCollection,
  t
}) => {
  return (
    <section className={css(tw`text-gray-700`)}>
      <div className={css(tw`container px-5 mx-auto`)}>
        <SectionHeader>{t["studies"]}</SectionHeader>
        <div className={css(tw`flex flex-wrap -m-4`)}>
          {studiesCollection.items.map(study => (
            <StudyCard
              key={`${study.institutionName}-${study.degree}`}
              title={study.institutionName}
              category={`From ${(study.from as string).split('-')[0]}`}
            >
              {study.degree}
            </StudyCard>
          ))}
          {otherStudiesCollection.items.map(study => (
            <StudyCard
              key={`${study.institutionName}-${study.title}`}
              title={study.instructor}
              category={study.institutionName}
            >
              {study.title}
            </StudyCard>
          ))}
        </div>
      </div>
    </section>
  )
}
