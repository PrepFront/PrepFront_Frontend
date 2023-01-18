import { NextUIProvider } from '@nextui-org/react';
import { useSSR } from "@nextui-org/react";

function App({ Component, pageProps }) {
  const SSR = useSSR()
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default App;