import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 90%;
  height: 80%;
  margin: 0 auto;
  background-color: #333;
  position: relative;
  border-radius: 5px;
  background-position: center;
  background-size: cover;
  &:hover a {
    display: flex;
  }
  &:hover .blur {
    background-color: #0009;
  }
  .blur {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #0005;
    transition: ease-in-out 0.2s;
    z-index: 1;
  }
  .title {
    display: flex;
    align-items: center;
    gap: 15px;
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 2;
    img {
      width: 40px;
    }
  }
  a {
    background-color: #1ed760;
    border-radius: 100%;
    height: 40px;
    padding: 5px;
    position: absolute;
    right: 15px;
    bottom: 15px;
    z-index: 2;
    display: none;
    transition: ease-in-out 0.2s;
    &:hover img {
      animation: deploy 1s forwards;
    }
    &:hover {
      scale: 1.1;
    }
    img {
      width: 40px;
    }
  }
`;

const BigCard = ({ item }) => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate(`/projects/${item.goto ? item.goto : item.name.toLowerCase()}`);
  };

  return (
    <Card style={{ backgroundImage: `url(${item.img})` }}>
      <div className="blur" />
      <a target="_blank" href={item.link}>
        <img src="/rocket.svg" />
      </a>
      <div onClick={goTo}>
        <div className="title">
          <img src={item.logo} />
          <p>{item.title ? item.title : item.name}</p>
        </div>
      </div>
    </Card>
  );
};

export default BigCard;
