import React from 'react'
import { browserHistory } from 'react-router'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

// set setState on onClick for checkboxes 

class UserOnboard extends React.Component {
    constructor(props) {
        super(props)
        this.give = this.give.bind(this)
        this.getOrgs = this.getOrgs.bind(this)

        this.state = {
            orgs: []
        }
    }

     getOrgs() {
        fetch('/api/orgs')
        .then(res => res.json())

        .then(res => this.setState({orgs: res.orgs}))
    }

     give() {
        browserHistory.push('/give')
    }

    componentDidMount() {
        this.getOrgs()
    }

    render() {
        
        let orgs = this.state.orgs.map((org, i) => <li>
            <div className="list-unstyled checkbox">
                <label>
                    <input type="checkbox"  value={org.name} /> {org.name}
                </label></div></li>)


        return <div className="container">
    <div className="row">
    <div className="col-sm-6">
        <h3>What causes are meaningful to you? </h3>

        <div className="checkbox">
            <label>
                <input type="checkbox" value="animal" />
                Animal Rights
            </label>
        </div>
        <div className="checkbox">
            <label>
                <input type="checkbox" value="education" />
                Education
            </label>
        </div>
        <div className="checkbox">
            <label>
                <input type="checkbox" value="community" />
                Community
            </label>
        </div>  
        <div className="checkbox">
            <label>
                <input type="checkbox" value="health" />
                Health 
            </label>
        </div>   
        <div className="checkbox">
            <label>
                <input type="checkbox" value="environment" />
                Environment
            </label>
        </div> 
        <div className="checkbox">
            <label>
                <input type="checkbox" value="social" />
                Social Justice
            </label>
        </div> 
    </div>
    <div className="col-sm-6">
        <h3>What organizations are meaningful to you?</h3> <br/><br/>
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