import { forwardRef } from "react"

const ParentComp=forwardRef((props,ref)=>{
   // console.log("ParentComp rendered");

    return(
        <input type='text' ref={ref}/>
    )



})
export default ParentComp