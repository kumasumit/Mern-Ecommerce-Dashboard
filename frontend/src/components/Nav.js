import React from 'react'
import { Link
} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
        <ul className="nav-ul">
            {/* here we are not using a href because it will re-render/refresh the page */}
            
               <li><Link to="/">Products</Link></li>
               <li><Link to="/add">Add Products</Link></li>
               <li><Link to="/update"> Update Products</Link></li>
               <li><Link to="/logout">Logout</Link></li>
               <li><Link to="/profile">Profile</Link></li>

        </ul>
    </div>
  )
}

export default Nav