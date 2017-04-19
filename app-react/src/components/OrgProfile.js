import React from 'react'
import './css/profile.css'
import GiveCard from './GiveCard'

class OrgProfile extends React.Component {
    constructor(props) {
        super(props)
        this.getOrgNeeds = this.getOrgNeeds.bind(this)

        this.state = {
            needs: [] 
        }
    }

    getOrgNeeds() {
        var token = sessionStorage.getItem('token') 

        fetch('/api/orgs/needs?token=' + token)
        .then(res => res.json())
        //.this(res => console.log(res))
        .then(res => this.setState({needs: res.needs}))
    }

    componentDidMount() {
        this.getOrgNeeds()
    }

    render() {
        let OrgCards = this.state.needs.map((need, i) => {
            return <GiveCard {...need} key={i} />
        })

        return <div className="container">
            <div className="row">
                <div className="col-sm-5">
                    <ul className="list-unstyled text-center" id="user-profile-box">
                        <li className="text-uppercase text-center" id="username"><strong><h3>Humane Society of Indianapolis</h3></strong></li><br/>
                        <li className="text-uppercase text-center" id="location">Indianapolis, IN</li><br/>
                    </ul>
                </div>
                <div className="col-sm-6 requests">
                    <div className="row">
                        <h2>Open Requests</h2>
                        {OrgCards}
                    </div>    
                </div>
            </div>
        </div>    
    }
}

export default OrgProfile