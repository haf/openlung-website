import { FunctionComponent, CSSProperties } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import { primary, urgent } from './colours'

export type LayoutProps = Readonly<{
  title?: string;
  children?: React.ReactNode;
  language?: string;
  style?: CSSProperties;
  hideMenu?: boolean;
}>

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  title = `OpenLung Knowledge App`,
  style,
  hideMenu
}) => {
  return (
    <div className='layout' style={style}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
        .layout :global(> *) {
          margin: 0 0.5rem;
        }
      `}</style>
    </div>
  )
}

export default Layout