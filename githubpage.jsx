
import React, {useState, useEffect} from "react";
function GitHub(){
    const [isLoading, setIsLoading]= useState(false)
    const [user, setUser]= useState("Muntaha4356")
    const [profilelink, setProfilelink]= useState('')
    const [profileName, setProfileName]= useState('')
    const [loginId, setLogId]= useState('')
    const [bio, setBio]= useState('')
    const [urlprofile, setUrlprofile ] = useState(``)
    const [inputValue, setInputValue] = useState('');
    const API= `https://api.github.com/users/${user}`
    const fetchApiData= async (url) => {
    try{
        const response= await fetch(url);
        const data= await response.json();
        
        setIsLoading(false)
        console.log(data)
        setIsLoading(false)
        console.log(data.avatar_url)
        setProfilelink(data.avatar_url)
        console.log(data.name)
        setProfileName(data.name)
        setLogId(data.login)
        setBio(data.bio)
        setUrlprofile(data.html_url)
        
        return(data)
    } catch(error){
        console.log(error)
    }}

useEffect(()=>{
    fetchApiData(API)
},[])
if(isLoading){
    return <>
    <h1>Loading....</h1>
    </>
}
function handleClick(){
    setIsLoading(true)
    setUser(inputValue);
}
    return(
        <>
        <div className="container">
            <div className="search">
                <input type="text" className="input" onChange={(e) => setInputValue(e.target.value)} />
                <button className="submit" onClick={handleClick}>Go</button>
            </div>
            <div className="pic">
            <img src={profilelink} alt="photo" className="image" />
            </div>
            <div className="info">
                <div className="profile-name">{profileName}</div>
                <div className="login-id">{loginId}</div>
                <div className="bio">{bio}</div>
            </div>
            <div className="visits">
                <a href={urlprofile} target="blank">Visit</a>
            </div>
        </div>
            
        </>
    )
}
export default GitHub