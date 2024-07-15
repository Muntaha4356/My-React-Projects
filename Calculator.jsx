import React, {useState} from "react"
function Calculator(){
    const [value, setValue]= useState("")
    function manageCalculator(event){
        const clickedValue= event.target.innerText;
        console.log(clickedValue)
        if(clickedValue==="="){
            setValue(eval(value).toString())
        }
        else if(clickedValue==="C"){
            setValue("")
        }
        else if(clickedValue==="Del"){
            let newValue= value.slice(0,-1);
            setValue(newValue)
        }
        else{
            setValue(value+ clickedValue)
        }

    }
    return(
        <>
        <div className="Calculator-container">
            <div className="input">
                <input type="text" name="Enter" id="screen" value= {value}placeholder={value} />

            </div>
            <div className="buttons">
                <button onClick={manageCalculator} className="buttons-for-alculator" id="1">1</button>
                <button onClick={manageCalculator} className="buttons-for-alculator" id="2">2</button>
                <button onClick={manageCalculator} className="buttons-for-alculator" id="3">3</button>
                <button onClick={manageCalculator} className="buttons-for-alculator" id="+">+</button>
                <button onClick={manageCalculator} className="buttons-for-alculator" id="4">4</button>
                <button onClick={manageCalculator} className="buttons-for-alculator" id="5">5</button>
                <button onClick={manageCalculator} className="buttons-for-alculator" id="6">6</button>
                <button onClick={manageCalculator} className="buttons-for-alculator" id="-">-</button>
                <button onClick={manageCalculator} className="buttons-for-alculator" id="7">7</button>
                <button onClick={manageCalculator} className="buttons-for-alculator" id="8">8</button>
                <button onClick={manageCalculator} className="buttons-for-alculator" id="9">9</button>
                <button onClick={manageCalculator} className="buttons-for-alculator" id="*">*</button>
                <button onClick={manageCalculator} className="buttons-for-alculator" id=".">.</button>
                <button onClick={manageCalculator} className="buttons-for-alculator" id="0">0</button>
                <button onClick={manageCalculator} className="buttons-for-alculator" id="=">=</button>
                <button onClick={manageCalculator} className="buttons-for-alculator" id="/">/</button>
                <button onClick={manageCalculator} className="buttons-for-alculator" id="C">C</button>
                <button onClick={manageCalculator} className="buttons-for-alculator" id="Del">Del</button>
            </div>
        </div>
        </>
    )
}
export default Calculator