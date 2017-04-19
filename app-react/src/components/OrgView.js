import React from 'react'
import { browserHistory } from 'react-router'

class OrgView extends React.Component {
constructor(props) {
        super(props)
        this.getOrgNeeds = this.getOrgNeeds.bind(this)

        this.state = {
            org: {}
        }
    }

     getOrgNeeds() {
        var token = sessionStorage.getItem('token')
        fetch('api/org/profile?token=' + token)
        .then(res => res.json())
       // .then(res => console.log(res)) 
        .then(res => {this.setState({user: res.user})})
    }

    componentDidMount() {
        this.getOrgNeeds()
    }

    viewOnboarding() {
        browserHistory.push('/causes')
    }

    render() {
        return  <div>
                   <ul className="list-unstyled text-center" id="user-profile-box">
                        <li className="text-uppercase text-center" id="username"><strong><h3>Humane Society of Indianapolis</h3></strong></li><br/>
                        <li className="text-uppercase text-center" id="location">Indianapolis, IN</li><br/>
                        <li><button type="button" className="btn btn-success btn-sm edit-profile">Edit Profile</button>
                        <button type="button" className="btn btn-danger btn-sm delete-profile">Delete Profile</button></li>
                    </ul>
                </div>
    }
}

export default OrgView