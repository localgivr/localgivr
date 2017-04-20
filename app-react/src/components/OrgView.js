import React from 'react'
import { browserHistory } from 'react-router'

class OrgView extends React.Component {
constructor(props) {
        super(props)
        this.getOrgNeeds = this.getOrgNeeds.bind(this)
        this.makeRequest = this.makeRequest.bind(this)

        this.state = {
            org: {}
        }
    }

     getOrgNeeds() {
        var token = sessionStorage.getItem('token')
        fetch('api/orgs/profile?token=' + token)
        .then(res => res.json())
       // .then(res => console.log(res)) 
        .then(res => {this.setState({org: res.org})})
    }

    componentDidMount() {
        this.getOrgNeeds()
    }

    makeRequest() {
        browserHistory.push('/request')
    }

    render() {
        return  <div className="col-sm-6 col-sm-offset-3">
                   <ul className="list-unstyled text-center" id="user-profile-box">
                        <li className="text-uppercase text-center" id="username"><strong><h3>{this.state.org.name}</h3></strong></li><br/>
                        <li className="text-uppercase text-center" id="location">{this.state.org.city}, {this.state.org.state}</li><br/>
                        <li><button type="button" className="btn btn-sm to-request" onClick={this.makeRequest}>Make Request</button></li>
                    </ul>
                </div>
    }
}

export default OrgView