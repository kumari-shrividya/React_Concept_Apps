import {forwardRef} from 'react'

const UserRef=(props,ref1)=>{

    return(
        <div>
           <input type='text' ref={ref1}/>
        </div>
  
    )
}
export default forwardRef(UserRef)