import Link from 'next/link';
import error from '../styles/Error.module.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
const Error = () => {
    const router = useRouter();

    useEffect(() => {
    setTimeout(()=> (router.push('/')), 3000)
    }, [])
    
  return (
    <div className={error.error}>
        <div className={error.errorDiv}>
        <h2 className={error.heading}> 404 | Sorry ! Page Not Found</h2>
        <button><Link href='/'> Back to Home </Link></button>
        <button onClick={()=> router.push('/')} style={{cursor:'pointer'}}> Back to Home</button>
        </div>
    </div>
  )
}

export default Error;