import "../../css/Style.css";

const Header = () => {
  return (
    <div className="header-container">
      <nav className="nav-container">
        <h1>
        <img className="logo" src="src/img/shopicon1.jpg"></img>
          <span className="icon-hello">Hello</span>
          Shop
        </h1>
        <ul className="list-container">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
          <a href="#">
            <li>Support</li>
          </a>
          <a href="#">
            <li>Login</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
