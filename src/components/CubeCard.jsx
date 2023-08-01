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
    transition: ease-in-out .2s;
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
  p:nth-child(3) {
    margin-top: 5px;
    font-size: 0.8rem;
    color: #fff9;
    span {
      color: #fff9;
    }
  }
`;

const CubeCard = ({ item, isDev, goHome }) => {

  const navigate = useNavigate()

  const goTo = () => {
    if (goHome) {
      navigate('/')
    } else if (isDev) { 
      navigate(`/profile/${item.name.split(' ')[0].toLowerCase()}`)
    } else {
      navigate(`/projects/${item.goto ? item.goto : item.name.toLowerCase()}`)
    }
  }

  return (
    <CubeStyle>
      <a target="_blank" href={item.link}>
        { isDev ? <img style={{ display: 'flex', left: 6, animation: 'none' }} src="/icons/linkedin.svg" /> : <img src="/rocket.svg" /> }
      </a>
      <div className="cardProject" onClick={goTo}>
      <img
        style={isDev ? { borderRadius: 100 } : {}}
        src={item.img ? item.img : "/fox.png"}
      />
      <p>{item.title ? item.title : item.name}</p>
      <p>{item.desc} {item.devs?.map((e, i) => ( <span key={i}>{e.split(' ')[0]}{i === item.devs.length - 1 ? '' : ', '}</span> ))}</p>
      </div>
    </CubeStyle>
  );
};

export default CubeCard;
