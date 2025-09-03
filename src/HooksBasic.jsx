import {useState} from 'react';
const HookComp=()=>{
    const [testing,setTesting]=useState("Works fine, I guess")
        return(
                <div>
                    <h2>About Hooks/usestate, {testing}</h2>
                </div>
            )
    }
export default HookComp;