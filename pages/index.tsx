import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

const Hero = () => (
  <>
    <div className="hero">
      <h1 className="title">OpenLung</h1>
      <p className="description">
        What is your aim today?
      </p>
    </div>

    <style jsx>{`
      .hero {
        color: #333;
      }
    `}</style>
  </>
)

// Docs https://docs.google.com/document/d/1PASe9sHr4ODx-acC9fBW3cc62IMoWSGu1QQY54VQ-RE/edit

const QuickNav = () => (
  <>
    <div className='quick-nav'>
      <Link href='/en/ventilate-now'>
        <a className='urgent-bg'>
          <h3>Ventilate now &rarr;</h3>
          <p>You have an urgent need to help someone who's sick</p>
        </a>
      </Link>

      <Link href='/en/i-need-help'>
        <a className='primary-bg'>
          <h3>I need help &rarr;</h3>
          <p>If you need help building/using the ventilator</p>
        </a>
      </Link>

      <Link href='/en/i-can-help'>
        <a className='primary-bg'>
          <h3>I can help &rarr;</h3>
          <p>If you have skillset or equipment that you think can help</p>
        </a>
      </Link>

      <Link href='/en/COVID-19-resources'>
        <a className='primary-bg'>
          <h3>Resources &rarr;</h3>
          <p>Resources for understanding COVID-19 and building/maintaining ventilators</p>
        </a>
      </Link> 

      <Link href='/en/make-a-ventilator'>
        <a className='primary-bg'>
          <h3>Make a ventilator &rarr;</h3>
          <p>Resources for understanding COVID-19 and building/maintaining ventilators</p>
        </a>
      </Link>
    </div>

    <style jsx>{`
      h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
      }

      h3 {
        margin-bottom: 0.4em;
      }

      .quick-nav {
        display: grid;
      }

      .quick-nav > * {
        border: 1px solid #eee;
        padding: 0.5rem 1rem;
        margin-top: 1rem;
        margin-bottom: 5px;
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

const Home = () => (
  <Layout hideMenu>
    <Hero />
    <QuickNav />
  </Layout>
)

export default Home