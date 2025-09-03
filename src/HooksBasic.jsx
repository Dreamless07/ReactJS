import {useState,useEffect} from 'react';//Import useState and useEffect
const HookComp=()=>{
    const [testing,setTesting]=useState("Works fine, I guess");//*Inbuilt function useState
    //useEffect(()=>{here will be the actual code},[an inbuilt array]) (for errors like infinite loops )
        return(
                <div>
                    <h2>About Hooks/usestate, {testing}</h2>{/*Print it using variable*/}
                    <button onClick={()=>setTesting("You just changed it")}> Click Here </button>{/*Modified through setTesting*/}
                </div>
            )
    }
export default HookComp;