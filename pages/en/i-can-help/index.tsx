import Layout from '../../../components/Layout';
import Link from 'next/link';
import QuickNav from '../../../components/QuickNav';

export default () => (
  <Layout>
    <section>
      <h1>I can help page (en)</h1>
    </section>

    <QuickNav>
      <Link href='/en/i-can-help/medical-expertise'>
        <a className='urgent-bg' data-cy='medical-expertise'>
          <h3>Medical expertise &rarr;</h3>
          <p>Be available to answer questions, provide guidance and ensure the ventilator is as safe as possible.</p>
        </a>
      </Link>

      <Link href='/en/i-can-help/mechanical-engineering'>
        <a className='primary-bg' data-cy='mechanical-engineering'>
          <h3>Mechanical engineering expertise &rarr;</h3>
          <p>Can you help us produce ventilators or improve our design?</p>
        </a>
      </Link>

      <Link href='/en/i-can-help/education'>
        <a className='primary-bg' data-cy='education'>
          <h3>Education &rarr;</h3>
          <p>Can you help us produce ventilators or improve our design?</p>
        </a>
      </Link>

      <div className='spacer'>More to come...</div>
    </QuickNav>

  </Layout>
)