
import React from 'react';

import Upload from './Upload';
import Viewpdf from './Viewpdf';
import {Switch,Route,Redirect,withRouter, Router} from 'react-router-dom'
import {Card,CardImg,CardBody,CardText,CardSubtitle,Button,CardTitle, Row, Badge,Jumbotron,Form} from 'reactstrap'

function Main()
{
    

    
    return(
        <>
       <Router>
         
            <Route exact path="/upload" component={Upload}/>
            <Route exact path="/pdfview" component={Viewpdf}/>
          
            <Route exact path='/' component={Viewpdf}/>
        </Router>
       </> 
    )
}
export default Main   
