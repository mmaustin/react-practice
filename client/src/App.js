//import TickTock from "./components/TickTock";

import { useAppContext } from "./context/appContext";

const App = () => {
  const {addFruit, fruits} = useAppContext();

  let displayFruit;
 
  displayFruit = fruits.map((fruit, i)=>{
    return <p key={i}>{fruit}</p>
  })
  
  return (
    <div>
      {/* <TickTock /> */}
      {displayFruit}
      <button type="button" onClick={addFruit}>add fruit</button>
    </div>
  )
}
export default App
