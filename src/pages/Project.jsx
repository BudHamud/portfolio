import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Main = styled.main`
  .brand {
    height: 40vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    .blur {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: #0009;
      z-index: 1;
    }
    .info {
      margin-bottom: 20px;
      margin-left: 20px;
      z-index: 2;
      display: flex;
      align-items: center;
      .devs {
        margin-top: 5px;
        display: flex;
        gap: 10px;
      }
      img {
        width: 90px;
        margin-right: 20px;
      }
      h1 {
        font-size: 48px;
        font-family: "GothamB";
      }
    }
  }
  .body {
    margin-top: 20px;
    margin-left: 20px;
    .profile {
      display: flex;
      align-items: center;
      gap: 40px;
      margin-bottom: 20px;
      a {
        border: none;
        background-color: #1ed760;
        padding: 10px;
        border-radius: 100%;
        img {
          width: 25px;
        }
      }
      button {
        display: flex;
        background-color: transparent;
        border: none;
        gap: 10px;
        padding: 15px 0;
        &:hover div {
          background-color: #fff;
        }
        div {
          width: 5px;
          height: 5px;
          background-color: #fff5;
          border-radius: 100%;
        }
      }
    }
  }
`;

const Project = () => {

  const { title } = useParams();

  const [project, setProject] = useState([]);

  const fetchData = async () => {
    const data = await fetch('/projects.json')
    const fetched = await data.json()
    const search = fetched.find((e) =>
      e.name.toLocaleLowerCase().includes(title)
    );
    setProject(search)
  }

  useEffect(() => {
    fetchData();
  }, [location.pathname]);

  if (project.length === 0) {
    <main>Loading...</main>;
  }

  return (
    <Main>
      <section
        style={{
          backgroundImage: `url(${project.img})`,
        }}
        className="brand"
      >
        <div className="blur" />
        <div className="info">
          <img src={project.logo} />
          <div className="title">
            <h1>{project.title ? project.title : project.name}</h1>
            <div className="devs">
              {project.devs
                ? project.devs.map((e, i) => <p key={i}>{e}</p>)
                : ""}
            </div>
          </div>
        </div>
      </section>
      <section className="body">
        <article className="profile">
          <a target={'_blank'} href={project.link}>
            <img src="/rocket.svg" />
          </a>
          <button>
            {[1, 2, 3].map((e, i) => (
              <div key={i} />
            ))}
          </button>
        </article>
        <p>{project.info}</p>
      </section>
    </Main>
  );
};

export default Project;
