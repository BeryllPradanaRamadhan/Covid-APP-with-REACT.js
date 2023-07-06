import { Link } from "react-router-dom";
import StyledFooter from "./footer.styled";


function Footer() {
  return (
    <StyledFooter>
      <div>
        <footer>
          <div>
            <h2>Covid ID</h2>
            <p>Development By Beryll</p>
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
        </footer>
      </div>
    </StyledFooter>
  );
}

export default Footer;
