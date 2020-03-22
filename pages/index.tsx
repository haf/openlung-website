import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import QuickNav from '../components/QuickNav'

// TODO: provide drop-down for the other projects?
// TODO: do we port the remainder of the page here?

const Home = () => (
  <Layout hideMenu>

    <section>
      <h1>Open Field Ventilator / OpenLung</h1>
      <p className="description">What is your aim today?</p>
      {/* TODO: language switcher */}
    </section>

    <QuickNav>
      <Link href='/en/ventilate-now'>
        <a className='urgent-bg'>
          <h3>Ventilate now &rarr;</h3>
          <p>You have an urgent need to help someone who's sick</p>
        </a>
      </Link>

      <Link href='/en/i-need-help'>
        <a className='primary-bg'>
          <h3>I NEED help &rarr;</h3>
          <p>If you need help building/using the ventilator</p>
        </a>
      </Link>

      <Link href='/en/i-can-help'>
        <a className='primary-bg'>
          <h3>I CAN help &rarr;</h3>
          <p>If you have skillset or equipment that you think can help</p>
        </a>
      </Link>

      <hr className='spacer'/>

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
    </QuickNav>
  </Layout>
)

export default Home