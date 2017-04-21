import React from 'react'
//import { browserHistory } from 'react-router'
import GiveCard from './GiveCard'
import ProfileView from './ProfileView'
import './css/give.css'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.getFeed = this.getFeed.bind(this)
        this.kickNeed = this.kickNeed.bind(this)

        this.state = {
            needs: []
        }
    }

    getFeed() {
        var token = sessionStorage.getItem('token')

        fetch('/api/users/feed?token=' + token)
        .then(res => res.json())
         //.then(res => console.log(res))
        .then(res => this.setState({needs: res.needs}))
    }

    kickNeed(index) {
      //remove element with id/index from needs array
      var arr = this.state.needs
      arr.splice(index, 1)
      this.setState({needs: arr})
    }

    componentDidMount() {
        this.getFeed()
    }

    render() {
        let UserCards = this.state.needs.map((need, i) => {
            return <GiveCard {...need}  key={i} kickNeed={this.kickNeed} index={i} />
        })

        return <div className="container-fluid prof-background">
            <div className="row">
                <ProfileView />
            </div>
            <div className="row">
                    <div>{UserCards}</div>
                </div>
        </div>
    }
}

export default UserProfile
