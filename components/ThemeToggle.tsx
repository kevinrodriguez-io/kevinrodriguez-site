import { css, cx } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'

type ThemeToggleProps = {
  checked: boolean
  onToggle: (value: boolean) => void
}

export const ThemeTogle: React.FC<ThemeToggleProps> = ({
  checked,
  onToggle,
}) => {
  return (
    <span
      onClick={() => onToggle(!checked)}
      role="checkbox"
      tabIndex={0}
      aria-checked="false"
      className={cx(
        css(
          tw`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`,
        ),
        { [css(tw`bg-indigo-600`)]: checked },
        { [css(tw`bg-gray-200`)]: !checked },
      )}
    >
      <span
        aria-hidden="true"
        className={cx(
          css(
            tw`inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`,
          ),
          { [css(tw`translate-x-5`)]: checked },
          { [css(tw`translate-x-0`)]: !checked },
        )}
      ></span>
    </span>
  )
}
