
import { useState,useRef,useEffect } from 'react'

const StopWatch=()=>{

    const [time,setTime]=useState(0)
     const [isRunning,setIsRunning]=useState(false)
     const timeRef=useRef(0)

    const handleStart=()=>{

        if(!isRunning){
        setIsRunning(true)
        timeRef.current=setInterval(()=>setTime(prevTime=>prevTime+1),1000)
        }       
    }
    const handleStop=()=>{

        if(isRunning){
            setIsRunning(false)

            clearInterval( timeRef.current)
        }
   
    }
    const handleReset=()=>{
      
        clearInterval( timeRef.current)
        setIsRunning(false)
        setTime(0)

    }
      // Cleanup the interval when component unmounts
     useEffect(() => {
        return () => clearInterval(timeRef.current);
      }, []);
    
     return(
        <div>
            <h3>StopWatch</h3>
        <p>Time:{time} seconds</p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
        </div>   

    )
}
export default StopWatch

