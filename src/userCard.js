import React from 'react'
import axios from 'axios'

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap'

class UserCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            result: {},
            user: props.user
        }
    }

    static getDerivedStateFromProps(props,state){
        if(props.user !== state.user){
            return{
                user: props.user
            }
        }else{
            return null
        }
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.user}`)
             .then(response => {
                 this.setState(() => ({
                     result: response.data
                 }))
        })
    }

    componentDidUpdate(){
        if(this.state.user){
            axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.user}`)
             .then(response => {
                 this.setState(() => ({
                     result: response.data
                 }))
             })
        }
    }

        render(){
            return(
                <div>
                     <Card body inverse style={{ backgroundColor: '#305', borderColor: '#333' }}>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="CARD" />
                        <CardBody>
                        <CardTitle color="success">-----USER-----</CardTitle>
                        <CardSubtitle>-----User details-----</CardSubtitle><br/>
                        <CardText>
                            Name :{this.state.result.name}<br/>
                            email : {this.state.result.email}<br/>
                            phone : {this.state.result.phone}<br/>
                            website : {this.state.result.website}<br/>
                        </CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
}

export default UserCard