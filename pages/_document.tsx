import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'

import { extractCritical } from '@emotion/server'
import { RenderPageResult } from 'next/dist/next-server/lib/utils'
import { EmotionCritical } from '@emotion/server/types/create-instance'

type SiteDocumentProps = DocumentInitialProps &
  RenderPageResult &
  EmotionCritical & {
    lang: string
  }

export default class SiteDocument extends Document<SiteDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    console.log(ctx)
    const { lang } = (ctx.query as any) ?? 'en'
    const initialProps = await Document.getInitialProps(ctx)
    const page = await ctx.renderPage()
    const styles = extractCritical(page.html)
    return { ...initialProps, ...page, ...styles, lang }
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head>
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
