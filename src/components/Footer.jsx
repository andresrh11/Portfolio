import styled from "styled-components";
export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <h3>Creado con React.js, JavaScript, HTML, CSS y StyledComponents</h3>
      </div>
      <div className="div">
        <a
          href="https://github.com/andresrh11"
          target="_blank"
          rel="noreferrer"
        >
          <img className="img" src="" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/andresrh29/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="img" src="" alt="" />
        </a>
        <a
          href="https://www.instagram.com/andresrh29/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="img" src="" alt="" />
        </a>
      </div>
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 1300px;
  .img {
    width: 40px;
    height: 40px;
    :hover {
      background-color: white;
    }
  }
  .div {
    width: 300px;
    justify-content: space-around;
    display: flex;
    align-items: center;
  }
`;
