// import 'rsuite/dist/rsuite.min.css';
import '../styles/custom.scss'

import Layout from '../components/layout'
import { SessionProvider } from "next-auth/react"

//Toast
import { ToastContainer } from 'react-toastify';

//React Query
import {QueryClientProvider, QueryClient} from 'react-query'

// Create a client
const queryClient = new QueryClient()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  ;
  return (
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
        <Layout>
            <Component {...pageProps} />
        </Layout>           
        </SessionProvider>
      </QueryClientProvider>
    
  )
}
