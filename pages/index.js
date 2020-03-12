import Head from 'next/head';
import App from '../src/components/App/App';
import { TextStyle, Page, Layout, EmptyState } from '@shopify/polaris';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

function IndexPage() {
  return (
    <Page>
      <Head>
        <title>My page title</title>
      </Head>
      <Layout>
        <TextStyle variation="positive">Sample app using React and Next.js</TextStyle>
        <EmptyState
          heading="Discount your products temporarily"
          action={{
            content: 'Select products',
            onAction: () => console.log('clicked'),
          }}
          image={img}
        >
          <p>Select products to change their price temporarily.</p>
        </EmptyState>
      </Layout>
      <App />
    </Page>
  );
}

export default IndexPage;
