import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  // Get Firebase Authentication method 
  const { user, logOut } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container">
        <Link to="/" className="navbar-brand t-1">
          <i className='bx bx-happy bx-tada' style={{ color: '#fffdfd' }} ></i> Tra<span className="text-primary">velBD</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tours">Tours</Link>
            </li>
            {
              !user?.email &&
              <>
                <li className="nav-item">
                  <NavLink className="nav-link"
                    to="/register"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#636"
                    }}>
                    Register Here
                  </NavLink>
                </li>
              </>
            }
            {
              user?.email ?
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link"
                      to="/user/show/tours"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#636"
                      }}>
                      My Bookings
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <button className="btn btn-sm btn-primary nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Admin Panel
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark " aria-labelledby="navbarDarkDropdownMenuLink">
                      <li className="dropdown-item">
                        <NavLink className="nav-link"
                          to="/admin/show/tour"
                          activeStyle={{
                            fontWeight: "bold",
                            color: "#636"
                          }}>
                          All Tours
                        </NavLink>
                      </li>
                      <li className="dropdown-item">
                        <NavLink className="nav-link"
                          to="/admin/show/bookings"
                          activeStyle={{
                            fontWeight: "bold",
                            color: "#636"
                          }}>
                          All Bookings
                        </NavLink>
                      </li>
                      <li className="dropdown-item">
                        <NavLink className="nav-link"
                          to="/admin/add/tour"
                          activeStyle={{
                            fontWeight: "bold",
                            color: "#636"
                          }}>
                          Add Tour
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">
                      {user?.displayName ? user.displayName : 'AnonymousUser'}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <NavLink onClick={logOut} className="nav-link"
                      to="/home"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#636"
                      }}>
                      SignOut
                    </NavLink>
                  </li>
                </> : ''
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
