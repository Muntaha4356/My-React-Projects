import { useState } from "react"
import QRCode from "react-qr-code"

function QRcode(){
    const [text, setText]= useState('Hello')
    return(
        <>
            <h1>QR Code Generator</h1>
            <div>
                <input value={text}
        onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter the CODE" />
                {/* <button onClick={()=> setClicked(true)}>Generate</button> */}
                <QRCode
                size={200} bgColor="WHITE" fgColor="black" value={text}/>
                

            </div>
            <div>
                
            </div>
        </>
    )
}
export default QRcode