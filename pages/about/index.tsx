import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css'
import Image from 'next/image';
import img from '../../public/window.jpg'
import MetaHead from '../../components/Head';
function About () {
    return (
      <>
         <MetaHead title="about" description="ticket-gateway" keywords="Next.js, React.js"/>
        <div className={styles.main}>
        <div className={styles.description}>
          <Navbar/>
         <h1> About Page  </h1>
         <Image src={img} width={800} height={500} alt='windows'/>
        </div>
      </div>
      </>
    )
}

export default About;
