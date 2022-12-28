import style from '../../../../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function ReviewDetails () {
    const router = useRouter();

    const {productId, reviewId} = router.query
    return (
        <>
        <div className={style.main}>
            <h2>Review {reviewId} for Product Detail {productId} page</h2>
        </div>
        </>
    )
}