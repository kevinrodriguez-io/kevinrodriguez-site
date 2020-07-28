import Blog from 'pages/blog/index'
import { ENGLISH, SPANISH } from 'lib/i18n/langs'
import { GetStaticPaths } from 'next'

// export const getStaticPaths: GetStaticPaths<{ lang: string }> = async () => {
//   return {
//     fallback: false,
//     paths: [{ params: { lang: ENGLISH } }, { params: { lang: SPANISH } }],
//   }
// }

export default Blog
