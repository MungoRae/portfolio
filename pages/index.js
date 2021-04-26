import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Me from '../sections/1_Me'
import PortfolioAppBar from '../components/PortfolioAppBar'
import Portfolio from '../sections/2_Portfolio'
import AlwaysLearning from '../sections/3_AlwaysLearning'
import About from '../sections/4_About'
import Contact from '../sections/5_ContactUs'
import Footer from '../sections/6_Footer'
import Copyright from '../sections/7_Copyright'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PortfolioAppBar menuItems={["Portfolio", "About", "Contact"]} />
      <Me />
      <Portfolio />
      <AlwaysLearning />
      <About />
      <Contact/>
      <Footer />
      <Copyright />
    </div>
  )
}
