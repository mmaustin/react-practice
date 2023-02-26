import { useAppContext } from "./context/appContext";


const App = () => {
  const {addFruit, fruits} = useAppContext();

  const displayFruit = fruits.map((fruit, i)=>{
    return <p key={i}>{fruit}</p>
  })

  return (
    <div>
      {displayFruit}
    </div>
  )
}
export default App
