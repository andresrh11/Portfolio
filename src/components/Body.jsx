import styled from "styled-components";
import react from "../utils/react.png";
import html from "../utils/html-5.png";
import css from "../utils/css-3.png";
import postgres from "../utils/postgre.png";
import js from "../utils/js.png";
import node from "../utils/node-js.png";
import typescr from "../utils/typescript.png";
import prettier from "../utils/prettier.png";
import sequelize from "../utils/sequelize.png";
import express from "../utils/express.png";
import Proyectos from "./Proyectos";
export default function Body() {
  return (
    <BodyContainer>
      <div className="div__grilla">
        <h1 className="h1">Frontend Stack</h1>
        <ul className="grilla">
          <div className="div">
            <img className="img" src={html} alt="" />
            <p className="p">
              <b>HTML</b>
            </p>
          </div>
          <div className="div">
            <img className="img" src={css} alt="" />

            <p className="p">
              <b>CSS</b>
            </p>
          </div>
          <div className="div">
            <img className="img" src={react} alt="" />

            <p className="p">
              <b>React.js</b>
            </p>
          </div>
          <div className="div">
            <img className="img" src={js} alt="" />

            <p className="p">
              <b>JavaScript</b>
            </p>
          </div>
          <div className="div">
            <img className="img" src={typescr} alt="" />

            <p className="p">
              <b>TypeScript</b>
            </p>
          </div>
          <div className="div">
            <img className="img" src={prettier} alt="" />

            <p className="p">
              <b>Prettier</b>
            </p>
          </div>
        </ul>
      </div>
      <div className="div__grilla">
        <h1 className="h1">Backend Stack</h1>
        <ul className="grilla">
          <div className="div">
            <img className="img" src={node} alt="" />

            <p className="p">
              <b>Node.js</b>
            </p>
          </div>
          <div className="div">
            <img className="img" src={postgres} alt="" />

            <p className="p">
              <b>PostgreSQL</b>
            </p>
          </div>
          <div className="div">
            <img className="img" src={express} alt="" />

            <p className="p">
              <b>Express</b>
            </p>
          </div>
          <div className="div">
            <img className="img" src={sequelize} alt="" />
            <p className="p">
              <b>Sequelize</b>
            </p>
          </div>
        </ul>
      </div>
      <div className="div__grilla">
        <h1 className="h1">Proyectos</h1>
        <Proyectos />
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

    align-items: center;
  }
  .div {
    width: 120px;
    height: 90px;
    border-radius: 7px;
    align-items: center;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    background-color: grey;
  }
  .p {
    color: white;
  }
  .h1 {
    color: white;
    padding-left: 30px;
  }
  .img {
    width: 40px;
    height: 40px;
    padding-top: 5px;
  }
`;
