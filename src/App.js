
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from "./components/About";
import { useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import { createBrowserRouter,RouterProvider,Link, BrowserRouter } from 'react-router-dom';
// import React from 'react';

// const router = createBrowserRouter([
  
//   {
//     path: "/about",
//     element: 
//     <About />
//   },
//   {
//     path: "/",
//     element: <TextForm />
//   },
  
// ])
function App() {

  const [mode, setMode] = useState('light');// Whether darkmode is enabled or not
  const [alert, setAlert] = useState(null);

  

  const showAlert=(message,type)=>
  {
    setAlert(
      {
        msg : message,
        type : type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1400);
  }
  const toggleMode=()=>
  {
    if(mode === "light")
    {
      setMode("dark");
     document.body.style.background = 'grey';
    //  showAlert("Dark mode has been enabled","Sucessfully")
     document.title = "Textutils - DarkMode";
     setTimeout(() => {
      document.title = "Textutils - Home";
    }, 1500);

    setInterval(() => {
      document.title = "Textutils is Amazing";
    }, 2000);

    setInterval(() => {
      document.title = "Install textutil now!";
    }, 1500);
    }
    else{
      setMode("light");
     document.body.style.background = 'white';
    //  showAlert("Light mode has been enabled","Sucessfully");
     document.title = "Textutils - LightMode";
     setTimeout(() => {
      document.title = "Textutils - Home";
     }, 1500);
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar titles="Textutil" aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
      {/* <React.StrictMode>
        <RouterProvider router={router}/>
      </React.StrictMode> */}
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analize below!.." mode={mode}/>}></Route>
        </Routes>
      {/* <TextForm showAlert={showAlert} heading="Enter the text to analize below!.." mode={mode}/> */}
      </div> 
      {/* <About /> */}
      
    </BrowserRouter>
    </>
  );


}

export default App;
