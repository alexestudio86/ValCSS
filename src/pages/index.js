import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageHeader from '../components/HomepageHeader';
import '..css/valCSS.min.css';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Framework de CSS creado con amor">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
