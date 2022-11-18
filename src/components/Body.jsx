import styled from "styled-components";
export default function Body() {
  return (
    <BodyContainer>
      <div className="div__grilla">
        <h1 className="h1">Frontend Stack</h1>
        <ul className="grilla">
          <div className="div">
            <img src="" alt="" />
            <p className="p">HTML</p>
          </div>
          <div className="div">
            <img src="" alt="" />

            <p className="p">CSS</p>
          </div>
          <div className="div">
            <img src="" alt="" />

            <p className="p">React.js</p>
          </div>
          <div className="div">
            <img src="" alt="" />

            <p className="p">JavaScript</p>
          </div>
          <div className="div">
            <img src="" alt="" />

            <p className="p">TypeScript</p>
          </div>
          <div className="div">
            <img src="" alt="" />

            <p className="p">Prettier</p>
          </div>
        </ul>
      </div>
      <div className="div__grilla">
        <h1 className="h1">Backend Stack</h1>
        <ul className="grilla">
          <div className="div">
            <img src="" alt="" />

            <p className="p">Node.js</p>
          </div>
          <div className="div">
            <img src="" alt="" />

            <p className="p">PostgreSQL</p>
          </div>
          <div className="div">
            <img src="" alt="" />

            <p className="p">Express</p>
          </div>
          <div className="div">
            <img src="" alt="" />

            <p className="p">Sequelize</p>
          </div>
        </ul>
      </div>
      <div className="div__grilla">
        <h1 className="h1">Proyectos</h1>
      </div>
    </BodyContainer>
  );
}
const BodyContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 10px 10px 10px 10px;
  .div__grilla {
    width: 1300px;
    border-radius: 15px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    background-color: #80808024;
    padding: 10px 10px 10px 10px;
    margin-top: 10px;
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
    border: 1px solid white;
    border-radius: 7px;
    align-items: center;
    display: flex;
    flex-flow: column;
  }
  .p {
    color: white;
  }
  .h1 {
    color: white;
  }
`;
