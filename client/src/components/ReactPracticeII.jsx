import { useState } from "react";
import ReactPractice from "./ReactPractice";
//import pic from '../assets/random-history.png';

const ReactPracticeII = () => {

  const [name, setName] = useState('McCray');
  const [city, setCity] = useState('Brooklyn');
  const [job, setJob] = useState('Nada');
  // console.log(name, city, job);
  

  return (
    <>
      <p>Gibberish</p>
      <ReactPractice name={name} city={city} job={job} setName={setName}/>
      {/* <img src={pic} alt="random" /> */}

    </>
  )
}
export default ReactPracticeII