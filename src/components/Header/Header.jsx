import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/react.svg'
import { IoSearchOutline } from 'react-icons/io5'

function Header() {

    const menu = [
        {
            id: 1,
            title: 'Home',
            path: '/'
        },
        {
            id: 2,
            title: 'Movies',
            path: '/movies'
        },
    ]

    return (
        <header>
            <div className="container">
                <nav>
                    <a href='#'>
                        <img src={logo} />
                    </a>

                    <ul>
                        {menu.map((menuItem) => {
                            return (
                                <li key={menuItem.id}>
                                    <NavLink to={menuItem.path}>{menuItem.title}</NavLink>
                                </li>
                            )
                        })}
                    </ul>

                    <div className='actions'>
                        <form className='searchBox'>
                            <input placeholder='Search...' />
                            <button type='submit'>
                                <IoSearchOutline size={22} color='rgba(255, 255, 255, 0.5)' />
                            </button>
                        </form>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header