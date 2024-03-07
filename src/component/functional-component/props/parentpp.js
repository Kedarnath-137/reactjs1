import Students from "./childpp"

function Parentpp (){
    return(
        <>
        <Students name = "kedarnath" age={22} isStudent={true}/>
        <Students name = {"sai"} age={25} isStudent={false}/>
        <Students name = {'aravind'}/>
        </>
    )
}
export default Parentpp