import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'src/styles/globals';
import '../src/styles/globals.css';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={{ fontFamily: 'Noto Sans KR' }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
