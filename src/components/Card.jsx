// import React from 'react'

// //props ek object hai 
// const Card = (props) => {
//     //console.log(props.myUser);
    
//   return (
//     <div>
//         <h1 className='text-3xl'>username is {props.myUser} </h1>
//     </div>
//   )
// }

// export default Card

import React from 'react'

const Card = (props) => {

  return (
    <div className='mr-5 mt-5 bg-white text-black inline-block p-6 text-center rounded '>
        <img className=' ml-6 mr-6 h-40 w-40 rounded-full mb-3' src={props.pic} alt="" />
        <h1 className='text-2xl font-semibold mb-4'>{props.username} </h1>
        <h2 className='text-blue-400'>{props.profession}</h2>
        <h3>{props.city}, {props.age} </h3>
        <button className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add Friend </button>
    </div>
  )
}

export default Card