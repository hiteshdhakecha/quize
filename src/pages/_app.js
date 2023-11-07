import '@/styles/globals.css'
import { Rubik } from '@next/font/google'
import Head from 'next/head'
import NewGameForm from '@/components/Form/NewGameForm'
const rubik = Rubik({ subsets: ['latin'] })
export default function App ({ Component, pageProps }) {
	return (
		<>
			<Head>
			<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8466768412585798"
     crossorigin="anonymous"></script>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
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
