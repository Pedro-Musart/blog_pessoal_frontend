import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/BlogYourMind.svg"
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta'

function Navbar() {
  let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', 'info')
        navigate('/login')
    }

    let navbarComponent

    if(usuario.token !== "") {
      navbarComponent = (
        <div className='w-full bg-[#000932] text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='w-1/5'>
            <Link to='/home' className='text-2xl  font-bold uppercase'>
              <img src={logo} alt="" className='' /></Link>
            </div>
            <div className='flex gap-4'>
              <Link to='/postagens' className='hover:underline self-center'>Postagens</Link>
              <Link to='/temas' className='hover:underline self-center'>Temas</Link>
              <Link to='/cadastroTema' className='hover:underline self-center '>Cadastrar tema</Link>
              <Link to='/perfil' className='hover:underline self-center'>Perfil</Link>
              <Link to='' onClick={logout} className='hover:underline self-center'>Sair</Link>
            </div>
          </div>
        </div>
      )
    }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar