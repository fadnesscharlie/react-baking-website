import './Header.css'
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>

      <img className='icon' src='' alt='Site Icon' />


      <h1 className='title'>Charlie's Baked Goods || Header</h1>

      <nav>
        <ul>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='products'>
              Products
            </Link>
          </li>
          <li>
            <Link to='about'>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}