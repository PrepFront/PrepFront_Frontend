import { NextUIProvider } from '@nextui-org/react';
import "../styles/globals.css"

function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default App;