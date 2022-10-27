import { Outlet, Link } from "react-router-dom";
import './bootstrap-grid.css'
import './bootstrap-reboot.css'
import './bootstrap.css'
import './bootstrap-utilities.css'

const Layout = () => {
  return (
    <>
      <div>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/signUp">SignUp</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>      
      </div>

      <Outlet />
    </>
  )
};

export default Layout;