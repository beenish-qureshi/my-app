import React from 'react'

const Topheader = () => {
  return (
    <div className='bg-[#272343]'>
      <div className='flex justify-center items-center'>
      <select className='flex justify-center text-white  bg-[#272343]  px-3 py-1 gap-4' >
      <option value="free">Free shipping on all orders over $50</option>
      </select>
      <div>
      <select className=' flex border-blue rounded px-3 py-1 gap-4 ml-24'>
                <option value="en">English</option>
                <option value="ur">Urdu</option>
                <option value="fr">French</option>

                
            </select>
           
      </div>
      <div>
              <ul className='flex justify-center items-center gap-5 '>
                <li>
                Faqs 
                </li>
                <li>
                Need Help
                </li>

              </ul>
            </div>
      </div>
     
    </div>
  )
}

export default Topheader
