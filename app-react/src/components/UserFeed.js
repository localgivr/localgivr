import React from 'react'
import { browserHistory } from 'react-router'
import GiveCard from './GiveCard'
import './css/give.css'

class UserFeed extends React.Component {
    constructor(props) {
        super(props)
        this.getFeed = this.getFeed.bind(this)

        this.state = {
            needs: []
        }
    }

    getFeed() {
        fetch('/api/users/3')
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(res => this.setState({needs: res.needs}))
    }

    componentDidMount() {
        this.getFeed()
    }

    render() {
        let UserCards = this.state.needs.map((need, i) => {
            return <GiveCard {...need}  key={i} /> 
        })

       return <div className="container">
        <div className="row">
           <div className="col-sm-6"> 
            {UserCards}
           </div>
        </div>
    </div>
    }
}

export default UserFeed