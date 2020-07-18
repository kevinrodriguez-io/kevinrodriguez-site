const defaultTheme = require('tailwindcss/defaultTheme')

/**
 * @param {string} name 
 * @param {string} rgb 
 */
const makeShadow = (name, rgb) => ({
  [`${name}-xs`]: `0 0 0 1px rgba(${rgb}, 0.05)`,
  [`${name}-sm`]: `0 1px 2px 0 rgba(${rgb}, 0.05)`,
  [name]: `0 1px 3px 0 rgba(${rgb}, 0.1), 0 1px 2px 0 rgba(${rgb}, 0.06)`,
  [`${name}-md`]: `0 4px 6px -1px rgba(${rgb}, 0.1), 0 2px 4px -1px rgba(${rgb}, 0.06)`,
  [`${name}-lg`]: `0 10px 15px -3px rgba(${rgb}, 0.1), 0 4px 6px -2px rgba(${rgb}, 0.05)`,
  [`${name}-xl`]: `0 20px 25px -5px rgba(${rgb}, 0.1), 0 10px 10px -5px rgba(${rgb}, 0.04)`,
  [`${name}-2xl`]: `0 25px 50px -12px rgba(${rgb}, 0.25)`,
  [`${name}-inner`]: `inset 0 2px 4px 0 rgba(${rgb}, 0.06)`,
})

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        ...makeShadow('cool-gray', '71, 85, 104'),
        ...makeShadow('gray', '75, 85, 98'),
        ...makeShadow('red', '223, 39, 44'),
        ...makeShadow('orange', '207, 57, 24'),
        ...makeShadow('yellow', '158, 88, 28'),
        ...makeShadow('green', '16, 122, 87'),
        ...makeShadow('teal', '13, 116, 128'),
        ...makeShadow('blue', '29, 100, 236'),
        ...makeShadow('indigo', '87, 81, 230'),
        ...makeShadow('purple', '125, 59, 236'),
        ...makeShadow('pink', '213, 34, 105'),
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}
