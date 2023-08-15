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
// import SixPrototype from "./sixFiveFour/SixPrototype";
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import SixPrototypeQuiz from "./sixFiveFour/SixPrototypeQuiz";
// import ReactPracticeII from "./components/ReactPracticeII";

// import MuiAvatar from "./mui/MuiAvatar"

//import MuiSpeedDial from "./mui/MuiSpeedDial"


//import MuiDrawer from "./mui/MuiDrawer";




// import { Landing, ErrorPage } from './pages';


//import { useAppContext } from "./context/appContext";

// const App = () => {
//   // const {addFruit, fruits} = useAppContext();

//   // let displayFruit;
 
//   // displayFruit = fruits.map((fruit, i)=>{
//   //   return <p key={i}>{fruit}</p>
//   // })
  
//   return (
//     <div className="app">
//       <BrowserRouter>
//         <Routes>
//         <Route path='/' element={<ReactPracticeII/>} />
//         <Route path='/random' element={<SixPrototypeQuiz/>} />
//         </Routes>
//       </BrowserRouter>
//       {/* <MuiTypography/> */}
//       {/* <MuiButton/> */}
//       {/* <MuiTextField/> */}
//       {/* <MuiSelect/> */}
//       {/* <MuiRadioButton/> */}
//       {/* <MuiCheckbox/> */}
//       {/* <MuiSwitch/> */}
//       {/* <MuiRating/> */}
//       {/* <MuiAutocomplete/> */}
//       {/* <MuiBox/> */}
//       {/* <MuiCard/> */}
//       {/* <MuiAccordian/> */}
//       {/* <MuiImageList/> */}
//       {/* <MuiNavbar/> */}
//       {/* <MuiLink/> */}
//       {/* <MuiBreadcrumbs/> */}
//       {/* <MuiDrawer/> */}
//       {/* <MuiSpeedDial/> */}
//       {/* <MuiAvatar /> */}
//       {/* <MuiBadge /> */}
//     </div>
//   )
// }
// export default App


import React, { useState, useEffect } from "react";
//import "./App.css";

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");
  console.log(message);
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}