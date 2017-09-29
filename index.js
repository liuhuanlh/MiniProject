import React,{Component} from 'react'
import ReactDom from 'react-dom'

class APP extends Component{
    render(){
        return (
            <div>
                <h1>woca</h1>
            </div>
        )
    }
}

ReactDom.render(
    <APP/>,document.getElementById('demo')
)