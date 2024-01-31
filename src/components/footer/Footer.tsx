import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { useContext } from 'react'
import logo from "../../assets/logo.png"
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

  const { usuario } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if(usuario.token !== '') {
    footerComponent = (
      <>
        <div className="flex justify-center bg-[#000932] text-white">
          <div className="container flex flex-col items-center py-4">
              <div className='flex justify-center'>
              <img src={logo} alt="" className='w-1/6' />
              <p className='text-xl font-bold self-center'> | Copyright: {data}</p>
              </div>
            <p className='text-lg'>Acesse nossas redes sociais</p>
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

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer