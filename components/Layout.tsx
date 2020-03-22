import { FunctionComponent, CSSProperties } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import { primary, urgent } from './colours'

export type LayoutProps = Readonly<{
  title?: string;
  description?: string;
  keywords?: string;
  children?: React.ReactNode;
  language?: string;
  style?: CSSProperties;
  hideMenu?: boolean;
}>

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  title = `OpenLung Knowledge App`,
  description,
  keywords,
  style,
  hideMenu
}) => {
  return (
    <div className='layout' style={style}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1' />
        {description && <meta name='description' content={description} />}
        {keywords && <meta name='keywords' content={keywords} />}

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/apple-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/images/android-icon-192x192.png"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#2b6c22"/>
      </Head>

      {hideMenu ? null : <Nav />}

      {children}

      <style global jsx>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
        }

        a {
          color: rgb(76, 154, 208);
          text-decoration: none;
        }

        .urgent {
          color: ${urgent}
        }

        .urgent-bg {
          color: white;
          background-color: ${urgent}
        }

        .primary {
          color: ${primary};
        }

        .primary-bg {
          color: white;
          background-color: ${primary};
        }
      `}</style>

      <style jsx>{`
        .layout {
          margin: 0 auto;
          max-width: 60em;
        }
        .layout :global(> *) {
          margin: 0 0.5rem;
        }
      `}</style>
    </div>
  )
}

export default Layout