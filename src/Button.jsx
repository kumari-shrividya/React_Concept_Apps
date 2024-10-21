import React from 'react'

const Button = (props) => {

  return (    

      <button style={{backgroundColor:'darkblue',color:'white', width:'150px'}}>{props.children}</button>
   
 )
}

export default Button
