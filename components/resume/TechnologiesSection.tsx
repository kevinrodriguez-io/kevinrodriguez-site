import React from 'react'
import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import { ResumeAvailableTechnologiesCollection } from 'lib/graphql/contentful-graphql'
import { sortWithKeyRetrieverDescending } from 'lib/tools/sortBy'
import { groupBy } from 'lib/tools/groupBy'

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
              <div key={category} className={css(tw`p-4 lg:w-1/4 sm:w-1/2 w-full`)}>
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
                    <span key={`${category}-${name}`} className={css(tw`mb-2`)}>
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
  )
}
