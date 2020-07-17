import { GraphQLClient } from 'graphql-request'

export default new GraphQLClient(
  'https://graphql.contentful.com/content/v1/spaces/q25vrbd3wsbu',
  {
    headers: {
      Authorization:
        'Bearer 76aa8a55ad7a96e58e6d092eb478373373ca836523f90b824782d3e2892d726f',
    },
  },
)
