import React from 'react'
import ReactDOM from 'react-dom'
import UserDropdown from './userDropdown'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
    render(){
        return(
            <div>
                <UserDropdown />
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))