import React from 'react'
import Layout from '../components/Layout'

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
      <a href='/en/ventilate-now'>
        <h3>Ventilate now &rarr;</h3>
        <p>You have an urgent need to help someone who's sick</p>
      </a>

      <a href='/en/i-need-help'>
        <h3>I can help &rarr;</h3>
        <p>If you have skillset or equipment that you think can help</p>
      </a>

      <a href="/en/COVID-19-resources">
        <h3>Resources &rarr;</h3>
        <p>Resources for understanding COVID-19 and building/maintaining ventilators</p>
      </a>

      <a href="/en/make-a-ventilator">
        <h3>Make a ventilator &rarr;</h3>
        <p>Resources for understanding COVID-19 and building/maintaining ventilators</p>
      </a>
    </div>

    <style jsx>{`
      h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
      }

      .quick-nav {
        max-width: 880px;
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
  <Layout>
    <Hero />
    <QuickNav />
  </Layout>
)

export default Home