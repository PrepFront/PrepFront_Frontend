import "../styles/globals.css"
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient()

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
      {
        process.env.NODE_ENV !== 'production' && <ReactQueryDevtools initialIsOpen={false} />
      }
    </QueryClientProvider>
  );
}

export default App;