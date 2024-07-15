import React, {useState, useRef} from "react"
function Accordion(){
    const [isActive, setIsActive]= useState([])
    const [multienabled, setMultienabled]= useState(false)
    const questions = [
        "What is an Accordion?",
        "Why is Accordion used?",
        "How to build an Accordion?",
        "Why is it important to have Accordion?"
      ];
      const answers = [
        "An accordion is a UI component that allows users to expand and collapse sections of content. It's useful for presenting a lot of information in a compact and organized way.",
        "Accordions are used to improve the user experience by allowing users to focus on specific pieces of information at a time. They're particularly helpful when dealing with lengthy content or FAQs.",
        "Building an accordion in React involves managing state to track the active item and conditionally rendering content based on that state. You can use approaches like refs or libraries for more complex behavior.",
        "Accordions are important because they enhance the user experience by making content discoverable and easier to navigate. They help users find the information they need quickly and efficiently."
      ];
    function manageMultiEnabled(){
        if(!multienabled){
            setMultienabled(true)
        }
        else{
            setMultienabled(false)
        }
    }
    function clicked(index){
        if(multienabled===false){
            setIsActive(index===isActive ? [] : [index] )
            // console.log(index)
        }
        else{
            if(isActive.includes(index)){
                setIsActive(isActive.filter(i => i!== index))
                console.log(isActive)
            }
            else{
                setIsActive([...isActive, index])
            }
        }

    }
    if(isActive.includes(1)){
        console.log("hi")
        console.log(isActive)
    }
    else{
        console.log("bye")
        console.log(isActive)
    }
    return(<>
    <div className="Acc-container">
        <button id="Multiple-Option" onClick={manageMultiEnabled}>{multienabled? "Disable Multi Selection" : "Enable Multi Selction"}</button>
        {questions.map((item,index)=>(
            <div key={index} className={"box box${index+1}"}>
                <h1 className={"ques ques${index+1}"} onClick={()=>clicked(index)}>{item}</h1>
                {isActive.includes(Number(index)) && <p className={"answer answer${index+1}"}>{answers[index]}</p>}
            </div>
        ))}
        
        
        
    </div>
    </>)
}
export default Accordion