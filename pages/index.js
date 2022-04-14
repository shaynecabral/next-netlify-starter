import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dinall</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Header title="COMING SOON!" />
              <p className="description">
          STC MANAGEMENT FOR YOUR FLEET!
          Dinall Aviation provides document services for previously embodied STC's.
          Let us help you on your next aircraft importation! 

          Contact: info@dinallaviation.ca - +1 514 793 1235
        </p>
    
      </main>

      <Footer />
    </div>
  )
}
