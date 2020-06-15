import React, { useState } from "react";
import "./style.scss";
import maxChar2 from './algorithms.js'

export default (props) => {

  const [formData, setFormData] = useState();

  const handleChange = (event) => {
      setFormData({...formData, [event.target.name] : event.target.value})
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(maxChar2(formData.string))
    console.log()
  }

  return(
    <div className="App">
      <div className="main-cont">
        <h1>Unit 3 Assesment</h1>

        <form onSubmit={handleSubmit}>
            <input name="string" type="text" onChange={handleChange} />
        </form>
        {/* {formData.string? <h3>{maxChar2(formData.string)}</h3> : <h3>Enter a string</h3>
        } */}
      </div>
    </div>
    ) 
  
}


