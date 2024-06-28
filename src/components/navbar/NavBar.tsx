import { FiAlignJustify } from "react-icons/fi";
import './NavBar.css'
import navIcon from '../../assets/nav-icon.jpeg'

const NavBar = () => {
  return (
    <>
    <div className="navbar-container">
      <img 
      className="icon-navbar"
      src={navIcon}></img>
    <FiAlignJustify className="menu-icon" />
    </div>
    </>
  )
}

export default NavBar