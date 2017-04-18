import React from 'react'
import { browserHistory } from 'react-router'
import { Button } from 'react-bootstrap'

// set setState on onClick for checkboxes 

class UserOnboard extends React.Component {
    constructor(props) {
        super(props)
        this.give = this.give.bind(this)
        this.getOrgs = this.getOrgs.bind(this)
        this.getCats = this.getCats.bind(this)

        this.state = {
            orgs: [],
            cats: []
        }
    }

    getOrgs() {
        fetch('/api/orgs')
        .then(res => res.json())
        .then(res => this.setState({orgs: res.orgs}))
    }

    getCats() {
        fetch('/api/cats')
        .then(res => res.json())
        .then(res => this.setState({cats: res.cats}))
    }

    toggleCausesFollow(e) {
        let token = sessionStorage.getItem('token')
        let id = e.target.getAttribute('data-id')

            fetch('/api/cats/' + id + '/follow?token=' + token, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: token,
                    id: e.target.getAttribute('data-id')
                })
            })
    }

        toggleOrgsFollow(e) {
        let token = sessionStorage.getItem('token')
        let id = e.target.getAttribute('data-id')

            fetch('/api/orgs/' + id + '/follow?token=' + token, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: token,
                    id: e.target.getAttribute('data-id')
                })
            })
    }

     give() {
        browserHistory.push('/give')
    }

    componentDidMount() {
        this.getOrgs()
    }

    render() {
        let orgs = this.state.orgs.map((org, i) => <li>
            <div className="checkbox">
                <label>
                    <input type="checkbox" data-id={org.id} value={org.name} /> {org.name}
                </label></div></li>)

    return <div className="container">
    <div className="row">
        <div className="col-sm-6">
            <h3>What causes are meaningful to you? </h3> <br/>
            <div className="checkbox">
                <label>
                    <input type="checkbox" data-id="1" value="animal" />
                    Animal Rights
                </label>
            </div>
            <div className="checkbox">
                <label>
                    <input type="checkbox" data-id="4" value="education" />
                    Education
                </label>
            </div>
            <div className="checkbox">
                <label>
                    <input type="checkbox" data-id="3" value="community" />
                    Community
                </label>
            </div>  
            <div className="checkbox">
                <label>
                    <input type="checkbox" data-id="5" value="health" />
                    Health 
                </label>
            </div>   
            <div className="checkbox">
                <label>
                    <input type="checkbox" data-id="6" value="environment" />
                    Environment
                </label>
            </div> 
            <div className="checkbox">
                <label>
                    <input type="checkbox" data-id="7" value="social" />
                    Social Justice
                </label>
            </div> 
        </div>
        <div className="col-sm-6">
            <h3>What organizations are meaningful to you?</h3> <br/>
            <ul className="list-unstyled">
                {orgs}
            </ul>
        </div>     

        </div> 
        <br/><br/><br/>
        <div className="row text-center give-button">
            <Button bsStyle="success" bsSize="large" onClick={this.give}>Start Giving</Button>        
        </div>
        <br/><br/>               
                
    </div>
    }
}

export default UserOnboard