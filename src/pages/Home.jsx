import styled from "styled-components";
import CardProject from "../components/CardProject";
import CubeCard from "../components/CubeCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Main = styled.main`
  .brand {
    height: 40vh;

    background-image: url("/brand.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    align-items: flex-end;
    .info {
      margin-bottom: 20px;
      margin-left: 20px;
      h1 {
        margin-top: 10px;
        font-size: 48px;
        font-family: "GothamB";
        margin-bottom: 30px;
      }
    }
  }
  .body {
    background-color: #222;
    min-height: 60vh;
    h3 {
      margin: 20px 0 20px 20px;
      font-weight: 100;
    }
    .projectsTitle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        margin-right: 10px;
        color: #fff9;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .profile {
      display: flex;
      align-items: center;
      gap: 40px;
      padding: 20px;
      button:nth-child(1) {
        border: none;
        background-color: #1ed760;
        padding: 10px;
        border-radius: 100%;
        img {
          width: 25px;
        }
      }
      button:nth-child(2) {
        background-color: transparent;
        border: solid 1px #fff5;
        border-radius: 5px;
        padding: 8px 15px;
        &:hover {
          border: solid 1px #fff;
        }
      }
      button:nth-child(3) {
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
    .bestProjects {
      width: 60%;
      .cardProject {
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 5px;
        position: relative;
        z-index: 1;
        &:hover {
          background-color: #333;
        }
        p {
          display: flex;
          span {
            margin-right: 10px;
          }
          a {
            display: flex;
            align-items: center;
            text-decoration: none;
            margin-right: 10px;
            img {
              width: 15px;
              filter: invert(100%);
            }
          }
        }
        .tech {
          gap: 10px;
          display: flex;
          p {
            padding: 5px;
            border-radius: 5px;
          }
        }
      }
    }
    .projects {
      display: flex;
      flex-wrap: wrap;
      gap: 25px;
      margin-left: 20px;
      padding-bottom: 20px;
    }
  }
  @media (width < 990px) {
    .body {
      .bestProjects {
        width: 100%;
      }
    }
  }
`;

const Home = () => {
  const [projects, setProjects] = useState([])

  const fetchData = async () => {
    const data = await fetch('/projects.json')
    const fetched = await data.json()
    setProjects(fetched)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const devs = [
    {
      name: "Federico Massolo",
      desc: "Front-end, UX/UI",
      link: "https://www.linkedin.com/in/federico-massolo-55a13b238/",
      img: "/fede.jfif",
    },
    {
      name: "Javier Rivarola",
      desc: "Front-end, QA",
      link: "https://www.linkedin.com/in/javier-ignacio-rivarola/",
      img: "/javi.png",
    },
  ];

  const shuffle = () => {
    const randomNum = Math.floor(Math.random()*projects.length)
    const randomProject = projects[randomNum]
    window.location.href = randomProject.link
  }

  return (
    <Main>
      <section className="brand">
        <div className="info">
          <p>Fullstack Developer</p>
          <h1>Adriel Camacho</h1>
          <p>17 Projects</p>
        </div>
      </section>
      <section className="body">
        <article className="profile">
          <button onClick={shuffle}>
            <img src="/shuffle.svg" />
          </button>
          <button>CONTACT</button>
          <button>
            {[1, 2, 3].map((e, i) => (
              <div key={i} />
            ))}
          </button>
        </article>
        <article className="bestProjects">
          <h3>My best projects</h3>
          {projects.slice(0, 5).map((e, i) => (
            <CardProject key={i} item={e} num={i + 1} />
          ))}
        </article>
        <div className="projectsTitle">
          <h3>All Projects</h3>
          <Link to={"/projects"}>Show all</Link>
        </div>
        <article className="projects">
          {projects.slice(0, 5).map((e, i) => (
            <CubeCard item={e} key={i} />
          ))}
        </article>
        <h3>Developers i work with</h3>
        <article className="projects">
          {devs.map((e, i) => (
            <CubeCard isDev={true} item={e} key={i} />
          ))}
        </article>
      </section>
    </Main>
  );
};

export default Home;
