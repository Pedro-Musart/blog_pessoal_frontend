import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import logo from "../../assets/BlogYourMind.svg"

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-[#000932] text-white">
          <div className="container flex flex-col items-center py-4">
          
          <div className='flex justify-center'>
            <img src={logo} alt="" className='w-1/6' />
            <p className='text-xl font-bold self-center'> | Copyright: 2024</p>
          </div>

            <p className='text-lg mt-3'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' />
              <InstagramLogo size={48} weight='bold' />
              <FacebookLogo size={48} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer