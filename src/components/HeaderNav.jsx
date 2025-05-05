import logo from './../assets/images/logo.svg'
import HeaderContent from "./HeaderContent"
import HeaderMore from "./HeaderMore"
const HeaderNav = () => {
  return (
    <header className="header">
        <nav className="header__nav">
            <a href="#"><img src={logo} alt="" /></a>
            <ul className="header__nav-list">
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <ul className="header__nav-buttons">
                <li><a href="">Sign in</a></li>
                <li><a href="">Join</a></li>
            </ul>
        </nav>
        <HeaderContent/>
        <HeaderMore/>
    </header>
  )
}

export default HeaderNav
