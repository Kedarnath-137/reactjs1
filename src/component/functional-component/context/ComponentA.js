
import { useState } from "react";
import ComponentB from "./ComponentB";

function ComponentA (){
    const [data,setData] = useState("kedarnath")
    return(
        <div>
            <ComponentB  name={data}/>
        </div>
    )
}

export default ComponentA;