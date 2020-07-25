import React from 'react'
import { css, cx } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { PreviousWork } from 'lib/graphql/contentful-graphql'

export type TimeLineItemProps = {
  previousWorkItem: PreviousWork
}

export const TimeLineItem: React.FC<TimeLineItemProps> = ({
  previousWorkItem,
}) => {
  return (
    <div
      className={css(
        tw`flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto`,
      )}
    >
      <div
        className={css(
          tw`h-full w-6 absolute inset-0 flex items-center justify-center`,
        )}
      >
        <div className={css(tw`h-full w-1 bg-gray-200 pointer-events-none`)} />
      </div>
      <div
        className={cx(
          css(
            tw`flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-teal-500 text-white relative z-10 font-medium text-xs`,
          ),
        )}
      >
        {new Date(previousWorkItem.from).getFullYear().toString().substr(2)}
      </div>
      <div
        className={css(
          tw`flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row`,
        )}
      >
        <div className={css(tw`flex-grow sm:pl-6 mt-6 sm:mt-0`)}>
          <h2 className={css(tw`font-medium text-gray-900 mb-1 text-xl`)}>
            {previousWorkItem.jobTitle}
            <span className={css(tw`text-gray-500 font-hairline`)}>
              &nbsp;|&nbsp;
              <span className={css(tw`font-light`)}>
                {previousWorkItem.companyName}
              </span>
            </span>
          </h2>
          <div className={css(tw`leading-relaxed`)}>
            {documentToReactComponents(previousWorkItem.responsibilities.json)}
          </div>
        </div>
      </div>
    </div>
  )
}
