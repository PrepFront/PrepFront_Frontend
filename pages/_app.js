import "../styles/globals.css"
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider, QueryClient } from "react-query";
import NoSSR from 'react-no-ssr'
import { ToastContainer } from "react-toast";

const client = new QueryClient()

function App({ Component, pageProps }) {
  return (
    <NoSSR>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
        {
          process.env.NODE_ENV !== 'production' && <ReactQueryDevtools initialIsOpen={false} />
        }
        <ToastContainer/>
      </QueryClientProvider>
    </NoSSR>
  );
}

export default App;

