import React from 'react'
import './css/profile.css'
import GiveCard from './GiveCard'
import OrgView from './OrgView'

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

        return <div className="container-fluid prof-background">
            <div className="row">
                    <OrgView/>
            </div>
            <div className="row requests">
                <h2 className="text-center">Open Requests</h2>
                {OrgCards}
            </div>    
        </div>  
    }
}

export default OrgProfile