// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import MuiButton from "./mui/MuiButton";
// import MuiTypography from "./mui/MuiTypography";
// import MuiTextField from './mui/MuiTextField';
// import MuiSelect from "./mui/MuiSelect";
// import MuiRadioButton from "./mui/MuiRadioButton";
// import MuiCheckbox from "./mui/MuiCheckbox";
// import MuiSwitch from './mui/MuiSwitch';
// import MuiRating from "./mui/MuiRating";
// import MuiAutocomplete from "./mui/MuiAutocomplete";
// import MuiBox from "./mui/MuiBox";
// import MuiCard from "./mui/MuiCard";
// import MuiAccordian from "./mui/MuiAccordian";
// import MuiImageList from "./mui/MuiImageList";
//import MuiNavbar from "./mui/MuiNavbar";
//import MuiLink from "./mui/MuiLink";
//import MuiBreadcrumbs from "./mui/MuiBreadcrumbs";
//import MuiBadge from "./mui/MuiBadge"
import SixPrototype from "./sixFiveFour/SixPrototype";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SixPrototypeQuiz from "./sixFiveFour/SixPrototypeQuiz";
// import MuiAvatar from "./mui/MuiAvatar"

//import MuiSpeedDial from "./mui/MuiSpeedDial"


//import MuiDrawer from "./mui/MuiDrawer";




// import { Landing, ErrorPage } from './pages';


//import { useAppContext } from "./context/appContext";

const App = () => {
  // const {addFruit, fruits} = useAppContext();

  // let displayFruit;
 
  // displayFruit = fruits.map((fruit, i)=>{
  //   return <p key={i}>{fruit}</p>
  // })
  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<SixPrototype/>} />
        <Route path='/random' element={<SixPrototypeQuiz/>} />
        </Routes>
      </BrowserRouter>
      {/* <MuiTypography/> */}
      {/* <MuiButton/> */}
      {/* <MuiTextField/> */}
      {/* <MuiSelect/> */}
      {/* <MuiRadioButton/> */}
      {/* <MuiCheckbox/> */}
      {/* <MuiSwitch/> */}
      {/* <MuiRating/> */}
      {/* <MuiAutocomplete/> */}
      {/* <MuiBox/> */}
      {/* <MuiCard/> */}
      {/* <MuiAccordian/> */}
      {/* <MuiImageList/> */}
      {/* <MuiNavbar/> */}
      {/* <MuiLink/> */}
      {/* <MuiBreadcrumbs/> */}
      {/* <MuiDrawer/> */}
      {/* <MuiSpeedDial/> */}
      {/* <MuiAvatar /> */}
      {/* <MuiBadge /> */}
    </div>
  )
}
export default App
