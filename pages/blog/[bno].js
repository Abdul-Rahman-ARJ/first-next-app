import React from 'react'
import { useRouter } from 'next/router'


const bno = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const {bno} = router.query;
  return (
    <div>
      <h1>{bno}</h1>
    </div>
  )
}

export default bno;



