import { useState } from "react";

const Parent=()=>{
    const [childData,setChildData]=useState('')

    const handleChildData=(data)=>{
        setChildData(data)
    }
    return(
        <>
        <p>{childData}</p>
        <Child sendToParent={handleChildData}/>
        </>
    )
}


const Child=({sendToParent})=>{

    const sendData=()=>{
        let data="Hello from Child"
        sendToParent(data)

    }
    return(
        <>
        <button onClick={sendData}>SendToParent</button>
        </>
    )
}
export default Parent