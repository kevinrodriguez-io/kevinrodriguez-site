import React from 'react'
import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import { ResumeAvailableTechnologiesCollection } from 'lib/graphql/contentful-graphql'
import { sortWithKeyRetrieverDescending } from 'lib/tools/sortBy'
import { groupBy } from 'lib/tools/groupBy'
import { SectionHeader } from 'components/SectionHeader'
import { TechnologyGroup } from './TechnologyGroup'

type TechnologiesSectionProps = {
  availableTechnologiesCollection: ResumeAvailableTechnologiesCollection
}

export const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({
  availableTechnologiesCollection,
}) => {
  const groupedTechnologies = sortWithKeyRetrieverDescending(
    Object.entries(
      groupBy(availableTechnologiesCollection.items, i => i.category),
    ),
    ([, value]) => value.length,
  )
  return (
    <section className={css(tw`text-gray-700 py-12`)}>
      <div className={css(tw`container px-5 mx-auto`)}>
        <SectionHeader>Technology Proficiency</SectionHeader>
        <div className={css(tw`flex flex-wrap -m-4`)}>
          {groupedTechnologies.map(([category, technologies]) => (
            <TechnologyGroup category={category} technologies={technologies} key={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
