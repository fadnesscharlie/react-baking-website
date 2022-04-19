import './Header.css'
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>

      <img className='icon' src='https://via.placeholder.com/100' alt='Site Icon' />

      <h1 className='title'>Charlie's Baked Goods || Header</h1>

      <nav>
        <ul>
          <li className='navListLi'>
            <Link className='navLink' to='/'>
              Home
            </Link>
          </li>
          <li className='navListLi'>
            <Link className='navLink' to='products'>
              Products
            </Link>
          </li>
          <li className='navListLi'>
            <Link className='navLink' to='about'>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}