import {useState} from 'react';{/*Import usestate*/}
const HookComp=()=>{
    const [testing,setTesting]=useState("Works fine, I guess"){/*Inbuilt function useState*/}
        return(
                <div>
                    <h2>About Hooks/usestate, {testing}</h2>{/*Print it using variable*/}
                </div>
            )
    }
export default HookComp;