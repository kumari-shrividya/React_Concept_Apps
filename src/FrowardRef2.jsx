import {useRef} from 'react'

import UserRef from './UserRef'


const ForwardRef2=()=>{
    let inpRef=useRef(null)

    function update(){
        inpRef.current.value="2000"
    }
    return (
        <>
        {/* ref  */}
        <UserRef ref={inpRef}/>
        <button onClick={update}>ChangeRefValue</button>
        </>
        
    )
}
export default ForwardRef2