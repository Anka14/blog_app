import { useContext } from "react";
import "./topBar.css"
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";



export default function TopBar() {
  const { user, dispatch } = useContext(Context)
  const PF = "http://localhost:5000/images/"
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div >
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link"  >HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link" >ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="link" >CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link" >WRITE</Link>
          </li>

          {user && <li className="topListItem" onClick={handleLogout}>LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings" className="link">
            <img className="topImg"
              src={PF + user.profilePic}
              alt=""
            />
          </Link>)
          : (
            <ul className="topList">
              <li className="topListItem">
                <Link to="/login" className="link" >LOGIN</Link>
              </li>
              <li className="topListItem">
                <Link to="/register" className="link" >REGISTER</Link>
              </li>

            </ul>
          )
        }
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div >
  )
}