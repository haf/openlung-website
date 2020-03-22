import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a className='primary-bg'>⏪ Back</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 0;
      }
      li {
        display: flex;
      }
      li a {
        padding: 6px 8px;
      }
    `}</style>
  </nav>
)

export default Nav
