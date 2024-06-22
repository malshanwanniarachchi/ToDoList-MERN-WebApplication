import React, { Component } from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import Register from './component/register/Register';
import Login from './component/login/Login';
import UploadPdf from './component/pdf/UploadPdf';
import PdfList from './component/pdf/PdfList';
import Home from './component/home/Home';
import UpdatePdf from './component/pdf/UpdatePdf';

export default class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
         <Route path="/register" exact component={Register}></Route>
         <Route path="/" exact component={Login}></Route>
         <Route path="/add" exact component={UploadPdf}></Route>
         <Route path="/list" exact component={PdfList}></Route>
         <Route path="/home" exact component={Home}></Route>
         <Route path="/update/:id" exact component={UpdatePdf}></Route>
         </BrowserRouter>  
      </div>
    )
  }
}

