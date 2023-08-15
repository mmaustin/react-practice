import { useState } from "react";


const ReactPractice = ({name, city, job, setName}) => {

  const onSetName = () => setName('Austin');

  return (
    <>
      <div>
        {name}
      </div>
      <div>
        {city}
      </div>
      <div>
        {job}
      </div>
      <button type="button" onClick={onSetName}>Click Me!!!</button>
    </>
  )
}
export default ReactPractice;