import React from 'react'
import { useState } from 'react'
import { css, cx } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LanguageTogglerButton } from './LanguageTogglerButton'
import { ParsedUrlQuery } from 'querystring'
import { removeTrailingSlash } from 'lib/tools/removeTrailingSlash'

type SiteLink = {
  title: string
  href: string
}

const siteLinks: SiteLink[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Resume',
    href: '/resume',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Open Source',
    href: '/open-source',
  },
]

const getRoutesPrefix = (query: ParsedUrlQuery) =>
  `${query.lang ? `/${query.lang}` : ''}`

const MobileNav: React.FC<{ menuOpen: boolean }> = ({ menuOpen }) => {
  const router = useRouter()
  const routesPrefix = getRoutesPrefix(router.query)
  return (
    <div
      className={cx(
        { [css(tw`hidden`)]: !menuOpen },
        { [css(tw`block`)]: menuOpen },
        css(tw`md:hidden`),
      )}
    >
      <div className={css(tw`pt-2 pb-3`)}>
        {siteLinks.map((siteLink, index) => {
          const prefixedHref = removeTrailingSlash(
            `${routesPrefix}${siteLink.href}`,
          )
          return (
            <Link href={prefixedHref} passHref key={index}>
              <a
                className={cx(
                  { [css(tw`mt-1`)]: index !== 0 },
                  {
                    [css(
                      tw`block pl-3 pr-4 py-2 border-l-4 border-teal-500 text-base font-medium text-teal-700 bg-teal-50 focus:outline-none focus:text-teal-800 focus:bg-teal-100 focus:border-teal-700 transition duration-150 ease-in-out sm:pl-5 sm:pr-6`,
                    )]: router.pathname.toLowerCase() === prefixedHref,
                  },
                  {
                    [css(
                      tw`mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out sm:pl-5 sm:pr-6`,
                    )]: router.pathname.toLowerCase() !== prefixedHref,
                  },
                )}
              >
                {siteLink.title}
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

type MobileButtonProps = JSX.IntrinsicElements['button']

const MobileButton: React.FC<MobileButtonProps> = ({ ...props }) => {
  return (
    <button
      className={css(
        tw`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out`,
      )}
      aria-label="Main menu"
      aria-expanded="false"
      {...props}
    >
      <svg
        className={css(tw`block h-6 w-6`)}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        className={css(tw`hidden h-6 w-6`)}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  )
}

type LargeNavProps = {
  onMenuOpen: () => void
}

const LargeNav: React.FC<LargeNavProps> = ({ onMenuOpen }) => {
  const router = useRouter()
  const routesPrefix = getRoutesPrefix(router.query)
  return (
    <div className={css(tw`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
      <div className={css(tw`flex justify-between h-16`)}>
        <div className={css(tw`flex`)}>
          <div className={css(tw`-ml-2 mr-2 flex items-center md:hidden`)}>
            <MobileButton onClick={onMenuOpen} />
          </div>
          <div className={css(tw`flex-shrink-0 flex items-center`)} />
          <div className={css(tw`hidden md:flex`)}>
            {siteLinks.map((siteLink, index) => {
              const prefixedHref = removeTrailingSlash(
                `${routesPrefix}${siteLink.href}`,
              )
              return (
                <Link href={prefixedHref} passHref key={index}>
                  <a
                    className={cx(
                      { [css(tw`ml-8`)]: index !== 0 },
                      {
                        [css(tw`pt-1 border-b-2 border-teal-500`)]:
                          router.pathname.toLowerCase() === prefixedHref,
                      },
                      css(
                        tw`inline-flex items-center px-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-teal-700 transition duration-150 ease-in-out`,
                      ),
                    )}
                  >
                    {siteLink.title}
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
        <div className={css(tw`flex items-center`)}>
          <div className={css(tw`flex-shrink-0`)}>
            <LanguageTogglerButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className={css(tw`bg-white shadow`)}>
      <LargeNav onMenuOpen={() => setMenuOpen(o => !o)} />
      <MobileNav menuOpen={menuOpen} />
    </nav>
  )
}
