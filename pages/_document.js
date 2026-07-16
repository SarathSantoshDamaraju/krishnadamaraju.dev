import Document, { Html, Head, Main, NextScript } from "next/document";
import BLOG from "@/blog.config";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/feed" />
          <link rel="alternate" type="application/atom+xml" title="Atom 1.0" href="/atom" />
          <link rel="alternate" type="application/json" title="JSON Feed" href="/feed.json" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.0/css/all.min.css" />
          {BLOG.analytics && BLOG.analytics.provider === 'ga' && BLOG.analytics.gaConfig.measurementId && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${BLOG.analytics.gaConfig.measurementId}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${BLOG.analytics.gaConfig.measurementId}');
              `
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
