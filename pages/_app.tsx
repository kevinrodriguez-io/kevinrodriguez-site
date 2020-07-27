import Head from 'next/head'
import { AppProps } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import { useRouter } from 'next/router'
import '../styles/base.css'
import '../styles/main.css'

const SiteApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Kevin Rodriguez</title>
      </Head>
      <PageTransition timeout={300} classNames="page-transition">
        <Component {...pageProps} key={router.route} />
      </PageTransition>
    </>
  )
}

export default SiteApp
