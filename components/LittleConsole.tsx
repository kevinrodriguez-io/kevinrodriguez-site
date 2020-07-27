import React from 'react'
import Typed from 'react-typed'
import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'

type LittleConsoleProps = {
  qualities: string[]
}

export const LittleConsole: React.FC<LittleConsoleProps> = ({ qualities }) => {
  return (
    <p
      className={css(
        tw`font-mono shadow-2xl mt-5 md:mt-8 max-w-full rounded-md pl-6 py-4 bg-gray-900 mx-auto text-base text-gray-200 sm:text-lg md:text-xl md:max-w-3xl text-left w-96`,
      )}
    >
      $&nbsp;
      <Typed
        loop
        typeSpeed={50}
        backSpeed={0}
        strings={qualities.map(q => q.toLowerCase())}
        backDelay={1500}
        loopCount={0}
        showCursor
        cursorChar="_"
      />
    </p>
  )
}
