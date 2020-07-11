import React from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

interface Props {
  addBase: Function;
  pizza: Pizza;
}


const Base: React.FC<Props> = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <div className="base container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          initial={{
            opacity: 0,
            x: "-500px"
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
        >
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Base;
