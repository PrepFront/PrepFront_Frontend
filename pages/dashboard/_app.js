
import { Poppins } from "@next/font/google";

import "../../styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
})

import { NextUIProvider } from '@nextui-org/react';

function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default App;