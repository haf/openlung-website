import { FunctionComponent, CSSProperties } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

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
  style
}) => {
  return (
    <div className='layout' style={style}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Nav />

      {children}

      <style global jsx>{`
        * {
          box-sizing: border-box;
        }

        a {
          color: rgb(76, 154, 208);
          text-decoration: none;
        }
        a:hover, a:visited, a:active {
          color: inherit
        }

        .urgent {
          color: rgb(205, 99, 109)
        }

        .urgent-bg {
          background-color: rgb(205, 99, 109)
        }

        .primary {
          color: rgb(76, 154, 208);
        }

        .primary-bg {
          background-color: rgb(76, 154, 208);
        }
      `}</style>

      <style jsx>{`
        .layout > :global(*) {
          margin: 0 0.5rem;
        }
      `}</style>
    </div>
  )
}

export default Layout