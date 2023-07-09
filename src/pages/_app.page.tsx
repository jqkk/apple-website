import { Layout } from '@/components/layout';
import GlobalStyles from '@/styles/GlobalStyles';
import theme from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
