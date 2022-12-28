import MetaHead from '../components/Head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
     <MetaHead title="Ticket-gateway" description="ticket-gateway" keywords="Next.js, React.js"/>
      <div className={styles.main}>
        <div className={styles.description}>
          <Navbar/>
         <h1> Next Js is framework of react </h1>
        </div>
      </div>
    </>
  )
}
