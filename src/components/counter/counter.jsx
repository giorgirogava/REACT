import { useState } from "react";
import Greeting from "../greeting";
import Button from "../ui/button";

import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const onButtonClick = (value) => {
    setCount(count + value);
  };

  const showGreeting = count;

  return (
    <div className="row counter-container">
      {showGreeting ? <Greeting text={`Counter ${count}`} /> : null}
      <div className="col-12 d-flex">
       
        <Button
          type="button"
          className="btn btn-success"
          onClick={() => onButtonClick(1)}
          text="Add +1"
        />

          
        <Button
          type="button"
          className="btn btn-success"
          onClick={() => onButtonClick(5)}
          text="Add +5"
        />

        <Button
          type="button"
          className="btn btn-success"
          onClick={() => onButtonClick(100)}
          text="Add +100"
        />

       
          <Button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            onButtonClick(-100);
          }}
          text="Subtract -100"
        />  

        <Button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            onButtonClick(-5);
          }}
          text="Subtract -5"
        />  


        <Button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            onButtonClick(-1);
          }}
          text="Subtract -1"
        />  



      </div>
    </div>
  );
}

export default Counter;
