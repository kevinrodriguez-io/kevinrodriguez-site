import { NextPage, GetStaticProps } from 'next'
import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import Header from 'components/Header'
import Footer from 'components/Footer'

import graphqlClient from 'lib/graphql/contentful-client'
import { getSdk, LandingQuery } from 'lib/graphql/contentful-graphql'

type LandingProps = {
  data: LandingQuery
}

const Index: NextPage<LandingProps> = ({ data }) => {
  const { briefing, displayName, featuredImage, qualities } = data.landing
  return (
    <>
      <Header />
      <section className={css(tw`text-gray-500 bg-gray-900 fixed h-full left-0 right-0 top-0 bottom-0`)}>
        <div
          className={css(
            tw`container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-full`,
          )}
        >
          <div
            className={css(
              tw`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10`,
            )}
          >
            <img
              className={css(tw`object-cover object-center rounded`)}
              alt="hero"
              src="https://dummyimage.com/720x600/4ed"
            />
          </div>
          <div
            className={css(
              tw`lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center`,
            )}
          >
            <h1
              className={css(
                tw`sm:text-4xl text-3xl mb-4 font-medium text-white`,
              )}
            >
              {displayName}
            </h1>
            <p className={css(tw`mb-8 leading-relaxed`)}>{briefing}</p>
            <div className={css(tw`flex justify-center`)}>
              <button
                className={css(
                  tw`inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg`,
                )}
              >
                View Resume
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
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
