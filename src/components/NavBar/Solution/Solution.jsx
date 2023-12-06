import React from "react";
import './Solution.css';

const Solution = () => {
  const Solutions = [
    {
      name: "Startups"
    },
    {
      name: "Enterprises"
    },
    {
      name: "Saas"
    },
    {
      name: "Platforms"
    },
    {
      name: "Ecommerce"
    }
  ];
  return (
    <div>
      {Solutions.map((el, i) => (
        <div key={i + 1} className="solution">{el.name}
        </div>
      ))}
    </div>
  );
};

export default Solution;
