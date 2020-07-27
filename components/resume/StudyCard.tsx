import React from 'react'
import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { APPEAR_TRANSITION_TIME } from 'lib/variables'

type StudyCardProps = {
  title: string
  category: string
}
export const StudyCard: React.FC<StudyCardProps> = ({
  title,
  category,
  children,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })
  return (
    <motion.div
      ref={ref}
      className={css(tw`p-4 w-full sm:w-1/2 lg:w-1/3`)}
      animate={{
        opacity: inView ? 1 : 0,
      }}
      transition={{ duration: APPEAR_TRANSITION_TIME }}
    >
      <div
        className={css(
          tw`h-full bg-gray-200 px-8 py-16 rounded-lg overflow-hidden text-center relative`,
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
    </motion.div>
  )
}
