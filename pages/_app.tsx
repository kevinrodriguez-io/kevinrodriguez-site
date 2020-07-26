import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/base.css'
import '../styles/main.css'

const SiteApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Kevin Rodriguez Site</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default SiteApp
