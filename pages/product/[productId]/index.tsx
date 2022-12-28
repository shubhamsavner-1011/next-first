import style from '../../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function ProductDetails () {
    const router = useRouter();

    const {productId} = router.query
    return (
        <>
        <div className={style.main}>
            <h2>Product Detail {productId} </h2>
        </div>
        </>
    )
}