import React from 'react'
import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import {
  PreviousWork,
  PreviousWorkCollection,
} from 'lib/graphql/contentful-graphql'

import { TimeLineItem } from './TimeLineItem'

export type WorkExperienceTimeLineProps = {
  previousWork: PreviousWorkCollection
}

export const WorkExperienceTimeLine: React.FC<WorkExperienceTimeLineProps> = ({
  previousWork,
}) => {
  let counter = previousWork.items.length + 1
  return (
    <section className={css(tw`text-gray-700`)}>
      <div className={css(tw`container px-5 mx-auto flex flex-wrap`)}>
        <h2
          className={css(
            tw`mt-5 md:mt-0 mb-5 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl`,
          )}
        >
          Work Experience
        </h2>
        {previousWork.items.map((previousWorkItem, i) => {
          counter--
          return (
            <TimeLineItem
              key={i}
              index={counter}
              previousWorkItem={previousWorkItem as PreviousWork}
            />
          )
        })}
      </div>
    </section>
  )
}
