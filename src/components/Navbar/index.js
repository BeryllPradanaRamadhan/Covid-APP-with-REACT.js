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
              <li>Global</li>
              <li>Indonesia</li>
              <li>Provinsi</li>
              <li>About</li>
            </ul>
          </div>
      </nav>
    </div>
    </StyledNavbar>
  );
}

export default Navbar;
