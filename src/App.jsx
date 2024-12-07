// function app(){
//   // return <h1>hello</h1>
//   // yaha kuch bhi return karta hu toh ye jata hai main ke andar uske baad sidha html main 

import { useEffect, useState } from "react";


//   // const a=10// if you want to print any variable in the tag you use {-----} eg-{a}
//   const user='shubham'
  
//   const abc=()=>{
  //     console.log("hello");
  
  //   }
  

//   return <div>
//     <h1>username is {user}</h1>
//     <button onClick={abc}>Change User</button>
//   </div>
// }

// export default app



//************NOTES */
//hooks-- it is special type of functions which use for state mangement 
/**
 example 
 a=0
 a=1
 */
// import React, { useState } from "react";




// const App=()=>{
  
  //   const [user,setuser] =useState("shubham")
  //   const changeUser=()=>{
    //     setuser("Maanu")
    //   }
    
    
    
    
    //   return(
      //     <div>
      //       <h1>user name is {user} </h1>
      //       <button onClick={changeUser}>Change User</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from "react";


// const App=()=>{
  
  //   const [num,setnum] =useState(0)
  //   const changein=()=>{
    //     setnum(num+10)
    //   }
    //   const changede=()=>{
      //     setnum(num-10)
      //   }
      
      
      //   return(
        //     <div>
        //       <h1>Number is {num} </h1>
        //       <button onClick={changein}>Increment</button>
        //       <button onClick={changede}>Decrement</button>
//     </div>
//   )
// }

// export default App



/********************FORM HANDLING  */
// const App=()=>{
  
//   const submitHandler= (e)=>{
  //     e.preventDefault();
  //     console.log("submited");
  
  
  
  //   }
  
  //   return(
    //     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//         <input className="px-4 py-3 rounded text-xl m-5" type="text" placeholder="Enter your name" />
//         <button className="px-4 py-3 text-white text-xl m-3 font-semibold bg-emerald-600 rounded">Submit</button>
//       </form>
//     </div>
//   )

// }

// export default App


/****************************TWO WAY BONDING  */

// const App=()=>{
  
  
  //   const [username,setusername]=useState("")
  
  //   const submitHandler=(e)=>{
    //     e.preventDefault();
    //     console.log(username);
    
    //     setusername("")
    
    //   }
    
    //   return(
      //     <div>
      //       <form onSubmit={(e)=>{
        //         submitHandler(e)
        //       }}>
        //       <input 
        //       //value="Shubham" be also declear the value in the text feild
        //       value={username}
        //       onChange={(e)=>{
          //         setusername(e.target.value)
          //       }}
          //       className="px-4 py-3 rounded text-xl m-5" 
          //       type="text" 
          //       placeholder="Enter your name" />
          //       <button className="px-4 py-3 text-white text-xl m-3 font-semibold bg-emerald-600 rounded">Submit</button>
          //       </form>
          //     </div>
          //   )
          
          // }
          
          // export default App
          
          /*******************************************COMPONENT *******************************/
          
          // <></>-- the are called fragment it work like wrapper
          
          // import React from 'react'
          // import Header from './components/Header'
          // import Footer from './components/Footer'
          
          // const App = () => { 
            //   return (
//     <>
//       <Header></Header>
      
//       <Footer/>
//       {/* <nav className="bg-emerald-950 flex px-10 py-5 items-center justify-between">
//           <h2 className="text-2xl ">Shubam</h2>
//           <div className="flex gap-8 items-center">
//             <h4 className="text-xl ">About</h4>
//             <h4 className="text-xl ">Contact</h4>
//             <h4 className="text-xl ">Service</h4>
//             <h4 className="text-xl ">Your Account</h4>
//           </div>
//       </nav> */}
//     </>
//   )
// }

// export default App

/*****************PROPS AND PROPS DRILING*****MEANS how pass the data and how to use the data  */

// import React from 'react'
// import Card from "./components/Card";

// const App = () => {
  
  //   const user="Shubham"
  //   return (
    //     <>
    //       {/* //ye ek property ki traha ja rha hai esliye esko hum props bolte hai */}
    //       <Card myUser ="shubham"/>  
    //       <Card myUser ="atul "/>  
    //     </>
    //   )
    // }
    
    // export default App
    
    // import React from 'react'
    // import Card from "./components/Card";
    
    
    
    
    // const App = () => {
      
      //   const users=[
        //     {
//       "name": "Alice Johnson",
//       "age": 28,
//       "city": "New York",
//       "profession": "Software Engineer",
//       "profile_photo": "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
//     },
//     {
  //       "name": "David Brown",
  //       "age": 35,
//       "city": "Chicago",
//       "profession": "Graphic Designer",
//       "profile_photo": "https://t3.ftcdn.net/jpg/01/68/93/20/360_F_168932076_l8nTWYp05U3OAhbQfBsP6VA8EykGIyyu.jpg"
//     },
//     {
  //       "name": "Sophia Martinez",
  //       "age": 30,
  //       "city": "Los Angeles",
  //       "profession": "Marketing Manager",
  //       "profile_photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRoxMJhsVlf0rzfgO4IsRZ6otDlG2fI8LM9A&s"
  //     },
  //     {
    //       "name": "James Lee",
    //       "age": 42,
    //       "city": "San Francisco",
    //       "profession": "Data Scientist",
    //       "profile_photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKK51OuIGI2ja4huS3iGueaNCf8sotMjfkig&s"
    //     },
    //     {
      //       "name": "Emily Clark",
//       "age": 25,
//       "city": "Austin",
//       "profession": "Content Writer",
//       "profile_photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxsGqrVKDRBd6NVvnLyiIBjEpkQn4WbCB38w&s"
//     }
//   ]



  // return (
  //     <div>
  //       <div className="p-10">
  //         {users.map((elem,idx)=>{
  //             return <Card key={idx} username={elem.name} age={elem.age} city={elem.city} profession={elem.profession} pic={elem.profile_photo} />
  //           })}
  //         </div>
  //       </div>
  //     )
    
    
    // export default App
    
// import React from 'react'
// import axios from "axios";
// import Card from "./components/Card";


// const App = () => {

//   const [data, setData] = useState([])
  

//   const getData=async ()=>{
//     const response=await axios.get('https://picsum.photos/v2/list')
//     //console.log(response);//promise {<pending>}-- kyuki axios jo data aata wo hota async ke form main 
//     // const data=response.data
//     // console.log(data);
//     setData(response.data)
    
    
    
    
//   }

//   //useEffect - aapke function ko side main simaltanosly work karta hai 

//   useEffect(() => {
//     getData()
//   }, [])
  
  
//   return (
//     <div className="p-10">
//       {/* <button onClick={getData} className="bg-teal-600 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90">Get Data</button> */}
//       <div className="p-5 mt-5 bg-gray-950">
//         {data.map(function (elem , idx){
//           return <div key={idx} className="bg-gray-50 text-black flex item-center justify-between w-full px-7 py-6 rounded mb-3 ">
//             <img className="h-40" src={elem.download_url} alt="" />
//             <h1 className="text-3xl">{elem.author}</h1>
//           </div>
//         })}
//       </div>

//     </div>
//   )

  /********this is use for practice card making by calling api  */
  // return (
  //   <div className="10">
  //     <button onClick={getData} className="bg-teal-600 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90">Get Data</button>
  //     <div className="p-5 mt-5 bg-gray-950">
  //       {data.map((elem,idx)=>{
  //         return <Card key={idx} username={elem.author} pic={elem.download_url} />
  //       })}
  //     </div>
  //   </div>
  // )
// }

// export default App

/****************REACT ROUTER DOM **************************/

//ROUTING mean ek page se dusre page oe jana jo ki react main directly posible nhi hai 
// jiske liye hum REACT ROUTING DOM KA USE KARTE HAI 
//REACT ROUTER DOM  it is external liberary which is use for routing in react 

// import React from 'react'
// import {Route,Routes} from 'react-router-dom'
// import About from './pages/About'
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Product from "./pages/Product";

// const App = () => {
//   return (
//     <div>
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path='/about' element={<About />}  />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/product" element={<Product />} />
//       </Routes>
//     </div>
//   )
// }

// export default App

import React from 'react'

const App = () => {
  return (
    <div>UserContext </div>
  )
}

export default App