import './Header.css'
import logo from '/vite.svg?url'
import headerMenu from '../../data/menu'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <nav className='headerContainer'>

                <a href='#' className="logoContainer">
                    <img src={logo} />
                </a>

                <ul className='menuList'>
                    {headerMenu.map((menuItem) => {
                        return (
                            <li key={menuItem.id}>
                                <NavLink to={menuItem.path}>{menuItem.title}</NavLink>
                            </li>
                        )
                    })}
                </ul>

                <div className="actionContainer">
                    <button>Accedi</button>
                </div>

            </nav>
        </header>
    )
}

export default Header