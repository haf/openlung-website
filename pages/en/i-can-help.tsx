import Layout from '../../components/Layout';
import Link from 'next/link';
import QuickNav from '../../components/QuickNav';

export default () => (
  <Layout>
    <section>
      <h1>I can help page (en)</h1>
    </section>

    <QuickNav>
      <Link href='/en/i-can-help/medical-expertise'>
        <a className='urgent-bg'>
          <h3>Medical expertise &rarr;</h3>
          <p>Volunteer</p>
        </a>
      </Link>

      <Link href='/en/i-can-help/mechanical-engineering'>
        <a className='primary-bg'>
          <h3>Mechanical engineering expertise &rarr;</h3>
          <p>Can you help us produce ventilators or improve our design?</p>
        </a>
      </Link>

      <Link href='/en/i-can-help/communications'>
        <a className='primary-bg'>
          <h3>Translations and copywriting &rarr;</h3>
          <p>Can you help us produce ventilators or improve our design?</p>
        </a>
      </Link>

    </QuickNav>

  </Layout>
)