
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Landing, ErrorPage } from './pages';


//import { useAppContext } from "./context/appContext";

const App = () => {
  // const {addFruit, fruits} = useAppContext();

  // let displayFruit;
 
  // displayFruit = fruits.map((fruit, i)=>{
  //   return <p key={i}>{fruit}</p>
  // })
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
