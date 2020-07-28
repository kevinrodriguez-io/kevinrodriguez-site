import React from 'react'
import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ENGLISH, SPANISH, LANGUAGE_UI_MAPPINGS } from 'lib/i18n/langs'
import { removeTrailingSlash } from 'lib/tools/removeTrailingSlash'

export const LanguageTogglerButton: React.FC = () => {
  const router = useRouter()
  const lang = router.query.lang as string
  const alternativeLang = !lang || lang === ENGLISH ? SPANISH : ENGLISH

  const href =
    router.route.indexOf('[lang]') > -1
      ? router.route.replace('[lang]', alternativeLang) // Replace existing lang tag
      : `${alternativeLang}/${router.asPath}` // Add lang to route

  return (
    <Link href={removeTrailingSlash(href)}>
      <a
        className={css(
          tw`relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-teal-600 shadow-sm hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition ease-in-out duration-150 shadow-teal-next hover:shadow-teal z-10`,
        )}
      >
        <span>{LANGUAGE_UI_MAPPINGS[alternativeLang]}</span>
      </a>
    </Link>
  )
}
