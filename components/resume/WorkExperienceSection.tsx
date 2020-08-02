import React from 'react'
import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import {
  PreviousWork,
  ResumePreviousWorkCollection,
} from 'lib/graphql/contentful-graphql'

import { TimeLineItem } from './TimeLineItem'
import { SectionHeader } from 'components/SectionHeader'

export type WorkExperienceSectionProps = {
  previousWork: ResumePreviousWorkCollection
  t: Record<string, string>
}

export const WorkExperienceSection: React.FC<WorkExperienceSectionProps> = ({
  previousWork,
  t,
}) => {
  return (
    <section className={css(tw`text-gray-700 py-12`)}>
      <div className={css(tw`container px-5 mx-auto flex flex-wrap`)}>
        <SectionHeader>{t["workExperience"]}</SectionHeader>
        {previousWork.items.map((previousWorkItem, i) => {
          return (
            <TimeLineItem
              key={i}
              previousWorkItem={previousWorkItem as PreviousWork}
            />
          )
        })}
      </div>
    </section>
  )
}
