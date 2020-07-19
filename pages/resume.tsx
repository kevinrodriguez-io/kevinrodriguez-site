import { NextPage, GetStaticProps } from 'next'
import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'

import graphqlClient from 'lib/graphql/contentful-client'
import { getSdk, ResumeQuery } from 'lib/graphql/contentful-graphql'

import { Nav } from 'components/Nav'
import { Footer } from 'components/Footer'

type ResumeProps = {
  data: ResumeQuery
}

const Resume: NextPage<ResumeProps> = ({ data }) => {
  const { profilePicture, title, subtitle } = data.resume
  return (
    <>
      <Nav />
      {JSON.stringify(data, null, 2)}
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { resume } = getSdk(graphqlClient)
  const data = await resume({
    locale: 'en-US',
  })
  return {
    props: {
      data,
    },
  }
}

export default Resume
