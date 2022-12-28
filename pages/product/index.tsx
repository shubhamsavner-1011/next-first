import Navbar from '../../components/Navbar'
import styles from '../../styles/Home.module.css'


export default function Product () {
    return (
        <>
        <div className={styles.main}>
        <div className={styles.description}>
          <Navbar/>
         <h1> Product Page  </h1>
        </div>
      </div>
        </>
    )
}