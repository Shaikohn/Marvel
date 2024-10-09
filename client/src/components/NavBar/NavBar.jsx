import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
    <div>
        <div className='navContainer'>
            <Link className='links' to='/'>CHARACTERS</Link>
        </div>
    </div>
    )
}

export default NavBar