import { ReactNode } from 'react'

export type QuickNavProps = Readonly<{
  children?: ReactNode;
}>

// Docs https://docs.google.com/document/d/1PASe9sHr4ODx-acC9fBW3cc62IMoWSGu1QQY54VQ-RE/edit

export default function QuickNav({ children }: QuickNavProps) {
  return (
    <>
      <div className='quick-nav'>
        {children}
      </div>

      <style jsx>{`
        .quick-nav :global(h1),
        .quick-nav :global(h2),
        .quick-nav :global(h3),
        .quick-nav :global(h4),
        .quick-nav :global(h5),
        .quick-nav :global(h6),
        .quick-nav :global(p) {
          margin: 0;
          padding: 0;
        }

        .quick-nav :global(h3) {
          margin-bottom: 0.4em;
        }

        .quick-nav {
          display: grid;
        }

        .quick-nav :global(> *) {
          border: 1px solid #eee;
          padding: 0.5rem 1rem;
          margin: 10px 0 0;
        }

        .quick-nav :global(> .spacer) {
          border: none;
        }

        @media (min-width: 30em) {
          .quick-nav {
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 1em;
          }
        }
      `}</style>
    </>
  )
}