import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { DevContext } from '../context/DevContext'

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  position: fixed;
  padding: 10px;
  gap: 10px;
  z-index: 3;
  h3 {
    font-weight: 100;
  }
  button {
    background-color: #000;
    position: relative;
    width: 40px;
    border: none;
    border-radius: 100%;
    padding: 5px;
    display: grid;
    img {
      width: 100%;
      filter: invert(1);
    }
  }
  button:nth-child(2) {
    img {
      transform: rotate(180deg);
    }
  }
`;

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [prev, setPrev] = useState([]);
  const [next, setNext] = useState(null);
  const [current, setCurrent] = useState(null);
  const [isBack, setIsBack] = useState(false);

  const { currentDev } = useContext(DevContext)

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= window.innerHeight * 0.4) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (current === null) {
      setCurrent(location.pathname);
    }

    else if (current !== location.pathname && isBack) {
      setCurrent(location.pathname);
      setIsBack(false);
    } else if (current !== location.pathname) {
      setPrev(prevArr => [...prevArr, current]);
      setCurrent(location.pathname);
      setNext(null);
    }
  }, [location.pathname, current]);

  const goBack = () => {
    if (prev.length > 0) {
      const prevRoute = prev[prev.length - 1];
      navigate(prevRoute);
      setPrev(prevArr => prevArr.slice(0, prevArr.length - 1));
      setNext(current);
      setIsBack(true);
    }
  };

  const goNext = () => {
    if (next) {
      navigate(next);
      setNext(null);
    }
  };

  return (
    <HeaderStyle
      style={
        scrolling
          ? { backgroundColor: '#555' }
          : { backgroundColor: 'transparent' }
      }
    >
      <button>
        <img
          onClick={goBack}
          style={
            prev.length === 0
              ? { opacity: '0.5', cursor: 'no-drop' }
              : { opacity: '1', cursor: 'pointer' }
          }
          src="/icons/arrow.svg"
          alt="Back"
        />
      </button>
      <button>
        <img
          onClick={goNext}
          style={
            !next
              ? { opacity: '0.5', cursor: 'no-drop' }
              : { opacity: '1', cursor: 'pointer' }
          }
          src="/icons/arrow.svg"
          alt="Next"
        />
      </button>
      {scrolling && <h3>{ currentDev }</h3>}
    </HeaderStyle>
  );
};

export default Header;
