/*import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
 
 

  <React.StrictMode>
     <BrowserRouter>
    <App />
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById("root")
);


/*
ReactDOM.render((
  <BrowserRouter>
       <Route path="/" component={App}/>
  </BrowserRouter>
  ),
  document.getElementById('root')
);
*/

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Viewpdf from "./components/Viewpdf";
import PdfViewerComponent from "./components/PdfViewerComponent";
import Upload from "./components/Upload";
import Register from "./components/Register";
import Login from "./components/Login";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="viewpdf" element={<Viewpdf />} />
      <Route path="upload" element={<Upload />} />
     <Route path="register" element={<Register/>}/>
      <Route path="login" element={<Login/>}></Route>


     
    </Routes>
  </BrowserRouter>,
  rootElement
);