import Layout from '../../../components/Layout';
import Link from 'next/link'
import QuickNav from '../../../components/QuickNav';

export default () => (
  <Layout>
    <h1>Start ventilation now (en)</h1>

    <QuickNav>
      <Link href='/en/ventilate-now/experienced'>
        <a className='primary-bg' data-cy='experienced'>
          <h3>I am experienced &rarr;</h3>
          <p>If you are experienced, here are streamlined instructions for you on how to use a ventilator</p>
        </a>
      </Link>

      <Link href='/en/ventilate-now/need-guidance'>
        <a className='primary-bg' data-cy='need-guidance'>
          <h3>I need guidance &rarr;</h3>
          <p>If you need guidance on how to configure and use a ventilator by a professional, or step-by-step instructions</p>
        </a>
      </Link>
    </QuickNav>

  </Layout>
)