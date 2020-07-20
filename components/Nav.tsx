import { useState } from 'react'
import { css, cx } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import { ThemeTogle } from './ThemeToggle'

const MobileNav: React.FC<{ menuOpen: boolean }> = ({ menuOpen }) => {
  return (
    <div
      className={cx(
        { [css(tw`hidden`)]: !menuOpen },
        { [css(tw`block`)]: menuOpen },
        css(tw`md:hidden`),
      )}
    >
      <div className={css(tw`pt-2 pb-3`)}>
        <a
          href="#"
          className={css(
            tw`block pl-3 pr-4 py-2 border-l-4 border-teal-500 text-base font-medium text-teal-700 bg-teal-50 focus:outline-none focus:text-teal-800 focus:bg-teal-100 focus:border-teal-700 transition duration-150 ease-in-out sm:pl-5 sm:pr-6`,
          )}
        >
          Resume
        </a>
        <a
          href="#"
          className={css(
            tw`mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out sm:pl-5 sm:pr-6`,
          )}
        >
          Blog
        </a>
        <a
          href="#"
          className={css(
            tw`mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out sm:pl-5 sm:pr-6`,
          )}
        >
          Open Source
        </a>
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
      {/* Icon when menu is closed. */}
      {/* Menu open: "hidden", Menu closed: "block" */}
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
      {/* Icon when menu is open. */}
      {/* Menu open: "block", Menu closed: "hidden" */}
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
  menuOpen: boolean
  onMenuOpen: () => void
}

const LargeNav: React.FC<LargeNavProps> = ({ menuOpen, onMenuOpen }) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div className={css(tw`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
      <div className={css(tw`flex justify-between h-16`)}>
        <div className={css(tw`flex`)}>
          <div className={css(tw`-ml-2 mr-2 flex items-center md:hidden`)}>
            {/* Mobile menu button */}
            <MobileButton onClick={onMenuOpen} />
          </div>
          <div className={css(tw`flex-shrink-0 flex items-center`)} />
          <div className={css(tw`hidden md:ml-6 md:flex`)}>
            <a
              href="#"
              className={css(
                tw`inline-flex items-center px-1 pt-1 border-b-2 border-teal-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-teal-700 transition duration-150 ease-in-out`,
              )}
            >
              Resume
            </a>
            <a
              href="#"
              className={css(
                tw`ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out`,
              )}
            >
              Blog
            </a>
            <a
              href="#"
              className={css(
                tw`ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out`,
              )}
            >
              Open Source
            </a>
          </div>
        </div>
        <div className={css(tw`flex items-center`)}>
          <div className={css(tw`flex-shrink-0`)}>
            <button
              type="button"
              className={css(
                tw`relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-teal-600 shadow-sm hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition ease-in-out duration-150 shadow-teal-next hover:shadow-teal z-10`,
              )}
            >
              <span>Español</span>
            </button>
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
      <LargeNav menuOpen={menuOpen} onMenuOpen={() => setMenuOpen(o => !o)} />
      {/* Mobile menu, toggle classes based on menu state. Menu open: "block", Menu closed: "hidden"*/}
      <MobileNav menuOpen={menuOpen} />
    </nav>
  )
}
