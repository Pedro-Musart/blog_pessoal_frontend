import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/BlogYourMind.svg"
import { AuthContext } from '../../contexts/AuthContext'



function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponent
  

  return (
    <>
     <div className='w-full bg-[#000932] text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <img src={logo} alt="" className='w-1/6' />

            <div className='flex gap-4'>
            <div className='hover:underline self-center'>Postagens</div>
            <Link to='/temas' className='hover:underline self-center'>Temas</Link>
              <div className='hover:underline self-center'>Cadastrar tema</div>
              <div className='hover:underline self-center'>Perfil</div>
              <Link to='' onClick={logout} className='hover:underline self-center'>Sair</Link>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar