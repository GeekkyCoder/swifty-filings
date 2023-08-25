
import "./stepper.style.css";

import { useContext } from "react";
import { TabContext } from "../../context/tab.context";

function Stepper() {

  const {steppers,toggleActive} = useContext(TabContext)

  let stepsJsx = (
    <>
      {steppers.map(({ id, title, subtitle, active }) => (
        <li
          key={id}
          className={active ? "active" : ""}
          onClick={(e) => toggleActive(e, id)}
        >
          <a href="#" class="inner">
            <span class="title">{title}</span>
            <span class="sub-title d-none d-md-block">{subtitle}</span>
          </a>
        </li>
      ))}
    </>
  );

  return (
    <div>
      <ul class="checkout-list">{stepsJsx}</ul>
    </div>
  );
}

export default Stepper;
