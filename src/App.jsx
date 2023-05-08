import React, { useState } from "react";
import { nanoid } from "nanoid";
import text from "./data";

const App = () => {
  const [counter, setCounter] = useState(1);
  const [textArr, setTextArr] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault();

    const newArr = text.slice(0, counter)
    console.log(newArr)
    setTextArr(newArr)
    }

  return ( 
    <div className="container">
      <h2 className="lorem-title">Lorem Ipsum Generator</h2>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="count">Paragraphs</label>
          <input 
          type="number" 
          id="count" 
          name="count" 
          min="1" 
          max="8"
          step="1"
          value={counter}
          onChange={(e)=>setCounter(e.target.value)} />
          <button className="form-button" type="submit">GO!</button>
        </form>

        <div>
          {textArr && 
          
          textArr.map((paragraph) => {
            const id = nanoid()
            console.log(id)

            return (
            <section key={id}>
              <p>{paragraph}</p>
            </section>
            )
          
          })
          
          
          }
        </div>
      </div>
    </div>

  )
  
  
  
};
export default App;
