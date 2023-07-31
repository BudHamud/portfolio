import styled from "styled-components";
import CubeCard from "../components/CubeCard";
import { useEffect, useState } from "react";

const Main = styled.main`
  padding-left: 20px;
  h2 {
    padding-top: 20px;
  }
  .projects {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: center;
    gap: 25px;
  }
`;

const Projects = () => {

  const [projects, setProjects] = useState([])

  const fetchData = async () => {
    const data = await fetch('/projects.json')
    const fetched = await data.json()
    setProjects(fetched)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Main>
      <h2>Adriel Camacho</h2>
      <section className="projects">
        {projects.map((e, i) => (
          <CubeCard item={e} key={i} />
        ))}
      </section>
    </Main>
  );
};

export default Projects;
