import styled from "styled-components";

export default function Navbar() {
  return (
    <NavbarContainer>
      <ul className="items">
        <li>
          <b>
            <a href="/" className="href">
              Home
            </a>
          </b>
        </li>
        <div className="separ">
          <li>
            <b>
              <a href="/proyectos" className="href">
                Proyectos
              </a>
            </b>
          </li>
          <li>
            <b>
              {" "}
              <a href="contacto" className="href">
                Contact
              </a>
            </b>
          </li>
        </div>
      </ul>
    </NavbarContainer>
  );
}
const NavbarContainer = styled.div`
  width: 1300px;
  padding: 10px 10px 10px 10px;

  .items {
    display: flex;
    text-decoration: none;
    justify-content: space-between;
    list-style: none;
  }
  .separ {
    display: flex;
    width: 200px;
    text-decoration: none;
    justify-content: space-between;
  }
  .href {
    color: white;
    text-decoration: none;
  }
`;
