import { Component } from "react"
import axios from "axios"




class DataTable extends Component{
    constructor(){
        super()
        this.state={
            item:[]
        }
    }
    

      fetchData = ()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>this.setState({
            item:res.data}))
        .catch((err)=>console.error(err))
    }

    render(){
        
        return(
            <>
            <h2>table Component</h2>
            <button onClick={this.fetchData}>get table</button>
            <table style={tableStyle}>
            <tr>
                <th style={table1}>id</th>
                <th style={table1}>title</th>
                <th style={table1}>description</th>
                <th style={table1}>price</th>
                <th style={table1}>image</th>
                <th style={table1}>rate</th>
            </tr>
            {
                this.state.item.map((eachObject) =>{
                    return(
                        
                        <tr keys={eachObject.id} >
                            <td style={table1}>{eachObject.id}</td>
                            <td style={table1}>{eachObject.title}</td>
                            <td style={table1}>{eachObject.category}</td>
                            <td style={table1}>{eachObject.price}</td>
                            <td style={table1}><img src={eachObject.image} width={50}/></td>
                            <td style={table1}>{eachObject.rating.rate}</td>
                        </tr>
                        
                    )
                })

            }

            </table>
            </>

        )
    }
}

const table1={
    border :'2px solid black',
    borderCollapse:'collapse',
    padding:'10px',
    textAlign:'center',
    // margin:'auto ',

}
export default DataTable



const tableStyle ={
    margin: 'auto',
    
    }