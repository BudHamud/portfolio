import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Main } from "./Home";

const Profile = () => {
  const { name } = useParams();

  const [dev, setDev] = useState([]);

  const searchDev = () => {
    const search = devs.find((e) => e.name.toLocaleLowerCase().includes(name));
    if (search) {
      setDev(search);
    }
  };

  useEffect(() => {
    searchDev();
  }, []);

  const devs = [
    {
      name: "Federico Massolo",
      desc: "Front-end, UX/UI",
      link: "https://www.linkedin.com/in/federico-massolo-55a13b238/",
      img: "/fede.jfif",
      projects: ["Argentina Regional", "DiabloBuilds"],
    },
    {
      name: "Javier Rivarola",
      desc: "Front-end, QA",
      link: "https://www.linkedin.com/in/javier-ignacio-rivarola/",
      img: "/javi.png",
      projects: ["Argentina Regional", "DiabloBuilds"],
    },
  ];

  if (dev.length === 0) {
    <main>
      <p>Loading...</p>
    </main>;
  }

  return (
    <Main>
      <section className="brand">
        <div className="info">
          <p>{dev.desc}</p>
          <h1>{dev.name}</h1>
          <p>{dev.projects?.length} Projects</p>
        </div>
      </section>
      <section className="body"></section>
    </Main>
  );
};

export default Profile;
