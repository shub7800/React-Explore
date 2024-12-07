import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import Usercontext from './context/Usercontext.jsx'

createRoot(document.getElementById('root')).render(

    // <BrowserRouter>
    //  <App />
    // </BrowserRouter> 

    <Usercontext>
        <App />
    </Usercontext>
    
)

// JSK -javascript XML ---it is comination of javascript and html