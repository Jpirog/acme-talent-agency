import { render } from 'react-dom';
import React from 'react';
import { Provider } from "react-redux";
import Main from "./components/Main.js";
import store from "./store";

render(<Provider store={ store }> 
         <Main />
       </Provider>, 
       document.querySelector('#root'));