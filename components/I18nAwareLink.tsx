import React from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { removeTrailingSlash } from 'lib/tools/removeTrailingSlash'

const getRoutesPrefix = (query: ParsedUrlQuery) =>
  `${query.lang ? `/${query.lang}` : ''}`

export const I18nAwareLink: React.FC<LinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter()
  const routesPrefix = getRoutesPrefix(router.query)
  const hrefToUse = removeTrailingSlash(`${routesPrefix}${href}`)
  return (
    <Link {...props} href={hrefToUse}>
      {children}
    </Link>
  )
}
