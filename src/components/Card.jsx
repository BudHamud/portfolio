import React, { useState } from "react";

const Card = ({name, desc, img, badgeImg, badgeDesc}) => {

  const [status, setStatus] = useState(false)

  return (
    <div className="card">
        <img src={img} alt="project" />
        {
          badgeImg != null 
          ?  <img className="badge" src={badgeImg} /> 
          : ''
        }
        <p className={ status ? 'show hide' : 'hide' }>{desc}</p>
        <button
        className="info"
        onClick={() => setStatus(!status)}>+Info</button>
        <p>{name}</p>
      </div>
  );
};

export default Card;