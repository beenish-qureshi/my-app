import React from 'react'
import Image from 'next/image'

const Middleheader = () => {
  return (
    <div className='bg-[#F0F2F3] p-5'>
      <div className='flex  items-center'>
     <Image src={'/images/logo Icon.svg'} alt='logo' width={26.67} height={23.33}>
        </Image>
      <h1 className='text-[#272343] w-[118px] h-[31px] text-2xl flex gap-5'>
      Comforty
      </h1>
      </div>
    </div>
  )
}

export default Middleheader
