import { useNavigate } from "react-router-dom"






const InvalidScreen = ()=>{
    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate('/')
    }
    return(
        <>
        <h2>404 error</h2>
        <button onClick={handleNavigate}>go to home</button>
        </>
    )
}

export default InvalidScreen