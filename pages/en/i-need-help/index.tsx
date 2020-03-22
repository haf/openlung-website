import Layout from '../../../components/Layout';
import QuickNav from '../../../components/QuickNav';
import Link from 'next/link';

export default () => (
  <Layout>
    <h1>What do you need help with? (en)</h1>

    <QuickNav>
      <Link href='/en/i-need-help/finding-medical-guidance'>
        <a className='urgent-bg'>
          <h3>Medical guidance &rarr;</h3>
          <p>Guidance on how to use a ventilator or find care for a critically ill patient.</p>
        </a>
      </Link>

      <Link href='/en/i-need-help/finding-a-ventilator'>
        <a className='primary-bg'>
          <h3>Finding a ventilator &rarr;</h3>
          <p>How to find a ventilator that someone has built.</p>
        </a>
      </Link>


      <Link href='/en/i-need-help/mechanical-engineering'>
        <a className='primary-bg'>
          <h3>Partner with a maker &rarr;</h3>
          <p>Making a ventilator requires some general equipment. Find someone to help you out.</p>
        </a>
      </Link>

      <Link href='/en/i-need-help/becoming-a-maker'>
        <a className='primary-bg'>
          <h3>Become a maker &rarr;</h3>
          <p>How to level up your skills quickly</p>
        </a>
      </Link>

      <hr className='spacer' />
    </QuickNav>

  </Layout>
)