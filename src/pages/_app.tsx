import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
    }} className='dark'>
      <Component {...pageProps} />
    </div>
  )
}
