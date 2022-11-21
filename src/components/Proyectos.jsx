import styled from "styled-components";

export default function Proyectos() {
  return (
    <ProjectContainer>
      <div className="titulo">
        <h2>Aquí podrás ver todos los proyectos en los que he trabajado</h2>
      </div>
      <div className="eworld">
        <h1>E-World</h1>
        <p>
          Un proyecto elaborado para el Bootcamp de Soy Henry, donde incorporé
          tecnologías tales como las que se ven abajo. Es un proyecto en el cual
          puedes consultar la información de los paises que son traidos desde
          una API y se almacenan en la base de datos; además podemos agregarles
          actividades a estos paises para que los turistas que las ven tengan
          una guia de que hacer en su estadia en dichos paises.
        </p>
        <div></div>
        <div>
          <img src="" alt="" />
        </div>
        <div className="buttons__redirect">
          <button>
            {" "}
            <a
              href="https://www.github.com/andresrh11/PI-Countries.git"
              target="_blank"
              rel="noreferrer"
            >
              <b> Visitar Web →</b>
            </a>
          </button>
          <button>
            {" "}
            <a
              href="https://www.github.com/andresrh11/PI-Countries.git"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <b>Ver Código →</b>
            </a>
          </button>
        </div>
      </div>
      <div className="eworld">
        <h1>HenryShops</h1>
        <p>
          Un proyecto grupal elaborado para el Bootcamp de Soy Henry, donde
          incorporamos tecnologías tales como las que se ven abajo. Es un
          proyecto pensado para los vendedores locales donde podran crear sus
          respectivos sitios web por una modica cuota mensual. Nos encargamos de
          facilitar la creación de webs para los negocios locales y que puedan
          gestionar sus ventas a traves de Whatsapp.
        </p>
        <div></div>
        <div>
          <img src="" alt="" />
        </div>
        <div className="buttons__redirect">
          <button>
            <a
              href="https://www.github.com/andresrh11/HenryShops.git"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <b>Visitar Web →</b>
            </a>
          </button>
          <button>
            <a
              href="https://www.github.com/andresrh11/HenryShops.git"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <b>Ver Código →</b>
            </a>
          </button>
        </div>
      </div>
    </ProjectContainer>
  );
}
const ProjectContainer = styled.div`
  padding: 10px 30px 10px 30px;
  h1 {
    color: white;
  }
  p {
    color: white;
  }

  h2 {
    color: white;
  }
  button {
    background-color: #acacac;
    border: none;
    border-radius: 3px;
    width: 110px;
    height: 25px;

    :hover {
      transition: 0.3s;

      background-color: black;
    }
  }
  .buttons__redirect {
    display: flex;
    width: 300px;
    justify-content: space-around;
  }
  a {
    text-decoration: none;
    color: black;
    :hover {
      transition: 0.3s;
      color: #acacac;
      background-color: black;
    }
  }
`;
