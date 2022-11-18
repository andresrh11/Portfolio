import styled from "styled-components";
export default function Body() {
  return (
    <BodyContainer>
      <div className="div__grilla">
        <h1>Frontend Stack</h1>
        <ul className="grilla">
          <div className="div">
            <svg></svg>
            <p className="p">HTML</p>
          </div>
          <div className="div">
            <svg></svg>
            <p className="p">CSS</p>
          </div>
          <div className="div">
            <svg></svg>
            <p className="p">React.js</p>
          </div>
          <div className="div">
            <svg></svg>
            <p className="p">JavaScript</p>
          </div>
          <div className="div">
            <svg></svg>
            <p className="p">TypeScript</p>
          </div>
          <div className="div">
            <svg></svg>
            <p className="p">Prettier</p>
          </div>
        </ul>
      </div>
      <div>
        <h1>Backend Stack</h1>
      </div>
      <div>
        <h1>Proyectos</h1>
      </div>
    </BodyContainer>
  );
}
const BodyContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-flow: column;
  .div__grilla {
    border: 1px solid blue;
    width: 1300px;
  }
  .grilla {
    margin: 30px 100px 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    width: auto;
    grid-column: 1/3;
    grid-row: 1/4;
    height: auto;

    align-content: center;
    justify-content: center;
    align-items: center;
  }
  .div {
    width: 100px;
    height: 80px;
  }
  .p {
    color: white;
  }
`;
