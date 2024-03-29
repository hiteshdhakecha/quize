import '@/styles/globals.css'
import { Rubik } from '@next/font/google'
import Head from 'next/head'
import NewGameForm from '@/components/Form/NewGameForm'
const rubik = Rubik({ subsets: ['latin'] })
import Script from 'next/script'

export default function App ({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
// _app.js
<Script
  id="adsbygoogle-init"
  strategy="afterInteractive"
  crossOrigin="anonymous"
  src= "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8999391147514345"
/>
			</Head>
			<Component {...pageProps} />
			<NewGameForm />
			<style jsx global>{`
        html {
          font-family: ${rubik.style.fontFamily};
        }
      `}</style>
		</>
	)
}
