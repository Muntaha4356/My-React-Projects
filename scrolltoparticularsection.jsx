import React, {useRef} from "react"
function ScrollParticular(){
    const ref1= useRef()
    const ref2= useRef()
    const ref3= useRef()
    const ref4= useRef()
    const ref5= useRef()
    const ref6= useRef()
    function scroll1(){
        let pos= ref1.current.getBoundingClientRect().top;
        window.scrollTo({
            top:pos,
            behavior: "smooth"
        })
    }
    function scroll2(){
        let pos= ref2.current.getBoundingClientRect().top;
        window.scrollTo({
            top:pos,
            behavior: "smooth"
        })
    }
    function scroll3(){
        let pos= ref3.current.getBoundingClientRect().top;
        window.scrollTo({
            top:pos,
            behavior: "smooth"
        })
    }
    function scroll4(){
        let pos= ref4.current.getBoundingClientRect().top;
        window.scrollTo({
            top:pos,
            behavior: "smooth"
        })
    }
    function scroll5(){
        let pos= ref5.current.getBoundingClientRect().top;
        window.scrollTo({
            top:pos,
            behavior: "smooth"
        })
    }
    function scroll6(){
        let pos= ref6.current.getBoundingClientRect().top;
        window.scrollTo({
            top:pos,
            behavior: "smooth"
        })
    }
    
    return(
        <>
        <button onClick={scroll1} className="box1">Box1</button><button onClick={scroll2} className="box2">Box2</button><button onClick={scroll3} className="box3">Box3</button><button onClick={scroll4} className="box4">Box4</button><button onClick={scroll5} className="box5">Box5</button><button onClick={scroll6} className="box6">Box6</button>
        <div ref={ref1} className="box" id="1" style={{backgroundColor:'gray', fontSize: '2rem'}}>Box1</div>
        <div ref={ref2} className="box" id="2" style={{backgroundColor:'gray', fontSize: '2rem'}}>Box2</div>
        <div ref={ref3} className="box" id="3" style={{backgroundColor:'gray', fontSize: '2rem'}}>Box3</div>
        <div ref={ref4} className="box" id="4" style={{backgroundColor:'gray', fontSize: '2rem'}}>Box4</div>
        <div ref={ref5} className="box" id="5" style={{backgroundColor:'gray', fontSize: '2rem'}}>Box5</div>
        <div ref={ref6} className="box" id="6" style={{backgroundColor:'gray', fontSize: '2rem'}}>Box6</div>
        </>
    )
}
export default ScrollParticular