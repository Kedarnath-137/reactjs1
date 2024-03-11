
import React from "react";


function Child (){
    console.log("child rendering");
    return(
        <>
        <h2>child</h2>
        </>

    )
}

export default React.memo(Child)