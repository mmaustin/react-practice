// import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MuiButton from "./mui/MuiButton";
import MuiTypography from "./mui/MuiTypography";
import MuiTextField from './mui/MuiTextField';
import MuiSelect from "./mui/MuiSelect";
import MuiRadioButton from "./mui/MuiRadioButton";
import MuiCheckbox from "./mui/MuiCheckbox";
import MuiSwitch from './mui/MuiSwitch';
import MuiRating from "./mui/MuiRating";
import MuiAutocomplete from "./mui/MuiAutocomplete";



// import { Landing, ErrorPage } from './pages';


//import { useAppContext } from "./context/appContext";

const App = () => {
  // const {addFruit, fruits} = useAppContext();

  // let displayFruit;
 
  // displayFruit = fruits.map((fruit, i)=>{
  //   return <p key={i}>{fruit}</p>
  // })
  
  return (
    <div>
      {/* <MuiTypography/> */}
      {/* <MuiButton/> */}
      {/* <MuiTextField/> */}
      {/* <MuiSelect/> */}
      {/* <MuiRadioButton/> */}
      {/* <MuiCheckbox/> */}
      {/* <MuiSwitch/> */}
      {/* <MuiRating/> */}
      <MuiAutocomplete/>
    </div>
  )
}
export default App
