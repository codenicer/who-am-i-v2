import '../styles/globals.scss'
import DoneLaoadingProvider from '../provider/DoneLoadingContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DoneLaoadingProvider>
        <Component {...pageProps} />
      </DoneLaoadingProvider>
    </>
  )
}

export default MyApp
