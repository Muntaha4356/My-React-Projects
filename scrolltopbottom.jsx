import React, {useState, useEffect} from "react";
function ScrollTopBottom(){
    const [List, setList]= useState([])
    const [windowstart, setWindowstart]= useState(0)
    function scrolltobottom(){
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    }
    function scrolltotop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return(<>
    <h1>    hello   </h1>
    <button className="tobottom" onClick={scrolltobottom}>To Bottom</button>
    {[...Array(100)].map((_, index) => (
        <p key={index} className="para">H1 Element {index + 1}</p>
      ))}
    <button className="tobottom" onClick={scrolltotop}>To Top</button>
    </>
    )
    
}
export default ScrollTopBottom