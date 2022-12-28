import { useRouter } from 'next/router'
const AboutDetails = () => {
    const router = useRouter()
    const { aboutId } = router.query

    return (
        <>
        <h2>About Details {aboutId}</h2>
        </>
    )
}

export default AboutDetails;