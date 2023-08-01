import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CubeStyle = styled.div`
  background-color: #333;
  width: 250px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  position: relative;
  &:hover {
    background-color: #444;
    cursor: pointer;
  }
  &:hover a {
    display: flex;
  }
  .cardProject {
    .languages {
      display: flex;
      gap: 5px;
      position: absolute;
      top: 5px;
      left: 20px;
      img {
        width: 20px;
        height: 20px;
        background-color: #333;
        padding: 5px;
        border-radius: 5px;
      }
    }
    p:nth-child(4) {
      margin-top: 5px;
      font-size: 0.8rem;
      color: #fff9;
      span {
        color: #fff9;
      }
    }
  }
  a {
    display: none;
    background-color: #1ed760;
    position: absolute;
    right: 20px;
    bottom: 60px;
    height: 40px;
    width: 40px;
    align-items: center;
    border-radius: 100%;
    padding: 5px;
    transition: ease-in-out 0.2s;
    &:hover {
      scale: 1.1;
    }
    &:hover img {
      animation: deploy 1s forwards;
    }
    img {
      position: absolute;
      left: 3px;
      top: -8px;
      width: 40px;
      height: auto;
    }
  }
  img {
    margin: 15px 0;
    width: 220px;
    height: 220px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const CubeCard = ({ item, isDev, goHome }) => {
  const navigate = useNavigate();

  const goTo = () => {
    if (goHome) {
      navigate("/");
    } else if (isDev) {
      navigate(`/profile/${item.name.split(" ")[0].toLowerCase()}`);
    } else {
      navigate(`/projects/${item.goto ? item.goto : item.name.toLowerCase()}`);
    }
  };

  const langs = [
    { name: 'Javascript', img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg' },
    { name: 'Typescript', img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg' },
    { name: 'React', img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg' },
    { name: 'Node', img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg' },
    { name: 'Java', img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg' },
    { name: 'Mongo', img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg' },
    { name: 'Posgre', img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg' },
    { name: 'Firebase', img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg' },
    { name: 'SASS', img: 'https://res.cloudinary.com/dcmic2snw/image/upload/v1690905697/portfolio/langs/sass_jgg7o9.svg' },
    { name: 'CSS', img: 'https://res.cloudinary.com/dcmic2snw/image/upload/v1690905815/portfolio/langs/css_an0rsv.svg' },
    { name: 'HTML', img: 'https://res.cloudinary.com/dcmic2snw/image/upload/v1690905697/portfolio/langs/html_xltkss.svg' },
  ]

  const findLang = (lang) => {
    const found = langs.find(e => e.name === lang)
    if (found) {
      return found.img
    }
  }

  return (
    <CubeStyle>
      <a target="_blank" href={item.link}>
        {isDev ? (
          <img
            style={{ display: "flex", left: 6, animation: "none" }}
            src="/icons/linkedin.svg"
            alt="linkedin"
          />
        ) : (
          <img src="/rocket.svg" alt="rocket" />
        )}
      </a>
      <div className="cardProject" onClick={goTo}>
        <div className="languages">
        { item.tech && item.tech.map((e, i) => (<img key={i} src={findLang(e)} alt={e.name} />)) }
        </div>
        <img style={isDev ? { borderRadius: 100 } : {}} src={item.img} alt={item.name} />
        <p>{item.title ? item.title : item.name}</p>
        <p>
          {item.desc}{" "}
          {item.devs?.map((e, i) => (
            <span key={i}>
              {e.split(" ")[0]}
              {i === item.devs.length - 1 ? "" : ", "}
            </span>
          ))}
        </p>
      </div>
    </CubeStyle>
  );
};

export default CubeCard;
