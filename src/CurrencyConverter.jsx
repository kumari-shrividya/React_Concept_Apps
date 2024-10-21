import {useState} from 'react'
const CurrencyConverter=()=>{

const [amount,setAmount]=useState(0)
const [currency,setCurrency]=useState('EUR')
const [convertedAmt,setConvertedAmt]=useState(0)

const excangeRates={
    EUR: 0.85,  // USD to Euro
    GBP: 0.75,  // USD to British Pound
    INR: 75.0,  // USD to Indian Rupee
    JPY: 110.0  // USD to Japanese Yen
}
   
const ConvertCurrency=()=>{

    let rate=excangeRates[currency]
    let calcValue=rate*amount
    setConvertedAmt(calcValue.toFixed(2))

}

return(
    <div>
        <h4>Currency Converter</h4>
         <label>Amount in USD:</label>
        <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        {/* <p>you entered:{amount}</p> */}

        <div>
        <label>Convert to:</label>
         <select value={currency} onChange={(e)=>setCurrency(e.target.value)}>
          {/* <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="INR">INR - Indian Rupee</option>
          <option value="JPY">JPY - Japanese Yen</option> */}

           <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
          <option value="JPY">JPY</option>
        </select>
        </div>
      
            <button onClick={ConvertCurrency}>Convert</button>
     
       
        <p>{`Converted Amount:${convertedAmt}   ${currency}`}</p>
        
    </div>
)


}
export default CurrencyConverter