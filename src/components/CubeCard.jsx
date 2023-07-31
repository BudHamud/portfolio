import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CubeStyle = styled.div`
  background-color: #333;
  width: 250px;
  height: 300px;
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
  }
  p:nth-child(4) {
    color: #fff9;
  }
`;

const CubeCard = ({ item, isDev }) => {

  const navigate = useNavigate()

  const goTo = () => {
    if (isDev) {
      navigate(`/profile/${item.name.split(' ')[0].toLowerCase()}`)
    } else { 
      navigate(`/projects/${item.goto ? item.goto : item.name.toLowerCase()}`)
    }
  }

  return (
    <CubeStyle onClick={goTo}>
      <a target="_blank" href={item.link}>
        { isDev ? <img style={{ display: 'flex', left: 6 }} src="/icons/linkedin.svg" /> : <img src="/rocket.svg" /> }
      </a>
      <img
        style={isDev ? { borderRadius: 100 } : {}}
        src={item.img ? item.img : "/fox.png"}
      />
      <p>{item.name}</p>
      <p>{item.desc}</p>
    </CubeStyle>
  );
};

export default CubeCard;
