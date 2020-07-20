import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'

import Typed from 'react-typed'
import { css, cx } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'

import graphqlClient from 'lib/graphql/contentful-client'
import { getSdk, LandingQuery } from 'lib/graphql/contentful-graphql'

import { Nav } from 'components/Nav'
import { Footer } from 'components/Footer'

type LandingProps = {
  data: LandingQuery
}

const ConsoleExample: React.FC<{ qualities: string[] }> = ({ qualities }) => {
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

const Index: NextPage<LandingProps> = ({ data }) => {
  const { briefing, displayName, featuredImage, qualities } = data.landing
  return (
    <>
      <Nav />
      <main
        className={cx(
          css(
            tw`relative bg-gray-50 flex-1 flex flex-col justify-center px-4 sm:px-2`,
          ),
          'dotted-background',
        )}
      >
        <div className={css(tw`text-center`)}>
          <h2
            className={css(
              tw`text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl sm:leading-none md:text-6xl text-gray-900`,
            )}
          >
            {displayName.split(' ')[0]}
            <br className={css(tw`xl:hidden`)} />
            <span>&nbsp;{displayName.split(' ')[1]}</span>
          </h2>
          <p
            className={css(
              tw`mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl`,
            )}
          >
            {briefing}
          </p>
          <div
            className={css(
              tw`mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8`,
            )}
          >
            <div className={css(tw`rounded-md shadow`)}>
              <a
                className={css(
                  tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 shadow-blue-2xl hover:shadow-blue-md`,
                )}
              >
                Go To Blog
              </a>
            </div>
            <div className={css(tw`mt-3 rounded-md shadow sm:mt-0 sm:ml-3`)}>
              <Link href="resume" passHref>
                <a
                  className={css(
                    tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-600 bg-white hover:text-blue-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10`,
                  )}
                >
                  View Resume
                </a>
              </Link>
            </div>
          </div>
          <ConsoleExample qualities={qualities} />
        </div>
      </main>
      <Footer />
      <style jsx global>{`
        /* Other global styles such as 'html, body' etc... */
        #__next {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  )
}

export const getStaticProps: GetStaticProps<LandingProps> = async () => {
  const { landing } = getSdk(graphqlClient)
  const data = await landing({
    locale: 'en-US',
  })
  return {
    props: {
      data,
    },
  }
}

export default Index
