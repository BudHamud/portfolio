import { useState } from "react";

const CardProject = ({ item, num }) => {
  const [isHover, setHover] = useState(false);

  return (
    <div
      className="cardProject"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p>
        {isHover ? (
          <a target='_blank' href={item.link}>
          <img
            src="/rocket.svg"
          />
          </a>
        ) : (
          <span>{num}</span>
        )}
        {item.title ? item.title : item.name}
      </p>
      <div className="tech">
        {item.tech.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>
    </div>
  );
};

export default CardProject;
