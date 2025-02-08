import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Main from '../componets/Main';
import Footer from '../componets/Footer';
import Loader from '../componets/Loader';
import { doneLoadingState } from '../provider/DoneLoadingContext';

export default function Home() {
  const doneState = doneLoadingState();
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Code Nicer | Web Developer</title>
        <meta
          name='description'
          content="Code nicer, a full stack web developer. Do you have an idea? Let's build your idea now, my inbox is always open."
        />
        {/* <meta name="keywords" content="@yield('meta_keywords', $seosetting->keyword)"> */}
        {/* <meta name="author" content="{{ $seosetting->author }}"> */}
        {/* <meta name="sitemap_link" content="{{ $seosetting->sitemap_link }}"></meta> */}
        <meta property='og:image' content='/nicer-og-image.png' />
        <meta
          property='og:image:alt'
          content='Code Nicer | Full Stack Web Developer'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      {!doneState ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <Main />
          <Footer />
        </div>
      )}
    </>
  );
}
