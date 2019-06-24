

import React from 'react'
import axios from 'axios'
import UserCard from './userCard'

class UserDropdown extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users:[],
            user:{}
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        const user = e.target.value
        console.log(user)
        this.setState(() => ({user}))
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
             .then(response => {
                 this.setState(() => ({
                     users: response.data
                 }))
             })
        }

      render(){
          return(
              <div>
                  <form>
                        <h3>Choose user:</h3>
                      <label>
                            <select value={this.state.user} onChange={this.handleChange}>    
                                    <option value=''>select</option>
                                    {this.state.users.map(userItem => {
                                        return <option key={userItem.id} value={userItem.id}>{userItem.name}</option>
                                    })}
                            </select>
                      </label>
                  </form>    
                  {Object.keys(this.state.user).length > 0 && <UserCard user={this.state.user}/>}
              </div>
          )
      }  
}

export default UserDropdown
