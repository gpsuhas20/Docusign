import { useState } from "react";
import PdfViewerComponent from "./PdfViewerComponent";


function Viewpdf() {
  const [document, setDocument] = useState("example.pdf");

  const handleOpen = () => setDocument("another-example.pdf");

  return (
   
      
     
      <div className="App-viewer">
        <PdfViewerComponent document={document} />
      </div>
   
 );}

 


export default Viewpdf;
