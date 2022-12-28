import { useRouter } from 'next/router'

const SubAboutId = () => {
  const router = useRouter()
  const {aboutId, subId } = router.query
  console.log(subId, '??????', aboutId)

  return <p>About Id: {aboutId} and Sub About Id :  {subId}</p>
}

export default SubAboutId