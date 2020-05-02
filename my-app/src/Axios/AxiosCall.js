import React, { Component } from 'react'
import axios from 'axios'


export class AxiosCall extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             myData : []
        }
    }

    

    apicall = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            response =>{
                this.setState({myData:response.data})
                console.log(this.state.myData)
            }

        )

        
    }
    
    
    render() {
        return (
            <div>
              <button onClick = {(event)=>this.apicall(event)}>Show Table</button>
              <table border = "1" width="1200">
                  <tr>
                      <td><h5>ID</h5></td>
                      <td><h5>NAME</h5></td>
                      <td><h5>USERNAME</h5></td>
                  </tr>
                  {this.state.myData.map((item,index)=>{
                      return(
                          <tr>
                              <td><h6> {item.id}</h6></td>
                              <td><h6> {item.name}</h6></td>
                              <td><h6> {item.username}</h6></td>
                          </tr>
                      )
                  })}



              </table>

            </div>
        )
    }
}

export default AxiosCall
