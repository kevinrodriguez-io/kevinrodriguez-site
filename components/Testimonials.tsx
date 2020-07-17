import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'

const Testimonials: React.FC = () => {
  return (
    <section className={css(tw`text-gray-700`)}>
      <div className={css(tw`container px-5 py-24 mx-auto`)}>
        <div className={css(tw`flex flex-wrap -m-4`)}>
          <div className={css(tw`lg:w-1/3 lg:mb-0 mb-6 p-4`)}>
            <div className={css(tw`h-full text-center`)}>
              <img
                alt="testimonial"
                className={css(
                  tw`w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100`,
                )}
                src="https://dummyimage.com/302x302"
              />
              <p className={css(tw`leading-relaxed`)}>
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span
                className={css(
                  tw`inline-block h-1 w-10 rounded bg-teal-500 mt-6 mb-4`,
                )}
              ></span>
              <h2
                className={css(
                  tw`text-gray-900 font-medium tracking-wider text-sm`,
                )}
              >
                HOLDEN CAULFIELD
              </h2>
              <p className={css(tw`text-gray-500`)}>Senior Product Designer</p>
            </div>
          </div>
          <div className={css(tw`lg:w-1/3 lg:mb-0 mb-6 p-4`)}>
            <div className={css(tw`h-full text-center`)}>
              <img
                alt="testimonial"
                className={css(
                  tw`w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100`,
                )}
                src="https://dummyimage.com/300x300"
              />
              <p className={css(tw`leading-relaxed`)}>
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span
                className={css(
                  tw`inline-block h-1 w-10 rounded bg-teal-500 mt-6 mb-4`,
                )}
              ></span>
              <h2
                className={css(
                  tw`text-gray-900 font-medium  tracking-wider text-sm`,
                )}
              >
                ALPER KAMU
              </h2>
              <p className={css(tw`text-gray-500`)}>UI Develeoper</p>
            </div>
          </div>
          <div className={css(tw`lg:w-1/3 lg:mb-0 p-4`)}>
            <div className={css(tw`h-full text-center`)}>
              <img
                alt="testimonial"
                className={css(
                  tw`w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100`,
                )}
                src="https://dummyimage.com/305x305"
              />
              <p className={css(tw`leading-relaxed`)}>
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span
                className={css(
                  tw`inline-block h-1 w-10 rounded bg-teal-500 mt-6 mb-4`,
                )}
              ></span>
              <h2
                className={css(
                  tw`text-gray-900 font-medium  tracking-wider text-sm`,
                )}
              >
                HENRY LETHAM
              </h2>
              <p className={css(tw`text-gray-500`)}>CTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Testimonials
