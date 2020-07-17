import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'

type HeaderProps = {
  fixed?: boolean
}

const Header: React.FC<HeaderProps> = ({ fixed = false }) => {
  return (
    <header
      className={css(
        tw`text-gray-500 bg-gray-900 fixed left-0 right-0 top-0 z-10`,
      )}
    >
      <div
        className={css(
          tw`container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center`,
        )}
      >
        <nav
          className={css(
            tw`flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto`,
          )}
        >
          <a className={css(tw`mr-5 hover:text-white`)}>Resume</a>
          <a className={css(tw`mr-5 hover:text-white`)}>Blog</a>
        </nav>
        <a
          className={css(
            tw`flex order-first lg:order-none lg:w-1/5 font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0`,
          )}
        >Header</a>
        <div
          className={css(tw`lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0`)}
        >
          <button
            className={css(
              tw`inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0`,
            )}
          >
            Switch to Spanish 🇪🇸
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
