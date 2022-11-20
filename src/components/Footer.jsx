import styled from "styled-components";
import linked from "../utils/lin.png";
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
        <div className="div__img">
          <a
            href="https://www.linkedin.com/in/andresrh29/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img" src={linked} alt="" />
          </a>
        </div>
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
  .div__img {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 8px;

    :hover {
      background-color: white;
      transition: all 0.3s ease-out;
    }
  }
  .img {
    width: 25px;
    height: 25px;
  }

  .div {
    width: 300px;
    justify-content: space-around;
    display: flex;
    align-items: center;
  }
`;
