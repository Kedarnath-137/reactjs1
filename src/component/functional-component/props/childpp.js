




function Students (props){
    return(
        <>
        <p>name : {props.name}</p>
        <p>age : {props.age}</p>
        <p>students: {props.isStudent?"yes":"no"}</p>
        </>
    )
}

Students.defaultProps = {
   name:"guest",
   age: 0,
   isStuddent:false, 
}
export default Students