import './HeaderStyle.css';
import logo from './logo.png';

function Header() {
    return (
      <header>
        <img src={logo} alt="film maker" />
      </header>
    );
  }
  
  export default Header;