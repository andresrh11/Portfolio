import styled from "styled-components";
import imagen from "../utils/perfil.jpg";

export default function Slider() {
  return (
    <SliderContainer>
      <div className="tarjeta">
        <div>
          <h1>Andrés Romero</h1>
          <h3 className="h3">💻 Web Developer</h3>
          <h3 className="h3">📍 Colombia</h3>
        </div>
        <img src={imagen} alt="" className="image" />
      </div>
      <section className="info">
        <h1 className="tit"> Hola! Soy Andrés Romero</h1>
        <h2 className="parraf">
          Ando en la busqueda de la mejor manera de desarrollar, tanto mi
          código, cómo mi manera de vivir. Apasionado de aprender nuevas
          tecnologías que complementen mi código.
        </h2>
      </section>
    </SliderContainer>
  );
}
const SliderContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 1300px;
  border-radius: 15px;

  padding: 10px 10px 10px 10px;
  align-items: center;
  .tarjeta {
    display: flex;
    justify-content: space-around;
    color: white;
    width: 500px;
    align-items: center;
    padding: 10px 10px 10px 10px;
    border-radius: 15px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    background-color: #80808024;
    .image {
      box-shadow: 1px 1px 15px rgba(245, 244, 244, 0.5);
      width: 150px;
      border-radius: 50%;
    }
  }
  .info {
    width: 700px;
  }
  .tit {
    text-align: center;
    color: white;
  }
  .parraf {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    max-width: 42rem;
    text-align: center;
    color: grey;
  }
  .h3 {
    color: grey;
  }
  :hover {
    transition: 0.5s;
    cursor: pointer;
  }
`;
