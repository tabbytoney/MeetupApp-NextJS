import '../styles/globals.css';
import Layout from '../components/layout/Layout';

// Component and pageProps are props used that NextJs passes to MyApp
// Component holds the page content that should be rendered, so it'll be different whenever
// we switch a page
// pageProps are specific props the pages may be getting
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
