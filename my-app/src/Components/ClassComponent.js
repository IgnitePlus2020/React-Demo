import React, { Component } from 'react'

export class ClassComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             myname: "abs",
             myrole: "Software Eng"
        }
    }
    componentDidMount = () =>{
        
        
    }

    render() {
        return (
            <div>
                <p>Name: {this.props.myname}</p>
                <p>Role: {this.state.myrole}</p>
            </div>
        )
    }
}

export default ClassComponent
