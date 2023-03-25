//import TickTock from "./components/TickTock";
//import GlobalForm from "./components/GlobalForm"
import LocalForm from "./components/LocalForm";
//import UseRef from "./components/UseRef"
//import TestCors from "./components/TestCors"


//import { useAppContext } from "./context/appContext";

const App = () => {
  // const {addFruit, fruits} = useAppContext();

  // let displayFruit;
 
  // displayFruit = fruits.map((fruit, i)=>{
  //   return <p key={i}>{fruit}</p>
  // })
  
  return (
    <div>
      {/* <TestCors /> */}
      {/* <TickTock /> */}
      {/* {displayFruit}
      <button type="button" onClick={addFruit}>add fruit</button> */}
      <LocalForm/>
    </div>
  )
}
export default App
