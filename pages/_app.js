import '../styles/globals.css';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const a = 'sdfsdfjsdlfjsdflksjdfl';
  const [number, setNumber] = useState(0);

  const test = props => {
    const b = '23423';
    return a + b;
  };

  useEffect(() => {}, []);
  return <Component {...pageProps} />;
}

export default MyApp;
