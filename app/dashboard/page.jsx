import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
<>
<div className='  min-h-{84vh] flex justify-center items-center'>
<div className='border border-black w-1/2 min-h[10vh] rounded-lg p-4'>
<div className='mb-3'>
  <p className='font-semibold text-2xl'>
    name: arun
  </p>
</div>
<div className='mb-3'>
  <p className='font-semibold text-2xl'>
    email: @gmail.com
  </p>
</div>
<div className='mb-3  text-orange-300 font-bold'>
<Link href={'/u-profile'}> Update profile </Link>
</div>
</div>


</div>
</>
  )
}

export default page