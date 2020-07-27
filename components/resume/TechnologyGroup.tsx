import React from 'react'
import { motion } from 'framer-motion'
import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import { AvailableTechnology } from 'lib/graphql/contentful-graphql'
import { useInView } from 'react-intersection-observer'
import { APPEAR_TRANSITION_TIME } from 'lib/variables'

type TechnologyGroupProps = {
  category: string
  technologies: AvailableTechnology[]
}

export const TechnologyGroup: React.FC<TechnologyGroupProps> = ({
  category,
  technologies,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })
  return (
    <motion.div
      ref={ref}
      className={css(tw`p-4 lg:w-1/4 sm:w-1/2 w-full`)}
      animate={{
        opacity: inView ? 1 : 0,
      }}
      transition={{ duration: APPEAR_TRANSITION_TIME }}
    >
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
    </motion.div>
  )
}
