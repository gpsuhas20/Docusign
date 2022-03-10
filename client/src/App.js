import { useState } from "react";
import PdfViewerComponent from "./components/PdfViewerComponent";

import Main from "./components/Main"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import  BrowserHistory  from "react-router";


import { createBrowserHistory } from 'history';
import Upload from "./components/Upload";

function App() {
  const [document, setDocument] = useState("document.pdf");

  const handleOpen = () => setDocument("another-example.pdf");
/*
 return (
    <div className="App">
      
     
      <div className="App-viewer">
        <Upload></Upload>
        {/*<PdfViewerComponent document={document} />
      </div>
    </div>
 );}*/

 return (
  <div className="App">
    
    <h1>
      hi
    </h1>
    
  </div>
);}
/*
 return (
  
    
   
   <BrowserRouter history={history} >
   <Main></Main>
   </BrowserRouter>
  
 )
*/


export default App;
