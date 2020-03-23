import React, { useCallback } from 'react'
import Link from 'next/link'

const Nav = () => {
  const navigateBack = useCallback(() => window.history.back(), [])

  return (
    <nav>
      <ul>
        <li>
          <a onClick={navigateBack} className='button primary-bg' data-cy='back'>⏪ Back</a>
        </li>

        <li>
          <Link href="/">
            <a className='primary-bg'>🏡 Home</a>
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
        .button {
          cursor: pointer;
        }
      `}</style>
    </nav>
  )
}

export default Nav
