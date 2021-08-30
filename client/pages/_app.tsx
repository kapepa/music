import type { AppProps } from 'next/app'
import '../styles/styles.scss'
import { wrapper } from '../store/store';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App);