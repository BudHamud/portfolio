import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Main } from "./Home";
import CardProject from "../components/CardProject";
import CubeCard from "../components/CubeCard";

const Profile = () => {
  const { name } = useParams();

  const [dev, setDev] = useState([]);
  const [projects, setProjects] = useState([]);

  const searchDev = () => {
    const search = devs.find((e) => e.name.toLocaleLowerCase().includes(name));
    if (search) {
      setDev(search);
      fetchData(search);
    }
  };

  const fetchData = async (dev) => {
    const data = await fetch("/projects.json");
    const fetched = await data.json();
    const search = fetched.filter((e) => e.devs.includes(dev.name));
    setProjects(search);
  };

  useEffect(() => {
    searchDev();
  }, [location.pathname]);

  const devs = [
    {
      name: "Federico Massolo",
      desc: "Front-end, UX/UI",
      link: "https://www.linkedin.com/in/federico-massolo-55a13b238/",
      img: "https://res.cloudinary.com/dcmic2snw/image/upload/v1690844790/portfolio/profiles/fede_t1u8ot.jpg",
      back: "https://res.cloudinary.com/dcmic2snw/image/upload/v1690843713/portfolio/profiles/portadaFede_boxxhz.jpg",
    },
    {
      name: "Javier Rivarola",
      desc: "Front-end, QA",
      link: "https://www.linkedin.com/in/javier-ignacio-rivarola/",
      img: "https://res.cloudinary.com/dcmic2snw/image/upload/v1690844788/portfolio/profiles/javi_zg6qgq.png",
      back: "https://res.cloudinary.com/dcmic2snw/image/upload/v1690843713/portfolio/profiles/portadaJavo_mkmc2w.jpg",
    },
    {
      name: "Adriel Camacho",
      desc: "Fullstack Developer",
      link: "https://www.linkedin.com/in/adrielcamacho/",
      img: "https://res.cloudinary.com/dcmic2snw/image/upload/v1690844803/portfolio/profiles/Adriel_jw2fyb.jpg",
      back: "https://res.cloudinary.com/dcmic2snw/image/upload/v1690844780/portfolio/profiles/brand_fg9vwp.png",
      goHome: true
    }
  ];

  if (dev.length === 0) {
    <main>
      <p>Loading...</p>
    </main>;
  }

  return (
    <Main>
      <section
        className="brand"
        style={{ backgroundImage: `url(${dev.back})` }}
      >
        <div className="blur" />
        <div className="info">
          <p>{dev.desc}</p>
          <h1>{dev.name}</h1>
          <p>{projects.length !== 0 ? projects.length : 0} Projects</p>
        </div>
      </section>
      <section className="body">
        <section className="header">
        <article className="bestProjects">
          <h3>My best projects</h3>
          {projects.slice(0, 5).map((e, i) => (
            <CardProject key={i} item={e} num={i + 1} />
          ))}
        </article>
        </section>
        <div className="projectsTitle">
          <h3>All Projects</h3>
        </div>
        <article className="projects">
          {projects.map((e, i) => (
            <CubeCard item={e} key={i} />
          ))}
        </article>
        <h3>Developers i work with</h3>
        <article className="projects">
          {devs.filter(e => e.name !== dev.name).map((e, i) => (
            <CubeCard goHome={e.goHome ? true : false} isDev={true} item={e} key={i} />
          ))}
        </article>
      </section>
    </Main>
  );
};

export default Profile;
