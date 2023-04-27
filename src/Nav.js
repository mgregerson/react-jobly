import { NavLink } from "react-router-dom";
import "./Nav.css";
import { useContext } from "react";
import userContext from "./userContext";

/** Nav
 *
 * Contains links to '/', '/companies' and '/jobs'
 *
 * App -> Nav
 *
 */

function Nav() {
  const { prefs } = useContext(userContext);
  console.log(prefs)
  return (
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" end>
          Jobber the Hutt
        </NavLink>


        {prefs.username !== null ?

          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/companies" end>
                Companies
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/jobs" end>
                Jobs
              </NavLink>
            </li>
          </ul>
          :
          <ul className="navbar-nav ms-auto">
          <li className="nav-item me-4">
            <NavLink className="nav-link" to="/login" end>
              Login
            </NavLink>
          </li>
          <li className="nav-item me-4">
            <NavLink className="nav-link" to="/signup" end>
              Sign Up
            </NavLink>
          </li>
        </ul>
        }

      </div>
    </nav>
  );
}

export default Nav;
