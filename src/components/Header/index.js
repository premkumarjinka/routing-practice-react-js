// Write your JS code here

import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="app-container">
    <div className="wave-container">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1>Wave</h1>
    </div>
    <div>
      <ul className="list-container">
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
