import { useState } from "react"

function StarRating(){
    const rating= Array(10).fill(null)
    const [isSelected, setIsSelected]= useState([]);
    const [isHovered, setIsHovered]= useState([])
    function handleClick(index){
        const selectedNumbers = [...Array(index + 1).keys()];
        setIsSelected(selectedNumbers)
    }
    function handleHover(index){
        setIsHovered(index+1)

        

    }

    return(
        
        <>
        <div className="starscontainer">
            {rating.map((_, index)=> <i key={index} style={{ color: isSelected.includes(index) || isHovered > index  ? "yellow" : ""} } 
            onClick={()=>handleClick(index)} 
            onMouseMove={() => handleHover(index)} 
            onMouseLeave={() => {setIsHovered([]);
                console.log(`it left and array is ${isHovered}`)
            }}
          className='star${index+1} bx bxs-star'></i>)}
        </div>
            
        </>
    )
}
export default StarRating