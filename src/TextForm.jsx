import React from "react";

const TextForm = (props) => {
    
    const [value,setValue]=React.useState('Enter Text')

    const handleClick1=(e)=>{
        setValue(value.toUpperCase())
        props.showAlert("Changed to uppercase","success")

    }
    const handleClick2=(e)=>{
        setValue(value.toLowerCase())
        props.showAlert("Changed to lowercase","success")

    }
    const handleClick3=(e)=>{
        setValue('')
        props.showAlert("Reset","success")

    }
    const handleCopy=()=>{
      const text=document.getElementById('myBox')
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showAlert("Text copied","success")
    }
    const handleExtraSpaces=()=>{
     let  newText=value.split(/[ ]+/)
      setValue(newText.join(' '))
      props.showAlert("Space removed","success")
    }

    return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>

        <textarea className="form-control" value={value} id="myBox" 
        onChange={(e)=>setValue(e.target.value)} rows="8"
        style={{backgroundColor:props.mode==='dark' ? 'gray' :'white' }}         
          
          ></textarea>
      </div>
      <button className="btn btn-primary m-3" onClick={handleClick1}>Change To UpperCase</button>
      <button className="btn btn-primary  m-3" onClick={handleClick2}>Change To LowerCase</button>
      <button className="btn btn-primary m-3" onClick={handleClick3}>Clear</button>
      <button className="btn btn-primary m-3" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

      <div className="container">
        <h1>Text summary</h1>
        <p> {value.split(' ').length >0? value.split(' ').length + 'words' : ' 0 words'}  and {value.length} characters</p>
        <p>{value.length===0 ? 'Enter something to preview':'preview'}</p>
        <p>{value}</p>
      </div>
    </div>

  );
};

export default TextForm;
