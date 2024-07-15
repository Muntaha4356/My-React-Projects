import React, {useState, useEffect} from "react";

function Scroll(){

    const [progressWidth, setProgressWidth] = useState(20);
    const [abilities, setAbilities]= useState([])
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    
    function handleScroll(){
        const windowHeight= window.innerHeight;
        const documentHeight= document.documentElement.scrollHeight;
        const scrolly= window.scrollY;
        // calculating the current scroll percentage
        const scrollPercent= Number((scrolly/ (documentHeight- windowHeight))) *100
        setProgressWidth(scrollPercent)
    }
    
    return(<>


    <div className="scoll">
        <div className="scroll-filler" style={{height:"100%", backgroundColor:"green", width:`${progressWidth}%`, borderRadius: "13px"}}></div>
    </div>
    <h1>Pokemon Data</h1>
    <div className="scoll-indicator">
    <h1>Abilities</h1>
    {[...Array(1000)].map((_, index) => (
        <p key={index + abilities.length} className="para">H1 Element {index + 1}</p>
      ))}
    </div>
    
    
    </>)
    
}
export default Scroll