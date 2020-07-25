import React from 'react'
import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Asset, ResumeAboutMe } from 'lib/graphql/contentful-graphql'

type HeroProps = {
  aboutMe: ResumeAboutMe
  profilePicture: Asset
}

export const Hero: React.FC<HeroProps> = ({ aboutMe, profilePicture }) => {
  return (
    <section className={css(tw`relative bg-white overflow-hidden`)}>
      <div className={css(tw`hidden lg:block lg:absolute lg:inset-0`)}>
        <svg
          className={css(
            tw`absolute top-0 left-1/2 transform translate-x-64 -translate-y-8`,
          )}
          width="640"
          height="784"
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x="118"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className={css(tw`text-gray-200`)}
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            y="72"
            width="640"
            height="640"
            className={css(tw`text-gray-50`)}
            fill="currentColor"
          />
          <rect
            x="118"
            width="404"
            height="784"
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
          />
        </svg>
      </div>
      <div className={css(tw`relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32`)}>
        <div
          className={css(
            tw`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`,
          )}
        >
          <div className={css(tw`rounded-lg shadow-md`)}></div>
        </div>
        <main
          className={css(
            tw`mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24`,
          )}
        >
          <div className={css(tw`lg:grid lg:grid-cols-12 lg:gap-8`)}>
            <div
              className={css(
                tw`sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left`,
              )}
            >
              <h2
                className={css(
                  tw`mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl`,
                )}
              >
                Kevin Rodriguez
                <br className={css(tw`hidden md:inline`)} />
                <span className={css(tw`text-teal-600`)}>
                  <span className={css(tw`md:hidden`)}>&nbsp;</span>About
                </span>
              </h2>
              <p className={css(tw`mt-3 text-gray-500 sm:mt-5 text-base`)}>
                {documentToReactComponents(aboutMe.json)}
              </p>
              <div
                className={css(
                  tw`mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0`,
                )}
              >
                <p className={css(tw`text-base font-medium text-gray-900`)}>
                  Let's get in touch
                </p>
                <form
                  action="#"
                  method="POST"
                  className={css(tw`mt-3 sm:flex`)}
                >
                  <input
                    aria-label="Email"
                    className={css(
                      tw`appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1`,
                    )}
                    placeholder="email@example.com"
                  />
                  <button
                    type="submit"
                    className={css(
                      tw`mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-800 shadow-sm hover:bg-teal-700 focus:outline-none focus:border-teal-900 focus:shadow-outline-teal active:bg-teal-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto shadow-teal-md-full hover:shadow-teal-md`,
                    )}
                  >
                    Submit
                  </button>
                </form>
                <p className={css(tw`mt-3 text-sm leading-5 text-gray-500`)}>
                  Don't worry, your data is only yours.
                </p>
              </div>
            </div>
            <div
              className={css(
                tw`mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center`,
              )}
            >
              <svg
                className={css(
                  tw`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden`,
                )}
                width="640"
                height="784"
                fill="none"
                viewBox="0 0 640 784"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x="118"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className={css(tw`text-gray-200`)}
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  y="72"
                  width="640"
                  height="640"
                  className={css(tw`text-gray-50`)}
                  fill="currentColor"
                />
                <rect
                  x="118"
                  width="404"
                  height="784"
                  fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                />
              </svg>
              <div
                className={css(
                  tw`relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md`,
                )}
              >
                <div
                  className={css(
                    tw`relative block w-full rounded-lg overflow-hidden`,
                  )}
                >
                  <img
                    className={css(tw`w-full`)}
                    src={profilePicture.url}
                    alt={profilePicture.description}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}