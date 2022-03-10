import React,{useState} from 'react'
import { slide as Menu } from 'react-burger-menu'
import PdfViewerComponent from './PdfViewerComponent';
import axios from 'axios';
import baseurl from '../baseurl';
import Carousel from "react-elastic-carousel";
import {Nav, NavItem, Navbar, Button,Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap'
import { Navigate } from 'react-router';
import { BrowserRouter as Router, Route, useNavigate} from 'react-router-dom'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
function Upload()
{

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];
  
    const navigate = useNavigate()
  
    const [file, setFile] = useState('');

    async function uploadFileHandler (e) {
        e.preventDefault()
        const file1 = e.target.files[0];
        const file = new FormData();
        file.append('file', file1);

       
       
       
       
        const {data} =await axios.post(`${baseurl}/fileupload/pdf`, file, {
            headers: {
              'Content-Type': 'multipart/form-data',
             
            },
          })
        navigate('/viewpdf')
         
          
      };


 
    return(
       <>
       {/*<div>
       <h1>
           DOCUSIGN
       </h1>
       <Input
                type="text"
                name="image"
                value={file}
                id="image" onChange={(e) => setFile(e.target.value)}></Input>
                      <Input type='file'  onChange={uploadFileHandler}></Input>
         </div>
       
    */}
<div className='upload_bg'>
{/*  */}

<header>
    <nav className="navbar navbar-expand-lg p-2 mb-2bg-light text-dark border-bottom" >
        <p className="navbar-brand font-weight-bold fs-1 px-5">DocuSign</p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>   

      <div className="ml-lg-4 mr-lg-4  mt-3 mt-lg-5">
      <div>
        <Carousel breakPoints={breakPoints}  className="carousel" style={{backgroundcolor:"orange"}} enableAutoPlay autoPlaySpeed={2500}>
        <img src={`${process.env.PUBLIC_URL}/images/img11.jpeg`} className="d-block w-100 carousel-img "></img>
          <img src={`${process.env.PUBLIC_URL}/images/img2.jpg`} className="d-block w-100 carousel-img "></img>
          <img src={`${process.env.PUBLIC_URL}/images/img12.png`} className="d-block w-100 carousel-img "></img>
         
        
          
        </Carousel>
        
         </div>
         </div>     

    {/*}
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src= {`${process.env.PUBLIC_URL}/images/img11.jpeg`} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src=  {`${process.env.PUBLIC_URL}/images/img2.jpg`}className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/images/img12.png`}className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
  </div>*/}
     
    </header>
   
    
    <section className="Services my-5">
        <div className="container">
            <div className=" text-center my-5">
                <h1 className="m-auto">Docu<span className="text-primary">Sign</span></h1>
                <hr className="w-25 m-auto"/>

            </div>
        
            <div className="row">
               <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                <h2>Move  forward <span className="text-primary" >securily</span> and <span className="text-primary" >reliably</span></h2>
                    <p>Go digital with DocuSign. It’s easy to get started and easy to grow when you choose the eSignature.
                        With DocuSign, user can securely send, sign and manage nearly every agreement from almost anywhere
                         in the world. You can quickly and easily complete transactions from your laptop .
                         DocuSign offers online signature feature .
                    </p>

                  
        <section id="accordian">
        <details open>
            <summary  className='container jumbotron' >
            <div className='row'>
                                
                                <div>
                                    <h2>Get it done, faster than ever</h2>
                                </div>
                            </div>
            </summary>
            <div>
        
             <div className='container card-container'>
                <div className='row acc-bg'style={{justifyContent:'center'}}>
                <strong>Easy to use, quick to learn and a snap to implement, approvals and agreements are simple
                           and convenient for everyone involved.</strong>
                </div>
                </div> 
            </div>
        </details>
        <details open>
            <summary  className='container jumbotron' >
            <div className='row'>
                               
                                <div>
                                    <h2>Anywhere, anytime, </h2>
                                </div>
                            </div>
            </summary>
            <div>
        
            <div className='container card-container'>
                <div className='row 'style={{justifyContent:'center'}}>
                <strong>Access, sign and send important documents from your desk, on the road or everywhere in between.</strong>
                </div>
                </div> 
            </div>
        </details>
        <details open>
            <summary  className='container jumbotron' >
            <div className='row'>
                               
                                <div>
                                    <h2> Customizable UI </h2>
                                </div>
                            </div>
            </summary>
            <div>
        
            <div className='card-container-1'>
                <div className='row 'style={{justifyContent:'center'}}>
                <strong>Hide buttons, match your look & feel, and more</strong> 
                </div>
                </div> 
            </div>
        </details>
       
           
    </section>
                    
                  
                </div>
              


               <div className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end">
                    <img src= {`${process.env.PUBLIC_URL}/images/img9.jpg`}className=" img-fluid img-thumbnail"alt=""/>
               </div>
             </div>
        </div>
       
        
    </section>
  
    {/*<!--key features-->*/}
    <section className="Services my-5">
        <div className="container">
            <div className=" text-center my-5">
                <h1 className="m-auto">Key<span className="text-primary">features</span></h1>
                <hr className="w-25 m-auto"/>

            </div>

        </div>
      
    </section>
  
   

    <section className="wrapper">
        <div className="container">
        
        <div className="row">
       <div className="col-md-4"><div className="card text-white card-has-bg click-col background-1">
               <img className="card-img d-none" src= {`${process.env.PUBLIC_URL}/images/card1.jpg`} alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"/>
              <div className="card-img-overlay d-flex flex-column">
               <div className="card-body">
                 {/*  <!--<small className="card-meta mb-2">Thought Leadership</small>--> */}
                  <h4 className="card-title mt-0 "><a className="text-white" herf="#">Create digital signatures — Digitally sign any Document</a></h4>
                
                </div>
                <div className="card-footer">
                 <div className="media">

      </div>
                </div>
              </div>
            </div></div>
           <div className="col-md-4"><div className="card text-white card-has-bg click-col background-2">
               <img className="card-img d-none" src= {`${process.env.PUBLIC_URL}/images/card2.jpg`} alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"/>
              <div className="card-img-overlay d-flex flex-column">
               <div className="card-body">
                {/* <!--<small className="card-meta mb-2">Thought Leadership</small>--> */}
                  <h4 className="card-title mt-0 "><a className="text-white" herf="#">eSignatures — Add drawn, scanned, or typed electronic signatures</a></h4>
                 
                </div>
                <div className="card-footer">
                 <div className="media">
        
      </div>
                </div>
              </div>
            </div></div>
        <div className="col-md-4"><div className="card text-white card-has-bg click-col background-3">
               <img className="card-img d-none" src= {`${process.env.PUBLIC_URL}/images/card3.jpg`} alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"/>
              <div className="card-img-overlay d-flex flex-column">
               <div className="card-body">
                  {/*<!--<small className="card-meta mb-2">Thought Leadership</small>--> */}
                  <h4 className="card-title mt-0 "><a className="text-white" herf="#">Client-side — Sign PDFs directly in the browser (no server needed)</a></h4>
                
                </div>
                <div className="card-footer">
                 <div className="media">
        
      </div>
                </div>
              </div>
            </div></div>
        

            
      </div>
        
      </div>
      </section>

     
      
      <section className="Services my-5">
        <div className="container">
            <div className=" text-center my-5">
                <h1 className="m-auto">Get<span className="text-primary">started</span></h1>
                <hr className="w-25 m-auto"/>
            </div>
            <p className="text-center"> Upload A Document
            </p>
          
            <div className="container">
                <div className="row">
                  <div className="col text-center">
                  <Input
                type="text"
                name="image"
                className='offset-3 col-6'
                value={file}
                id="image" onChange={(e) => setFile(e.target.value)}></Input>
                      <Input type='file'   className='mt-2 offset-5 col-6' onChange={uploadFileHandler}></Input>
                   
                  </div>
                </div>
                </div>
                </div>
                </section>
              
       
      
   
   

  
    <div className="footer">
        <p><a href="https://www.incture.com/">@Incture.com</a></p>
      </div>
      </div>
       </>
    )
}
export default Upload