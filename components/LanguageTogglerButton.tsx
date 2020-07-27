import React from 'react'
import { css, cx } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'

export const LanguageTogglerButton: React.FC = () => {
  return (
    <button
      type="button"
      className={css(
        tw`relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-teal-600 shadow-sm hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition ease-in-out duration-150 shadow-teal-next hover:shadow-teal z-10`,
      )}
    >
      <span>Español</span>
    </button>
  )
}
