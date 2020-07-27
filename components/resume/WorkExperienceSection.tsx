import React from 'react'
import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import {
  PreviousWork,
  PreviousWorkCollection,
} from 'lib/graphql/contentful-graphql'

import { TimeLineItem } from './TimeLineItem'
import { SectionHeader } from 'components/SectionHeader'

export type WorkExperienceSectionProps = {
  previousWork: PreviousWorkCollection
}

export const WorkExperienceSection: React.FC<WorkExperienceSectionProps> = ({
  previousWork,
}) => {
  return (
    <section className={css(tw`text-gray-700 py-12`)}>
      <div className={css(tw`container px-5 mx-auto flex flex-wrap`)}>
        <SectionHeader>Work Experience</SectionHeader>
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
