import React, { useState, useEffect, useRef } from "react";

function ImageSlider(){
    const  [isLoading, setIsLoading]= useState(true)
    const [currentIndex, setCurrentIndex]= useState(1)
    const [images, setImages]= useState([])
    const [search, setSearch]= useState("comedy")
    let API= `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=6BhhpX2vh5E7EgyXZVQt4KEqsVcTuOBPaqLOY6BlNfc`
    const fetchApiData= async (url) => {
        try{
            const response= await fetch(API);
            const data= await response.json();
            
            setIsLoading(false)
            setImages(data.results)
            console.log(images)
            return(data)
        } catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchApiData(API)
    },[])
    if(isLoading){
        return <>
        <h1>Loading....</h1>
        </>
    }
    function displayimagePrev(i){
        console.log(currentIndex)
        currentIndex >0 ? setCurrentIndex(i-1): ""
    }
    function displayimageNext(i){
        currentIndex <images.length-1 ? setCurrentIndex(i+1) : ""
    }
    

    return (
        <>
            <h2>Image Slider</h2>
            <div className="imagecontainer">
                <i className='icon bx bx-chevron-left icon1' onClick={()=>{displayimagePrev(currentIndex)}} style={{ display: currentIndex === 0 ? "none" : "block" }}></i>
                <img className={"ImageSlider-image"} src={images[currentIndex].urls.regular} alt="None" />
                <i className='icon bx bx-chevron-right icon2' onClick={()=>{displayimageNext(currentIndex)}} style={{ display: currentIndex === images.length - 1 ? "none" : "block" }}></i>
            </div>
        </>
    )
}
export default ImageSlider