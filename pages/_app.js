import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/swiper-bundle.css";
// import '../styles/globals.css'
// import '../styles/loading.css'
import Router from 'next/router';
import Head from "next/head";

if (typeof window !== "undefined") {
  require('jquery');
  require('popper.js');
  require('bootstrap');

}

function AppMeta() {
  
  return (
    <div>
      
      <Head>
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <title>RFID</title>
      </Head>
    </div>
  )
}

function MyApp({ Component, pageProps }) {
  
  return (
      <div>
        <AppMeta/>
        <Component {...pageProps} />
      </div>
  )

}

export default MyApp;
