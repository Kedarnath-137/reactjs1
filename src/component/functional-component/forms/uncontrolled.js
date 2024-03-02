import { useRef } from "react"






const Uncontrolled =() =>{
const usernameRef = useRef(null);
const passwardRef = useRef(null);



const handleSubmit =(event)=>{
    event.preventDefault()
    console.log("focus me", usernameRef.current );
    console.log("focus me", usernameRef);
    console.log("focus me", usernameRef.current.focus(),usernameRef.current.value);
    console.log("username",usernameRef.current.value);
    console.log("passward",passwardRef.current.value);

    const username = usernameRef.current.value
    const password = passwardRef.current.value
    if(username.length > 5){
        alert('enter username less than 5 characters')
    }
    if(password.length>10){
        alert('enter password less than 10 character')
    }
}

    return(
        <>
        <h2>Uncontrolled component example</h2>
        <form onSubmit={handleSubmit}>
            <input type ="text" name="username" ref={usernameRef} />
            <input type="password" name ="passward" ref={passwardRef}/>
            <input type="submit"/>

            {/* <button onClick={handleFocus}>focus on point</button> */}
        </form>
        </>

    )
}

export default Uncontrolled;