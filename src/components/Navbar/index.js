import { Link } from "react-router-dom";
import StyledNavbar from "./navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <div>
        <nav>
          <div>
            <h1>Covid ID</h1>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/"> Global </Link>
              </li>
              <li>
                <Link to="/page/indonesia"> Indonesia </Link>
              </li>
              <li>
                <Link to="/page/provinsi"> Provinsi </Link>
              </li>
              <li>
                <Link to="/page/about"> About </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
