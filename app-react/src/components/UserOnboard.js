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
            cats: [],
            // user: {}
        }
    }

    getOrgs() {
        var token = sessionStorage.getItem('token')
        fetch('/api/orgs?token=' + token)
            .then(res => res.json())
            .then(res => this.setState({ orgs: res.orgs }))
    }

    getCats() {
        var token = sessionStorage.getItem('token')
        fetch('/api/cats?token=' + token)
            .then(res => res.json())
            .then(res => this.setState({ cats: res.cats }))
    }

    // getProfile() {
    //     var token = sessionStorage.getItem('token')
    //     fetch('/api/profile')
    //     .then(res => res.json())
    //     .then(res => this.setState({orgs: res.orgs}))
    // }

    toggleCausesFollow(e, i) {
        let token = sessionStorage.getItem('token')
        let id = e.target.getAttribute('value')

        fetch('/api/cats/' + id + '/follow?token=' + token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: token,
                id: id
            })
        })
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => {
            let cats = this.state.cats
            cats[i].followed = (response.message === 'followed')
            this.setState({cats: cats})
        })
    }

    toggleOrgsFollow(e, i) {
        let token = sessionStorage.getItem('token')
        let id = e.target.getAttribute('value')

        fetch('/api/orgs/' + id + '/follow?token=' + token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: token,
                id: id
            })
        })
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => {
            let orgs = this.state.orgs
            orgs[i].followed = (response.message === 'followed')
            this.setState({orgs: orgs})
        })

    }

    give() {
        browserHistory.push('/give')
    }

    componentDidMount() {
        this.getOrgs()
        this.getCats()
    }

    render() {
        console.log(this.state.orgs)
        let orgs = this.state.orgs.map((org, i) => <li>
            <div className="checkbox">
                <label>
                    <input type="checkbox" value={org.id} onChange={(e) => this.toggleOrgsFollow(e, i)} checked={org.followed} /> {org.name}
                </label></div></li>)
        let cats = this.state.cats.map((cat, i) => <li>
            <div className="checkbox">
                <label>
                    <input type="checkbox" value={cat.id} onChange={(e) => this.toggleCausesFollow(e, i)} checked={cat.followed} /> {cat.name}
                </label>
            </div>
        </li>)

        return <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <h3>What causes are meaningful to you? </h3> <br />
                    <ul className="list-unstyled">
                        {cats}
                    </ul>
                </div>
                <div className="col-sm-6">
                    <h3>What organizations are meaningful to you?</h3> <br />
                    <ul className="list-unstyled">
                        {orgs}
                    </ul>
                </div>

            </div>
            <br /><br /><br />
            <div className="row text-center give-button">
                <Button bsStyle="success" bsSize="large" onClick={this.give}>Start Giving</Button>
            </div>
            <br /><br />

        </div>
    }
}

export default UserOnboard