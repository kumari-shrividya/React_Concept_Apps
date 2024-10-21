import {useRef,useEffect} from 'react'

import ParentComp from './ForwardRef'

const ChildComp=()=>{

    let inputRef=useRef(null)
    // useEffect(() => {
    //     console.log("inputRef after rendering:", inputRef.current);
    // }, []); // This ensures the effect runs after the first render


const updateInput=()=>{

    if (inputRef.current) {

      inputRef.current.value='1000'
    inputRef.current.style.color='red'
    }
    else{
        console.error('inputRef is not attached to the DOM element yet.');
    }

}
    
    return(
        <>
         <ParentComp ref={inputRef}/>
         <button onClick={updateInput}>Change</button>
        </>
       
    )

}
export default ChildComp